import { Component, OnInit } from '@angular/core';
import { Rhythm, WordInPhrase } from 'src/app/interfaces/phrase-response.interface';
import { PhraseService } from 'src/app/services/phrase.service';
import { RhythmService } from 'src/app/services/rhythm.service';

@Component({
  selector: 'app-basic',
  templateUrl: './basic.component.html',
  styleUrls: ['./basic.component.css']
})
export class BasicComponent implements OnInit {
  public phrase!: WordInPhrase[];
  public counter!: number;

  constructor(
    private phraseService: PhraseService,
    private rhythmService: RhythmService
  ) { }

  ngOnInit(): void {
    this.counter = 0;
    this.phrase = this.phraseService.rhythmResponse.phrase;
    this.phraseService.communicator.subscribe(
      index => {
        this.counter++;
        this.phrase.forEach(p => p.isReadedNow = false);
        this.phrase[index].isReadedNow = true;
        console.log(this.phrase[index].word);
        

        if(this.counter == this.phraseService.rhythmResponse.rhythms.length){
          setTimeout(()=>this.reset(),1000)
        }
      }
    )
  }

  readPhrase():void{
    this.rhythmService.readPhrase(this.phraseService.rhythmResponse.rhythms);
  }

  reset(): void{
    this.counter = 0;
    this.phrase.forEach(p => p.isReadedNow = false);
  }

}
