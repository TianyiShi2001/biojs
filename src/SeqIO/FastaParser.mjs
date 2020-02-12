// Copyright 2020 by Tianyi Shi. All rights reserved.
// The code is partly inspired by the BioPython module Bio.SeqIO.FASTA

import { ParseError } from "./_Exceptions.mjs";

function checkFastaFormat(str) {
  if (str[0] !== ">") {
    throw new ParseError("Fail to parse FASTA. A FASTA file should begin with '>'.");
  }
}

function fastaTitleParser() {
  return 0;
}

function* parseFastaSimple(allLines) {
  let title = allLines[0].trimRight();
  let seqArr = [];
  for (const line of allLines.slice(1)) {
    if (line[0] === ">") {
      yield [
        title,
        seqArr
          .join("")
          .replace(" ", "")
          .replace("\r", "")
      ];
      title = line.trimRight();
      seqArr = [];
    } else {
      seqArr.push(line.trimRight());
    }
  }
  yield [
    title,
    seqArr
      .join("")
      .replace(" ", "")
      .replace("\r", "")
  ];
  return;
}

function* parseFastaTwoLines(allLines){
    for(const i=0, i < allLines.length, i++){
        const line = allLines[i]
        if (i % 2 == 0) { // title line
            if (line !== '>') {
                throw new ParseError("Expected FASTA record starting with '>' character. Perhaps this file is using FASTA line wrapping?")
            }
            title = line.slice(1).trimRight()
        } else { // sequence line
            line[0] === '>' && throw new ParseError('hello')
        }
    }
}

export class Fasta {
  // ! needs to allow for custom title parsers.
  constructor(source) {
    return 0;
  }
}
