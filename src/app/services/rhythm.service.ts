import { Injectable } from '@angular/core';
import { concatMap, delay, from, interval, map, Observable, of, take, tap, timer } from 'rxjs';
import { KindOfAccent, Rhythm } from '../interfaces/phrase-response.interface';
import { PhraseService } from './phrase.service';

@Injectable({
  providedIn: 'root'
})
export class RhythmService {

  private myAudioContext = new AudioContext();
  private everyTime: number = 1000;

  constructor(
    private phraseService: PhraseService
  ) { }

  readPhrase(lists: Array<Rhythm[]>){

    let observable: Observable<Rhythm[]> = from(lists)
                                            .pipe(
                                              concatMap(val => of(val).pipe(delay(this.everyTime))),
                                            );

    let observableInside: Observable<Rhythm>;

    observable.subscribe(
      rhythms => {
        let count: number = rhythms.length;
        observableInside = from(rhythms)
                            .pipe(
                              concatMap(val => of(val).pipe(delay(this.everyTime/count))),
                              tap(rhythm => this.emitBeep(rhythm))
                            );
        observableInside.subscribe( w => {
          this.phraseService.communicator.next(w.wordIndexInPhrase);
        });
      }
    );
  }

  emitBeep(rhythm: Rhythm) {
    if(rhythm.kindOfAccent == KindOfAccent.HIGH){
      this.beep(200, 440, 10);
    } else {
      this.beep(200, 400, 3);
    }
  }

  beep(duration: number, frequency: number, volume: number){
    return new Promise<void>((resolve, reject) => {
        // Set default duration if not provided
        duration = duration || 200;
        frequency = frequency || 440;
        volume = volume || 100;

        try{
            let oscillatorNode = this.myAudioContext.createOscillator();
            let gainNode = this.myAudioContext.createGain();
            oscillatorNode.connect(gainNode);

            // Set the oscillator frequency in hertz
            oscillatorNode.frequency.value = frequency;

            // Set the type of oscillator
            oscillatorNode.type= "sine";
            gainNode.connect(this.myAudioContext.destination);

            // Set the gain to the volume
            gainNode.gain.value = volume * 0.01;

            // Start audio with the desired duration
            oscillatorNode.start(this.myAudioContext.currentTime);
            oscillatorNode.stop(this.myAudioContext.currentTime + duration * 0.001);

            // Resolve the promise when the sound is finished
            oscillatorNode.onended = () => {
                resolve();
            };
        }catch(error){
            reject(error);
        }
    });
  }
}
