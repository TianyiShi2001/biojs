import readline from "readline";
import fs from "fs";
import lineByLine from "n-readlines";

const liner = new lineByLine("examples/parse/fasta/ce.fasta");
let line;
console.log(liner.next().toString("utf8")[0]);
while ((line = liner.next())) {
  console.log(line.toString("utf8"));
}
