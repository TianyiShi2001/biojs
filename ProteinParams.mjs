import { AMINO_ACID_DATA } from "./AMINO_ACID_DATA.mjs";

export function compute_molecular_weight(aminoAcidComposition) {
  const { MOLECULAR_WEIGHT: mw_table } = AMINO_ACID_DATA;
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

export function compute_atomic_composition(aminoAcidComposition) {
  const { ATOMIC_COMPOSITION } = AMINO_ACID_DATA;
  let composition = {C:0, H:0, N:0, O:0, S:0, Se:0}
  for (const a in aminoAcidComposition) {
    for (const e in ATOMIC_COMPOSITION[a]) {
      composition[e] += aminoAcidComposition[a]["count"] * ATOMIC_COMPOSITION[a][e]
    }
  }
  return composition
}

export function compute_extinction_coefficient(aminoAcidComposition) {
  const { C, W, Y } = aminoAcidComposition
  const { EXTINCTION_COEFFICIENT } = AMINO_ACID_DATA
  const e1 = W.count + EXTINCTION_COEFFICIENT.W + Y.count * EXTINCTION_COEFFICIENT.Y
  const e2 = e1 + C.count * EXTINCTION_COEFFICIENT.C
  return [e1, e2]
}

export function compute_isoelectric_point(aminoAcidComposition, nTerm, cTerm) {
  let {
    CHARGE: { POSITIVE_PKAS, NEGATIVE_PKAS, PKA_C_TERMINAL, PKA_N_TERMINAL, CHARGED_AMINO_ACIDS }
  } = AMINO_ACID_DATA;

  (function _update_pKs_tables() {
    nTerm in PKA_N_TERMINAL && (POSITIVE_PKAS["nTerm"] = PKA_N_TERMINAL[nTerm]);
    cTerm in PKA_C_TERMINAL && (NEGATIVE_PKAS["cTerm"] = PKA_C_TERMINAL[cTerm]);
  })();

  const CHARGED_AMINO_ACIDS_count = (function select_charged() {
    let charged = {};
    for (const a of CHARGED_AMINO_ACIDS) {
      charged[a] = aminoAcidComposition[a].count;
    }
    charged["nTerm"] = 1.0;
    charged["cTerm"] = 1.0;
    return charged;
  })();

  function charge_at_pH(pH) {
    let positive_charge = 0;
    for (const a in POSITIVE_PKAS) {
      const pK = POSITIVE_PKAS[a];
      const partial_charge = 1.0 / (1.0 + 10 ** (pH - pK));
      positive_charge += CHARGED_AMINO_ACIDS_count[a] * partial_charge;
    }
    let negative_charge = 0;
    for (const a in NEGATIVE_PKAS) {
      const pK = NEGATIVE_PKAS[a];
      const partial_charge = 1.0 / (1.0 + 10 ** (pK - pH));
      negative_charge += CHARGED_AMINO_ACIDS_count[a] * partial_charge;
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


