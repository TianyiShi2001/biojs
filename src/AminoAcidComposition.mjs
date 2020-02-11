import { AMINO_ACID_DATA } from "./AMINO_ACID_DATA.mjs";

export class AminoAcidComposition {
  constructor(seq) {
    this.init();
    this.count_aa(seq);
  }
  init() {
    for (const a of AMINO_ACID_DATA.ALL) {
      this[a] = {};
      this[a].count = 0;
    }
  }
  count_aa(seq) {
    for (const a of seq) {
      this[a]["count"]++;
    }
    for (const a in this) {
      this[a]["content"] = this[a]["count"] / seq.length;
    }
  }
}
