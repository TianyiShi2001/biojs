import yargs from "yargs";
import { Protein } from "./src/Seq/Protein.mjs";
import { FastaParser } from "./src/SeqIO/FastaParser1.mjs";
import fs from "fs";

// const seq = yargs.argv._[0];
// yargs.argv.protein && console.log(new Protein(seq));

const fn = yargs.argv.f;
const isProtein = yargs.argv.protein;

const fasta = new FastaParser({
  definition: "gi|accession|description",
  delimiter: "|"
});

let sequence = fs.readFileSync(fn || "examples/parse/fasta/ce.fasta", "utf8");

isProtein && console.log(new Protein(fasta.parse(sequence)[0].sequence));

//node cli.mjs -f "examples/parse/fasta/ce.fasta" --protein
