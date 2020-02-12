// Copyright 2020 Tianyi Shi.

/*Provide objects to represent biological sequences with alphabets.

*/

import { guessAlphabet } from "./_Alphabet.mjs";

export class Seq {
  constructor(seq, alphabet) {
    this.seq = seq.toUpperCase();
    this.length = seq.length;
    this.alphabet = alphabet || guessAlphabet(seq);
  }
}
