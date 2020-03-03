import { FastaParser } from "./src/SeqIO/FastaParser1.mjs";
import fs from "fs";

const options = {
  definition: "gi|accession|description",
  delimiter: "|"
};

const fasta = new FastaParser(options);

let sequence = fs.readFileSync("examples/ce.fasta", "utf8");
// fs.readFile("examples/ce.fasta", "utf8", (err, content) => {
//   if (err) throw err;
//   sequence = content;
// });

console.log(fasta.parse(sequence)[0].sequence);
