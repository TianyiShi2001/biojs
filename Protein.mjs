import { AminoAcidComposition } from "./AminoAcidComposition.mjs";
import { compute_molecular_weight, compute_atomic_composition, compute_isoelectric_point, compute_extinction_coefficient } from "./ProteinParams.mjs";

export class Protein {
  constructor(seq) {
    this.seq = seq.toUpperCase();
    this.length = this.seq.length;
    this.aminoAcidComposition = new AminoAcidComposition(seq);
    this.positiveCount = this.aminoAcidComposition.R.count + this.aminoAcidComposition.K.count;
    this.negativeCount = this.aminoAcidComposition.D.count + this.aminoAcidComposition.E.count;
    this.atomicComposition = compute_atomic_composition(this.aminoAcidComposition);
    [this.molecularWeight, this.molecularWeightIsoelectric] = compute_molecular_weight(this.aminoAcidComposition);
    this.isoelectricPoint = compute_isoelectric_point(this.aminoAcidComposition, seq[0], seq[seq.length-1]);
    this.extinction_coeffient = compute_extinction_coefficient(this.aminoAcidComposition)
  }
}

const prot = "MISDDDDLPSTRPGSVNEELPETEPEDNDELPETEPESDSDKPTVTSNKTENQVADEDYDSFDDFVPSQTHTASKIPVKNKRAKKCTVESDSSSSDDSDQGDDCEFIPACDETQEVPKIKRGYTLRTRASVKNKCDDSWDDGIDEEDVSKRSEDTLNDSFVDPEFMDSVLDNQLTIKGKKQFLDDGEFFTDRNVPQIDEATKMKWASMTSPPQEALNALNEFFGHKGFREKQWDVVRNVLGGKDQFVLMSTGYGKS";
let myprot = new Protein(prot);
console.log(myprot);
