"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.AMINO_ACID_DATA = void 0;
const AMINO_ACID_DATA = {
  ALL: "ACDEFGHIKLMNOPQRSTUVWY",
  ATTR: {
    basic: "HKR",
    acidic: "CDEY",
    sulfur: "CM",
    aromatic: "PWY"
  },
  NAME: {
    A: ["ala", "alanine"],
    C: ["cys", "cysteine"],
    D: ["asp", "aspartate"],
    E: ["glu", "glutamate"],
    F: ["phe", "phenylalanine"],
    G: ["gly", "glycine"],
    H: ["his", "histidine"],
    I: ["ile", "isoleucine"],
    K: ["lys", "lysine"],
    L: ["leu", "leucine"],
    M: ["met", "methionine"],
    O: ["orn", "ornithine"],
    P: ["pro", "proline"],
    Q: ["gln", "glutamine"],
    R: ["arg", "arginine"],
    S: ["ser", "serine"],
    T: ["thr", "threonine"],
    U: ["sec", "selenocysteine"],
    V: ["val", "valine"],
    W: ["phe", "phenylalanine"],
    Y: ["tyr", "tyrosine"]
  },
  MOLECULAR_WEIGHT: {
    // water excluded
    A: [71.0779, 71.037113],
    C: [103.1429, 103.009184],
    D: [115.0874, 115.026943],
    E: [129.114, 129.042593],
    F: [147.1738, 147.068414],
    G: [57.0513, 57.021463],
    H: [137.1393, 137.058912],
    I: [113.1576, 113.084064],
    K: [128.1723, 128.094963],
    L: [113.1576, 113.084064],
    M: [131.196, 131.040484],
    N: [114.1026, 114.042927],
    O: [237.2981, 237.147727],
    P: [97.1152, 97.052764],
    Q: [128.1292, 128.058577],
    R: [156.1857, 156.101111],
    S: [87.0773, 87.032028],
    T: [101.1039, 101.047678],
    U: [150.0379, 150.953638],
    V: [99.131, 99.068414],
    W: [186.2099, 186.079313],
    Y: [163.1732, 163.063325],
    water: [18.0153, 18.010565]
  },
  MOLECULAR_WEIGHT_1: {
    A: [89.0932, 89.047678],
    C: [121.1582, 121.019749],
    D: [133.1027, 133.037508],
    E: [147.1293, 147.053158],
    F: [165.1891, 165.078979],
    G: [75.0666, 75.032028],
    H: [155.1546, 155.069477],
    I: [131.1729, 131.094629],
    K: [146.1876, 146.105528],
    L: [131.1729, 131.094629],
    M: [149.2113, 149.051049],
    N: [132.1179, 132.053492],
    O: [255.3134, 255.158292],
    P: [115.1305, 115.063329],
    Q: [146.1445, 146.069142],
    R: [174.201, 174.111676],
    S: [105.0926, 105.042593],
    T: [119.1192, 119.058243],
    U: [168.0532, 168.964203],
    V: [117.1463, 117.078979],
    W: [204.2252, 204.089878],
    Y: [181.1885, 181.07389],
    water: [18.0153, 18.010565]
  },
  CHARGE: {
    POSITIVE_PKAS: {
      nTerm: 7.5,
      K: 10.0,
      R: 12.0,
      H: 5.98
    },
    NEGATIVE_PKAS: {
      cTerm: 3.55,
      D: 4.05,
      E: 4.45,
      C: 9.0,
      Y: 10.0
    },
    PKA_C_TERMINAL: {
      D: 4.55,
      E: 4.75
    },
    PKA_N_TERMINAL: {
      A: 7.59,
      M: 7.0,
      S: 6.93,
      P: 8.36,
      T: 6.82,
      V: 7.44,
      E: 7.7
    },
    CHARGED_AMINO_ACIDS: ["K", "R", "H", "D", "E", "C", "Y"]
  },
  ATOMIC_COMPOSITION: {
    A: {
      C: 3,
      H: 7,
      N: 1,
      O: 2
    },
    C: {
      C: 3,
      H: 7,
      N: 1,
      O: 2,
      S: 1
    },
    D: {
      C: 4,
      H: 7,
      N: 1,
      O: 4
    },
    E: {
      C: 5,
      H: 9,
      N: 1,
      O: 4
    },
    F: {
      C: 9,
      H: 11,
      N: 1,
      O: 2
    },
    G: {
      C: 2,
      H: 5,
      N: 1,
      O: 2
    },
    H: {
      C: 6,
      H: 9,
      N: 3,
      O: 2
    },
    I: {
      C: 6,
      H: 13,
      N: 1,
      O: 2
    },
    K: {
      C: 6,
      H: 14,
      N: 2,
      O: 2
    },
    L: {
      C: 6,
      H: 13,
      N: 1,
      O: 2
    },
    M: {
      C: 5,
      H: 11,
      N: 1,
      O: 2,
      S: 1
    },
    N: {
      C: 4,
      H: 8,
      N: 2,
      O: 3
    },
    O: {
      C: 5,
      H: 12,
      N: 2,
      O: 2
    },
    P: {
      C: 5,
      H: 9,
      N: 1,
      O: 2
    },
    Q: {
      C: 5,
      H: 10,
      N: 2,
      O: 3
    },
    R: {
      C: 6,
      H: 14,
      N: 4,
      O: 2
    },
    S: {
      C: 3,
      H: 7,
      N: 1,
      O: 3
    },
    T: {
      C: 4,
      H: 9,
      N: 1,
      O: 3
    },
    U: {
      C: 3,
      H: 7,
      N: 1,
      O: 2,
      Se: 1
    },
    V: {
      C: 5,
      H: 11,
      N: 1,
      O: 2
    },
    W: {
      C: 11,
      H: 12,
      N: 2,
      O: 2
    },
    Y: {
      C: 9,
      H: 11,
      N: 1,
      O: 3
    }
  },
  EXTINCTION_COEFFICIENT: {
    C: 125,
    W: 5690,
    Y: 1280
  },
  ALIPHATIC_VOLUME: {
    A: 1,
    V: 2.9,
    L: 3.9,
    I: 3.9
  } // p601

};
exports.AMINO_ACID_DATA = AMINO_ACID_DATA;