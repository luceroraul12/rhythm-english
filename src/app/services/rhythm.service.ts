import { Injectable } from '@angular/core';
import { Rhythm } from '../interfaces/phrase-response.interface';
import { PhraseService } from './phrase.service';

@Injectable({
  providedIn: 'root'
})
export class RhythmService {

  constructor(
    private phraseService: PhraseService
  ) { }

  readPhrase(rhythms: Rhythm[]){
    rhythms.forEach(r => {
        setTimeout(() => this.phraseService.communicator.next(r.wordIndexInPhrase), 2000);
    })
  }
}
