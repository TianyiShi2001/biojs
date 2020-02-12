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

export class Fasta {
  // ! needs to allow for custom title parsers.
  constructor(source) {
    return 0;
  }
}
