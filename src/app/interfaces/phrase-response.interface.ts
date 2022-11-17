import { Word } from "./word.interface";

export interface PhraseResponse{
    phrase: WordInPhrase[];
    rhythms: Rhythm[];
}

export interface WordInPhrase{
    word: string;
    isReadedNow?: boolean;
}

export interface Rhythm{
    kindOfAccent: KindOfAccent;
    wordIndexInPhrase: number;
}

export enum KindOfAccent{
    LOW, HIGH
}
