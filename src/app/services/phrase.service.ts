import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { KindOfAccent, PhraseResponse, Rhythm } from '../interfaces/phrase-response.interface';

@Injectable({
  providedIn: 'root'
})
export class PhraseService {
  rhythmResponse: PhraseResponse = {
    phrase: 'I like to play the piano all days in my home'.split(" "), // 11 words
    rhythms: [
      {word: "I"        ,kindOfAccent: KindOfAccent.LOW,      wordIndexInPhrase: 0},
      {word: "like"     ,kindOfAccent: KindOfAccent.HIGH,     wordIndexInPhrase: 1},
      {word: "to"       ,kindOfAccent: KindOfAccent.LOW,      wordIndexInPhrase: 2},
      {word: "play"     ,kindOfAccent: KindOfAccent.HIGH,     wordIndexInPhrase: 3},
      {word: "the"      ,kindOfAccent: KindOfAccent.LOW,      wordIndexInPhrase: 4},
      {word: "piano"    ,kindOfAccent: KindOfAccent.HIGH,     wordIndexInPhrase: 5},
      {word: "all"      ,kindOfAccent: KindOfAccent.LOW,      wordIndexInPhrase: 6},
      {word: "days"     ,kindOfAccent: KindOfAccent.HIGH,     wordIndexInPhrase: 7},
      {word: "in"       ,kindOfAccent: KindOfAccent.LOW,      wordIndexInPhrase: 8},
      {word: "my"       ,kindOfAccent: KindOfAccent.LOW,      wordIndexInPhrase: 9},
      {word: "home"     ,kindOfAccent: KindOfAccent.HIGH,     wordIndexInPhrase: 10},
    ]
  }

  communicator: Subject<number> = new Subject();

  constructor() { }
}
