import { Word } from "./word.interface";

export interface PhraseResponse{
    phrase: string[];
    rhythms: Rhythm[];
}

export interface Rhythm{
    word: string;
    kindOfAccent: KindOfAccent;
    wordIndexInPhrase: number;
    isReadedNow?: boolean;
}

export enum KindOfAccent{
    LOW, HIGH
}
