import { Injectable } from '@angular/core';
import { concatMap, delay, from, interval, map, Observable, of, take, tap, timer } from 'rxjs';
import { KindOfAccent, Rhythm } from '../interfaces/phrase-response.interface';
import { PhraseService } from './phrase.service';

@Injectable({
  providedIn: 'root'
})
export class RhythmService {

  private myAudioContext = new AudioContext();

  constructor(
    private phraseService: PhraseService
  ) { }

  readPhrase(rhythms: Rhythm[]){
    let result: Array<Rhythm[]> = this.generateListOfRhythms(rhythms);

    let observable: Observable<Rhythm[]> = from(result)
                                            .pipe(
                                              concatMap(val => of(val).pipe(delay(1000))),
                                              // tap(console.log)
                                            );

    let observableInside: Observable<Rhythm>;

    observable.subscribe(
      rhythms => {
        let count: number = rhythms.length;
        observableInside = from(rhythms)
                            .pipe(
                              concatMap(val => of(val).pipe(delay(1000/count))),
                              tap(rhythm => this.emitBeep(result, rhythm))
                            );
        observableInside.subscribe( w => {
          this.phraseService.communicator.next(w.wordIndexInPhrase);
        });
      }
    );
  }
  emitBeep(result: Rhythm[][], rhythm: Rhythm) {
    result.forEach(list => {
      rhythm == list[0] ? this.beep(200,440,10) : this.beep(200,300,3);
    })
  }

  generateListOfRhythms(rhythms: Rhythm[]): Array<Rhythm[]>{
    let highIndexs: number[] = [];
    let result: Array<Rhythm[]> = [];

    rhythms.forEach((p, index) => {
      if (p.kindOfAccent == KindOfAccent.HIGH){
        highIndexs.push(index);
      }
    });

    console.log('index of High accents',highIndexs);
    
    let lastIndex = 0;
    highIndexs.forEach(
      i => {
        result.push(
          rhythms.slice(lastIndex, i)
        );
        if(i == rhythms.length-1 ){
          result.push([rhythms[i]]);
        }
        lastIndex = i;
      }
    );

    console.log('result :', result);
    


    return result;
  }



  beep(duration: number, frequency: number, volume: number){
    return new Promise<void>((resolve, reject) => {
        // Set default duration if not provided
        duration = duration || 200;
        frequency = frequency || 440;
        volume = volume;

        try{
            let oscillatorNode = this.myAudioContext.createOscillator();
            let gainNode = this.myAudioContext.createGain();
            oscillatorNode.connect(gainNode);

            // Set the oscillator frequency in hertz
            oscillatorNode.frequency.value = frequency;

            // Set the type of oscillator
            oscillatorNode.type= "square";
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
