"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Protein = void 0;

var _AminoAcidComposition = require("./AminoAcidComposition.js");

var _ProteinParams = require("./ProteinParams.js");

var _Seq = require("./Seq.js");

class Protein extends _Seq.Seq {
  constructor(seq) {
    super(seq);
    this.aminoAcidComposition = new _AminoAcidComposition.AminoAcidComposition(
      seq
    );
    this.positiveCount =
      this.aminoAcidComposition.R.count + this.aminoAcidComposition.K.count;
    this.negativeCount =
      this.aminoAcidComposition.D.count + this.aminoAcidComposition.E.count;
    this.atomicComposition = (0, _ProteinParams.calcAtomicComposition)(
      this.aminoAcidComposition
    );
    [this.molecularWeight, this.molecularWeightIsotopic] = (0,
    _ProteinParams.calcMolecularWeight)(this.aminoAcidComposition);
    this.isoelectricPoint = (0, _ProteinParams.calcIsoelectricPoint)(
      this.aminoAcidComposition,
      seq[0],
      seq[seq.length - 1]
    );
    this.extinction_coeffient = (0, _ProteinParams.calcExtinctionCoefficient)(
      this.aminoAcidComposition
    );
    this.aliphaticIndex = (0, _ProteinParams.calcAliphaticIndex)(
      this.aminoAcidComposition
    );
  }
} // const prot = "MISDDDDLPSTRPGSVNEELPETEPEDNDELPETEPESDSPTVTSNKTENQVADEDYDSFDDFVPSQTHTASKIPVKNKRAKKCTVESDSSSSDDSDQGDDCEFIPACDETQEVPKIKRGYTLRTRASVKNKCDDSWDDGIDEEDVSKRSEDTLNDSFVDPEFMDSVLDNQLTIKGKKQFLDDGEFFTDRNVPQIDEATKMKWASMTSPPQEALNALNEFFGHKGFREKQWDVVRNVLGGKDQFVLMSTGYGKS";
// let myprot = new Protein(prot);
// console.log(myprot);

exports.Protein = Protein;
