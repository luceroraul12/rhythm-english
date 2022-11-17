import { Injectable } from '@angular/core';
import { KindOfAccent, Rhythm } from '../interfaces/phrase-response.interface';
import { PhraseService } from './phrase.service';

@Injectable({
  providedIn: 'root'
})
export class RhythmService {

  constructor(
    private phraseService: PhraseService
  ) { }

  readPhrase(rhythms: Rhythm[]){
    this.generateListOfRhythms(rhythms);

    rhythms.forEach((r,index) => {
        
        setTimeout(()=>{
          this.phraseService.communicator.next(r.wordIndexInPhrase);
        }, index * 1000);
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
}
