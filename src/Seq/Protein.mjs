import { AminoAcidComposition } from "./AminoAcidComposition.mjs";
import { calcMolecularWeight, calcAtomicComposition, calcIsoelectricPoint, calcExtinctionCoefficient, calcAliphaticIndex } from "./ProteinParams.mjs";
import { Seq } from "./Seq.mjs";

export class Protein extends Seq {
  constructor(seq) {
    super(seq);
    this.aminoAcidComposition = new AminoAcidComposition(seq);
    this.positiveCount = this.aminoAcidComposition.R.count + this.aminoAcidComposition.K.count;
    this.negativeCount = this.aminoAcidComposition.D.count + this.aminoAcidComposition.E.count;
    this.atomicComposition = calcAtomicComposition(this.aminoAcidComposition);
    [this.molecularWeight, this.molecularWeightIsotopic] = calcMolecularWeight(this.aminoAcidComposition);
    this.isoelectricPoint = calcIsoelectricPoint(this.aminoAcidComposition, seq[0], seq[seq.length - 1]);
    this.extinction_coeffient = calcExtinctionCoefficient(this.aminoAcidComposition);
    this.aliphaticIndex = calcAliphaticIndex(this.aminoAcidComposition);
  }
}

// const prot = "MISDDDDLPSTRPGSVNEELPETEPEDNDELPETEPESDSPTVTSNKTENQVADEDYDSFDDFVPSQTHTASKIPVKNKRAKKCTVESDSSSSDDSDQGDDCEFIPACDETQEVPKIKRGYTLRTRASVKNKCDDSWDDGIDEEDVSKRSEDTLNDSFVDPEFMDSVLDNQLTIKGKKQFLDDGEFFTDRNVPQIDEATKMKWASMTSPPQEALNALNEFFGHKGFREKQWDVVRNVLGGKDQFVLMSTGYGKS";
// let myprot = new Protein(prot);
// console.log(myprot);
