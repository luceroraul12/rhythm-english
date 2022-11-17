export interface PhraseResponse{
    phrase: string;
    rhythms: Rhythm[];
}

export interface Rhythm{
    kindOfAccent: KindOfAccent;
    wordIndexInPhrase: number;
}

export enum KindOfAccent{
    LOW, HIGH
}
