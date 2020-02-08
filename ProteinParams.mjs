import { AminoAcidData } from "./AminoAcidData.mjs";

export function compute_molecular_weight(aminoAcidComposition) {
  const { mw: mw_table } = AminoAcidData;
  let mw = 0,
    mw_mi = 0;
  for (const a in aminoAcidComposition) {
    mw += aminoAcidComposition[a]["count"] * mw_table[a][0];
    mw_mi += aminoAcidComposition[a]["count"] * mw_table[a][1];
  }
  mw += mw_table["water"][0];
  mw_mi += mw_table["water"][1];
  return [mw, mw_mi];
}

export function compute_isoelectric_point(aminoAcidComposition) {
  let {
    charge: { pos_pKs, neg_pKs, pKcterminal, pKnterminal, charged_aas }
  } = AminoAcidData;

  const charged_aas_count = (function select_charged() {
    let charged = {};
    for (const aa of charged_aas) {
      charged[aa] = aminoAcidComposition[aa].count;
    }
    charged["Nterm"] = 1.0;
    charged["Cterm"] = 1.0;
    return charged;
  })();

  function charge_at_pH(pH) {
    let positive_charge = 0;
    for (const a in pos_pKs) {
      const pK = pos_pKs[a];
      const partial_charge = 1.0 / (1.0 + 10 ** (pH - pK));
      positive_charge += charged_aas_count[a] * partial_charge;
    }
    let negative_charge = 0;
    for (const a in neg_pKs) {
      const pK = neg_pKs[a];
      const partial_charge = 1.0 / (1.0 + 10 ** (pK - pH));
      negative_charge += charged_aas_count[a] * partial_charge;
    }
    return positive_charge - negative_charge;
  }

  function pi(pH = 7.775, min = 3.55, max = 12) {
    const charge = charge_at_pH(pH);
    if (max - min > 0.0001) {
      (charge > 0.0 && (min = pH)) || (max = pH);
      return pi((min + max) / 2, min, max);
    } else {
      return pH;
    }
  }
  return pi();
}

//   (function _update_pKs_tables() {
//     nterm in pKnterminal && (pos_pKs["Nterm"] = pKnterminal[nterm]);
//     cterm in pKcterminal && (neg_pKs["Cterm"] = pKcterminal[cterm]);
//   })();
