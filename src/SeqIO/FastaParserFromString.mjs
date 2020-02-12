import fs from "fs";

let content = fs.readFileSync("examples/parse/fasta/corrupted.fasta", "utf-8");

function standardizeFastaStringWrap(fastaString) {
  return fastaString
    .replace(/\s+(?=\n)/g, "") //trim trailling spaces in any lines
    .replace(/\s+$/, "") //trim trailling newlines
    .replace(/s+(?=\n>)/g, ""); //trim newlines between records
}

function standardizeFastaStringTwoLine(fastaString) {
  return fastaString
    .replace(/(?<=>.+)(\s+)$/gm, "`") //remove trailing spaces in titles and add marker
    .replace(/\s*\n/g, "") //remove newlines and any spaces before newlines
    .replace(/>/g, "\n>") //add newline before >
    .replace(/`/g, "\n"); //replace marker with newline
}

function standardizeFastaStringSingle(fastaString) {
  return fastaString
    .replace(/^>(.+?)\s*$/gm, ">$1>") //remove trailing spaces in titles and add marker
    .replace(/\s*\n/g, ""); //remove newlines and any spaces before newlines
}

function* parseFastaStandardisedSingle(standardizedFastaString) {
  const strings = standardizedFastaString.split(">");
  let title, seq;
  for (let i = 1; i < strings.length; i++) {
    const str = strings[i];
    if (i % 2 == 1) {
      title = str;
    } else {
      seq = str.replace(/\s+/g, "");
      yield [title, seq];
    }
  }
}

console.log(standardizeFastaStringSingle(content));

//console.log(standardizeFastaStringSingle(content));
//console.log(standardizeFastaStringWrap(content));

console.log([...parseFastaStandardisedSingle(standardizeFastaStringSingle(content))]);
