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

  constructor(
    private phraseService: PhraseService,
    private rhythmService: RhythmService
  ) { }

  ngOnInit(): void {
    this.phrase = this.phraseService.rhythmResponse.phrase;
    this.phraseService.communicator.subscribe(
      index => {
        this.phrase[index].isReadedNow = true;
      }
    )
    this.rhythmService.readPhrase(this.phraseService.rhythmResponse.rhythms);
  }

}
