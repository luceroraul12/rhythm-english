import { Component, OnInit } from '@angular/core';
import { PhraseService } from 'src/app/services/phrase.service';
import { RhythmService } from 'src/app/services/rhythm.service';

@Component({
  selector: 'app-basic',
  templateUrl: './basic.component.html',
  styleUrls: ['./basic.component.css']
})
export class BasicComponent implements OnInit {
  public phrase!: string[];

  constructor(
    private phraseService: PhraseService,
    private rhythmService: RhythmService
  ) { }

  ngOnInit(): void {
    this.phrase = this.phraseService.rhythmResponse.phrase;
  }

}
