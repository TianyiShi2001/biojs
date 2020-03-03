"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.AminoAcidComposition = void 0;

var _AMINO_ACID_DATA = require("../Data/AMINO_ACID_DATA.js");

class AminoAcidComposition {
  constructor(seq) {
    this.init();
    this.count_aa(seq);
  }

  init() {
    for (const a of _AMINO_ACID_DATA.AMINO_ACID_DATA.ALL) {
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

exports.AminoAcidComposition = AminoAcidComposition;
