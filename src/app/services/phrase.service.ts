import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PhraseService {
  phrase: string = "I like to play the piano all days in my home";

  constructor() { }
}
