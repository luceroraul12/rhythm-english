import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { KindOfAccent, PhraseResponse, Rhythm } from '../interfaces/phrase-response.interface';

@Injectable({
  providedIn: 'root'
})
export class PhraseService {
  rhythmResponse: PhraseResponse = {
    phrase: [
      {word: "I"     },
      {word: "like"  },
      {word: "to"    },
      {word: "play"  },
      {word: "the"   },
      {word: "piano" },
      {word: "all"   },
      {word: "days"  },
      {word: "in"    },
      {word: "my"    },
      {word: "home"  },
    ], // 11 words
    rhythms: [
      {kindOfAccent: KindOfAccent.LOW,      wordIndexInPhrase: 0},
      {kindOfAccent: KindOfAccent.HIGH,     wordIndexInPhrase: 1},
      {kindOfAccent: KindOfAccent.LOW,      wordIndexInPhrase: 2},
      {kindOfAccent: KindOfAccent.HIGH,     wordIndexInPhrase: 3},
      {kindOfAccent: KindOfAccent.LOW,      wordIndexInPhrase: 4},
      {kindOfAccent: KindOfAccent.HIGH,     wordIndexInPhrase: 5},
      {kindOfAccent: KindOfAccent.LOW,      wordIndexInPhrase: 5},
      {kindOfAccent: KindOfAccent.LOW,      wordIndexInPhrase: 6},
      {kindOfAccent: KindOfAccent.HIGH,     wordIndexInPhrase: 7},
      {kindOfAccent: KindOfAccent.LOW,      wordIndexInPhrase: 8},
      {kindOfAccent: KindOfAccent.LOW,      wordIndexInPhrase: 9},
      {kindOfAccent: KindOfAccent.HIGH,     wordIndexInPhrase: 10},
    ],
    listRhythmToPlay: [
      [
        {kindOfAccent: KindOfAccent.LOW,      wordIndexInPhrase: 0},
        {kindOfAccent: KindOfAccent.HIGH,     wordIndexInPhrase: 1},
      ],
      [
        {kindOfAccent: KindOfAccent.LOW,      wordIndexInPhrase: 2},
        {kindOfAccent: KindOfAccent.HIGH,     wordIndexInPhrase: 3},
      ],
      [
        {kindOfAccent: KindOfAccent.LOW,      wordIndexInPhrase: 4},
        {kindOfAccent: KindOfAccent.HIGH,     wordIndexInPhrase: 5},
      ],
      [
        {kindOfAccent: KindOfAccent.LOW,      wordIndexInPhrase: 5},
        {kindOfAccent: KindOfAccent.LOW,      wordIndexInPhrase: 6},
        {kindOfAccent: KindOfAccent.HIGH,     wordIndexInPhrase: 7},
      ],
      [
        {kindOfAccent: KindOfAccent.LOW,      wordIndexInPhrase: 8},
        {kindOfAccent: KindOfAccent.LOW,      wordIndexInPhrase: 9},
        {kindOfAccent: KindOfAccent.HIGH,     wordIndexInPhrase: 10},
      ],
    ]
  }

  communicator: Subject<number> = new Subject();

  constructor() { }
}
