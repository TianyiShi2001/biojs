import { AminoAcidData } from "./AminoAcidData.mjs";

export class AminoAcidComposition {
  constructor(seq) {
    this.init();
    this.count_aa(seq);
  }
  init() {
    for (const a of AminoAcidData.all) {
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
