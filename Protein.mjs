import { AminoAcidComposition } from "./AminoAcidComposition.mjs";
import { compute_molecular_weight, compute_isoelectric_point } from "./ProteinParams.mjs";

class Protein {
  constructor(seq) {
    this.seq = seq.toUpperCase();
    this.length = this.seq.length;
    this.aminoAcidComposition = new AminoAcidComposition(seq);
    [this.molecular_weight, this.molecular_weight_isoelectric] = compute_molecular_weight(this.aminoAcidComposition);
    this.isoelectric_point = compute_isoelectric_point(this.aminoAcidComposition);
  }
}

export const prot = "MISDDDDLPSTRPGSVNEELPETEPEDNDELPETEPESDSDKPTVTSNKTENQVADEDYDSFDDFVPSQTHTASKIPVKNKRAKKCTVESDSSSSDDSDQGDDCEFIPACDETQEVPKIKRGYTLRTRASVKNKCDDSWDDGIDEEDVSKRSEDTLNDSFVDPEFMDSVLDNQLTIKGKKQFLDDGEFFTDRNVPQIDEATKMKWASMTSPPQEALNALNEFFGHKGFREKQWDVVRNVLGGKDQFVLMSTGYGKS";
let myprot = new Protein(prot);
console.log(myprot);
