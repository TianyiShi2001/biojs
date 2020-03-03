"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Seq = void 0;

var _Alphabet = require("./_Alphabet.js");

// Copyright 2020 Tianyi Shi.

/*Provide objects to represent biological sequences with alphabets.

*/
class Seq {
  constructor(seq, alphabet) {
    this.seq = seq.toUpperCase();
    this.length = seq.length;
    this.alphabet = alphabet || (0, _Alphabet.guessAlphabet)(seq);
  }
}

exports.Seq = Seq;
