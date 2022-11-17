export interface Word{
    word            : string;
    kindOfWord      : KindOfWord;
    syllablesNumber : number;
    accentSyllable  : number;
}

export enum KindOfWord {
    CONTENT, FUNCTIONAL
}
