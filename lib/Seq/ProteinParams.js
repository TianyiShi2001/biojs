"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.calcMolecularWeight = calcMolecularWeight;
exports.calcAtomicComposition = calcAtomicComposition;
exports.calcExtinctionCoefficient = calcExtinctionCoefficient;
exports.calcAbsorbance1MgMl = calcAbsorbance1MgMl;
exports.calcIsoelectricPoint = calcIsoelectricPoint;
exports.calcAliphaticIndex = calcAliphaticIndex;

var _AMINO_ACID_DATA = require("../Data/AMINO_ACID_DATA.js");

function calcMolecularWeight(aminoAcidComposition) {
  const { MOLECULAR_WEIGHT: mw_table } = _AMINO_ACID_DATA.AMINO_ACID_DATA;
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

function calcAtomicComposition(aminoAcidComposition) {
  const { ATOMIC_COMPOSITION } = _AMINO_ACID_DATA.AMINO_ACID_DATA;
  let composition = {
    C: 0,
    H: 0,
    N: 0,
    O: 0,
    S: 0,
    Se: 0
  };

  for (const a in aminoAcidComposition) {
    for (const e in ATOMIC_COMPOSITION[a]) {
      composition[e] +=
        aminoAcidComposition[a]["count"] * ATOMIC_COMPOSITION[a][e];
    }
  }

  return composition;
}

function calcExtinctionCoefficient(aminoAcidComposition) {
  const { C, W, Y } = aminoAcidComposition;
  const { EXTINCTION_COEFFICIENT } = _AMINO_ACID_DATA.AMINO_ACID_DATA;
  const e1 =
    W.count + EXTINCTION_COEFFICIENT.W + Y.count * EXTINCTION_COEFFICIENT.Y;
  const e2 = e1 + C.count * EXTINCTION_COEFFICIENT.C;
  return [e1, e2];
}

function calcAbsorbance1MgMl(molecularWeight, extinctionCoefficient) {
  return (1 / molecularWeight) * extinctionCoefficient;
}

function calcIsoelectricPoint(aminoAcidComposition, nTerm, cTerm) {
  let {
    CHARGE: {
      POSITIVE_PKAS,
      NEGATIVE_PKAS,
      PKA_C_TERMINAL,
      PKA_N_TERMINAL,
      CHARGED_AMINO_ACIDS
    }
  } = _AMINO_ACID_DATA.AMINO_ACID_DATA;

  (function _updatePkaTables() {
    nTerm in PKA_N_TERMINAL && (POSITIVE_PKAS["nTerm"] = PKA_N_TERMINAL[nTerm]);
    cTerm in PKA_C_TERMINAL && (NEGATIVE_PKAS["cTerm"] = PKA_C_TERMINAL[cTerm]);
  })();

  const chargedAminoAcidsCount = (function selectCharged() {
    let charged = {};

    for (const a of CHARGED_AMINO_ACIDS) {
      charged[a] = aminoAcidComposition[a].count;
    }

    charged["nTerm"] = 1.0;
    charged["cTerm"] = 1.0;
    return charged;
  })();

  function calcCharge(pH) {
    let positive_charge = 0;

    for (const a in POSITIVE_PKAS) {
      const pK = POSITIVE_PKAS[a];
      const partial_charge = 1.0 / (1.0 + 10 ** (pH - pK));
      positive_charge += chargedAminoAcidsCount[a] * partial_charge;
    }

    let negative_charge = 0;

    for (const a in NEGATIVE_PKAS) {
      const pK = NEGATIVE_PKAS[a];
      const partial_charge = 1.0 / (1.0 + 10 ** (pK - pH));
      negative_charge += chargedAminoAcidsCount[a] * partial_charge;
    }

    return positive_charge - negative_charge;
  }

  function calcPi() {
    let pH =
      arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 7.775;
    let min =
      arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 3.55;
    let max =
      arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 12;
    const charge = calcCharge(pH);

    if (max - min > 0.0001) {
      (charge > 0.0 && (min = pH)) || (max = pH);
      return calcPi((min + max) / 2, min, max);
    } else {
      return pH;
    }
  }

  return calcPi();
}

function calcAliphaticIndex(aminoAcidComposition) {
  const { A, V, I, L } = aminoAcidComposition;
  return (
    (1 * A.content + 2.9 * V.content + 3.9 * (I.content + L.content)) * 100
  );
}
