"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.standardizeFastaStringSingle = standardizeFastaStringSingle;
exports.parseFastaStandardisedSingle = parseFastaStandardisedSingle;

require("core-js/modules/es6.regexp.split");

require("core-js/modules/es6.regexp.replace");

var _fs = _interopRequireDefault(require("fs"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

let content = _fs.default.readFileSync("examples/parse/fasta/huge.fasta", "utf-8");

function standardizeFastaStringWrap(fastaString) {
  return fastaString.replace(/\s+(?=\n)/g, "") //trim trailling spaces in any lines
  .replace(/\s+$/, "") //trim trailling newlines
  .replace(/s+(?=\n>)/g, ""); //trim newlines between records
}

function standardizeFastaStringTwoLine(fastaString) {
  return fastaString.replace(/(?<=>.+)(\s+)$/gm, "`") //remove trailing spaces in titles and add marker
  .replace(/\s*\n/g, "") //remove newlines and any spaces before newlines
  .replace(/>/g, "\n>") //add newline before >
  .replace(/`/g, "\n"); //replace marker with newline
}

function standardizeFastaStringSingle(fastaString) {
  return fastaString.replace(/^>(.+?)\s*$/gm, ">$1>") //remove trailing spaces in titles and add marker
  .replace(/\s*\n/g, ""); //remove newlines and any spaces before newlines
}

function* parseFastaStandardisedSingle(fastaString) {
  const strings = standardizeFastaStringSingle(fastaString).split(">");
  let title, seq;

  for (let i = 1; i < strings.length; i++) {
    const str = strings[i];

    if (i % 2 === 1) {
      title = str;
    } else {
      seq = str.replace(/\s+/g, "");
      yield [title, seq];
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