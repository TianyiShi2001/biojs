// Copyright 2020 by Tianyi Shi. All rights reserved.
// The code is partly inspired by the BioPython module Bio.SeqIO.FASTA

import { ParseError } from "./_Exceptions.mjs";

function checkFastaFormat(str) {
  if (str[0] !== ">") {
    throw new ParseError("Fail to parse FASTA. A FASTA file should begin with '>'.");
  }
}

function parseFastaTitle() {
  return 0;
}

function standardiseFastaString(fastaString) {
  return fastaString
    .replace(/\s+(?=\n)/g, "") //trim trailling spaces in any lines
    .replace(/\s+$/g, "") //trin trailling newlines
    .replace(/s+(?=\n>)/g, ""); //trim newlines between records
}

function* parseFastaSimple(fastaStringStandardised) {
  const allLines = fastaStringStandardised.split('\n')
  let title = allLines[0];
  let seqArr = [];
  for (const line of allLines.slice(1)) {
    if (line[0] === ">") {
      yield [title, seqArr.join("").replace(/\s/g, "")];
      title = line;
      seqArr = [];
    } else {
      seqArr.push(line);
    }
  }
  yield [title, seqArr.join("").replace(/\s/g, "")];
  return;
}

function* parseFastaSimpleTwoLine(fastaStringStandardised) {
  const allLines = fastaStringStandardised.split('\n')
  for (const i = 0; i < allLines.length; i++) {
    const line = allLines[i];
    if (!line.trim()) break; // possible trailing empty lines
    if (i % 2 == 0) {
      // title line
      if (line !== ">") {
        throw new ParseError("Expected FASTA record starting with '>' character. Perhaps this file is using FASTA line wrapping?");
      }
      title = line.slice(1).trimRight();
    } else {
      // sequence line
      if (line[0] === ">") {
        throw new ParseError("Two '>' FASTA lines in a row. Missing sequence line if this is strict tow-line-per-record FASTA format.");
      }
      yield [title, line.trim()];
    }
  }
}

function* fastaParserSimpleSimple(fastaStringStandardised) {
  for (let record of fastaStringStandardised.split(">").slice(1)) {
    let loc = record.indexOf("\n");
    let title = record.slice(0, loc),
      seq = record.slice(loc).replace(/\s+/g, "");
    yield [title, seq];
  }
}

function parseFasta(source)

export class Fasta {
  // ! needs to allow for custom title parsers.
  constructor(source) {
    return 0;
  }
}
