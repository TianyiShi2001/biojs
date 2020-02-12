import yargs from "yargs";
import { Protein } from "./src/Seq/Protein.mjs";
import { FastaParser } from "./src/SeqIO/FastaParser1.mjs";
import fs from "fs";

// const argv = yargs.command("seq", "The sequence", {
//   description: "The sequence",
//   alias: "s",
//   type: "string"
// }).argv;

// prompt.start();
// prompt.get(["seq"], function(err, result) {
//   if (err) {
//     return err;
//   }
//   console.log(new Protein(result.seq));
// });

const seq = yargs.argv._[0];

yargs.argv.protein && console.log(new Protein(seq));

const options = {
  definition: "gi|accession|description",
  delimiter: "|"
};

const fasta = new FastaParser(options);

let sequence = fs.readFileSync("examples/ce.fasta", "utf8");

console.log(fasta.parse(sequence)[0].sequence);
