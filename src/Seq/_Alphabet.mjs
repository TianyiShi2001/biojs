export const ALPHABET = {
  DNA: {
    GENERAL: 1,
    EXTENDED: 1
  },
  RNA: {
    GENERAL: 1,
    EXTENDED: 1
  },
  PROTEIN: {
    GENERAL: 1,
    EXTENDED: 1
  }
};

// can only guess unambiguous sequence
export function guessAlphabet(seq) {
  const uniqueChars = seq
    .split("")
    .filter(function(item, i, ar) {
      return ar.indexOf(item) === i;
    })
    .join("");
  if (uniqueChars.length < 6) {
    if (uniqueChars.indexOf("T") !== -1) {
      return "DNA";
    } else {
      return "RNA";
    }
  } else {
    return "protein";
  }
}
