import { Component, OnInit } from '@angular/core';
import { PhraseService } from 'src/app/services/phrase.service';

@Component({
  selector: 'app-basic',
  templateUrl: './basic.component.html',
  styleUrls: ['./basic.component.css']
})
export class BasicComponent implements OnInit {
  public phrase!: string;

  constructor(
    private phraseService: PhraseService
  ) { }

  ngOnInit(): void {
    this.phrase = this.phraseService.phrase;
  }

}
