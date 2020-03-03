"use strict";

var _yargs = _interopRequireDefault(require("yargs"));

var _Protein = require("./lib/Seq/Protein.js");

var _FastaParser = require("./lib/SeqIO/FastaParser1.js");

var _fs = _interopRequireDefault(require("fs"));

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

// const seq = yargs.argv._[0];
// yargs.argv.protein && console.log(new Protein(seq));
const fn = _yargs.default.argv.f;
const isProtein = _yargs.default.argv.protein;
const fasta = new _FastaParser.FastaParser({
  definition: "gi|accession|description",
  delimiter: "|"
});

let sequence = _fs.default.readFileSync(
  fn || "examples/parse/fasta/ce.fasta",
  "utf8"
);

isProtein &&
  console.log(new _Protein.Protein(fasta.parse(sequence)[0].sequence)); //node cli.js -f "examples/parse/fasta/ce.fasta" --protein
