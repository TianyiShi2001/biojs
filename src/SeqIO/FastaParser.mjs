// Copyright 2020 by Tianyi Shi. All rights reserved.
// The code is partly inspired by the BioPython module Bio.SeqIO.FASTA

import { ParseError } from "./_Exceptions.mjs";
import fs from "fs";

function checkFastaFormat(str) {
  if (str[0] !== ">") {
    throw new ParseError("Fail to parse FASTA. A FASTA file should begin with '>'.");
  }
}

const fastaNcbiIdentifiers = { bbm: "GenInfobackbone moltype", bbs: "GenInfo backbone seqid", dbj: "DDBJ", emb: "EMBL", gb: "GenBank", gi: "GenInfo integrated database", gim: "GenInfo import ID", gnl: "General database reference", lcl: "Local" };

const fastaNcbiIdentifiers1 = {
  lcl: /lcl\|(?<acc>[a-z1-9]+)/,
  bbs: /bbs\|(?<acc>\d+)/,
  bbm: /bbm\|(?<acc>\d+)/,
  gim: /gim\|(?<acc>\d+)/,
  gb: /gb\|(?<acc>[^|]+)\|(?<loc>[a-z1-9]*)/,
  gi: /gi\|(?<acc>\d+)/
};

function guessFastaTitleParser(title) {
  // const sep = (function guessSepartor() {
  //   return (title.match(/\|/) && "\\|") || (title.match(/ - /) && " - ");
  // })();
  // return title.split(new RegExp(sep));
  for (const i in fastaNcbiIdentifiers1) {
    const re = fastaNcbiIdentifiers1[i];
    title.match(re) && console.log(title.match(re));
  }
}

const r = ["gi|5524211|gb|AAD44166.1| cytochrome b [Elephas maximus maximus]", "MCHU - Calmodulin - Human, rabbit, bovine, rat, and chicken"].map(guessFastaTitleParser);
console.log(r);

export function* parseFastaLines(allLines) {
  let title = allLines[0];
  let seqArr = [];
  for (const line of allLines.slice(1)) {
    if (line[0] === ">") {
      yield [title, seqArr.join("").replace(/\s+/g, "")];
      title = line;
      seqArr = [];
    } else {
      seqArr.push(line);
    }
  }
  yield [title, seqArr.join("").replace(/\s+/g, "")];
  return;
}

export function parseFastaString(fastaString) {
  const allLines = fastaString.split("\n");
  return parseFastaLines(allLines);
}

export function parseFastaFile(fn) {
  return parseFastaString(fs.readFileSync(fn));
}

// function parseFasta(source, titleParser) {}

// export class Fasta {
//   // ! needs to allow for custom title parsers.
//   constructor(source) {
//     this.sequences = this.read(titleParser);
//   }
//   read(titleParser) {
//     console.log(`using ${titleParser}`);
//   }
//   write() {}
// }
