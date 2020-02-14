const fastaNcbiIdentifiers1 = {
  lcl: /lcl\|(?<acc>[a-z1-9]+)/,
  bbs: /bbs\|(?<acc>\d+)/,
  bbm: /bbm\|(?<acc>\d+)/,
  gim: /gim\|(?<acc>\d+)/,
  gb: /gb\|(?<acc>[^|]+)\|(?<loc>[a-z1-9]*)/,
  gi: /gi\|(?<acc>\d+)/
};

export const dbxrefs = {
  GI: { url: ncbi_id => `https://www.ncbi.nlm.nih.gov/nuccore/${ncbi_id}` }
};

export const fastaNcbiIdentifiers = {};
