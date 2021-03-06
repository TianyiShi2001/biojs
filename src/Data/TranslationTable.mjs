// function register_ncbi_table(name, alt_name, id, table, stop_codons, start_codons) {
//     return None
// }

// register_ncbi_table(
//     name="Standard",
//     alt_name="SGC0",
//     id=1,
//     table={
//         "TTT": "F", "TTC": "F", "TTA": "L", "TTG": "L",
//         "TCT": "S", "TCC": "S", "TCA": "S", "TCG": "S",
//         "TAT": "Y", "TAC": "Y",                           // noqa: E241
//         "TGT": "C", "TGC": "C", "TGG": "W",   // noqa: E241
//         "CTT": "L", "CTC": "L", "CTA": "L", "CTG": "L",
//         "CCT": "P", "CCC": "P", "CCA": "P", "CCG": "P",
//         "CAT": "H", "CAC": "H", "CAA": "Q", "CAG": "Q",
//         "CGT": "R", "CGC": "R", "CGA": "R", "CGG": "R",
//         "ATT": "I", "ATC": "I", "ATA": "I", "ATG": "M",
//         "ACT": "T", "ACC": "T", "ACA": "T", "ACG": "T",
//         "AAT": "N", "AAC": "N", "AAA": "K", "AAG": "K",
//         "AGT": "S", "AGC": "S", "AGA": "R", "AGG": "R",
//         "GTT": "V", "GTC": "V", "GTA": "V", "GTG": "V",
//         "GCT": "A", "GCC": "A", "GCA": "A", "GCG": "A",
//         "GAT": "D", "GAC": "D", "GAA": "E", "GAG": "E",
//         "GGT": "G", "GGC": "G", "GGA": "G", "GGG": "G",
//     },
//     stop_codons=["TAA", "TAG", "TGA"],
//     start_codons=["TTG", "CTG", "ATG"],
// )

// register_ncbi_table(
//     name="Vertebrate Mitochondrial",
//     alt_name="SGC1",
//     id=2,
//     table={
//         "TTT": "F", "TTC": "F", "TTA": "L", "TTG": "L",
//         "TCT": "S", "TCC": "S", "TCA": "S", "TCG": "S",
//         "TAT": "Y", "TAC": "Y",                           // noqa: E241
//         "TGT": "C", "TGC": "C", "TGA": "W", "TGG": "W",
//         "CTT": "L", "CTC": "L", "CTA": "L", "CTG": "L",
//         "CCT": "P", "CCC": "P", "CCA": "P", "CCG": "P",
//         "CAT": "H", "CAC": "H", "CAA": "Q", "CAG": "Q",
//         "CGT": "R", "CGC": "R", "CGA": "R", "CGG": "R",
//         "ATT": "I", "ATC": "I", "ATA": "M", "ATG": "M",
//         "ACT": "T", "ACC": "T", "ACA": "T", "ACG": "T",
//         "AAT": "N", "AAC": "N", "AAA": "K", "AAG": "K",
//         "AGT": "S", "AGC": "S",                           // noqa: E241
//         "GTT": "V", "GTC": "V", "GTA": "V", "GTG": "V",
//         "GCT": "A", "GCC": "A", "GCA": "A", "GCG": "A",
//         "GAT": "D", "GAC": "D", "GAA": "E", "GAG": "E",
//         "GGT": "G", "GGC": "G", "GGA": "G", "GGG": "G",
//     },
//     stop_codons=["TAA", "TAG", "AGA", "AGG"],
//     start_codons=["ATT", "ATC", "ATA", "ATG", "GTG"],
// )

// register_ncbi_table(
//     name="Yeast Mitochondrial",
//     alt_name="SGC2",
//     id=3,
//     table={
//         "TTT": "F", "TTC": "F", "TTA": "L", "TTG": "L",
//         "TCT": "S", "TCC": "S", "TCA": "S", "TCG": "S",
//         "TAT": "Y", "TAC": "Y",                           // noqa: E241
//         "TGT": "C", "TGC": "C", "TGA": "W", "TGG": "W",
//         "CTT": "T", "CTC": "T", "CTA": "T", "CTG": "T",
//         "CCT": "P", "CCC": "P", "CCA": "P", "CCG": "P",
//         "CAT": "H", "CAC": "H", "CAA": "Q", "CAG": "Q",
//         "CGT": "R", "CGC": "R", "CGA": "R", "CGG": "R",
//         "ATT": "I", "ATC": "I", "ATA": "M", "ATG": "M",
//         "ACT": "T", "ACC": "T", "ACA": "T", "ACG": "T",
//         "AAT": "N", "AAC": "N", "AAA": "K", "AAG": "K",
//         "AGT": "S", "AGC": "S", "AGA": "R", "AGG": "R",
//         "GTT": "V", "GTC": "V", "GTA": "V", "GTG": "V",
//         "GCT": "A", "GCC": "A", "GCA": "A", "GCG": "A",
//         "GAT": "D", "GAC": "D", "GAA": "E", "GAG": "E",
//         "GGT": "G", "GGC": "G", "GGA": "G", "GGG": "G",
//     },
//     stop_codons=["TAA", "TAG"],
//     start_codons=["ATA", "ATG", "GTG"],
// )

// register_ncbi_table(
//     name="Mold Mitochondrial; Protozoan Mitochondrial; Coelenterate "
//     "Mitochondrial; Mycoplasma; Spiroplasma",
//     alt_name="SGC3",
//     id=4,
//     table={
//         "TTT": "F", "TTC": "F", "TTA": "L", "TTG": "L",
//         "TCT": "S", "TCC": "S", "TCA": "S", "TCG": "S",
//         "TAT": "Y", "TAC": "Y",                           // noqa: E241
//         "TGT": "C", "TGC": "C", "TGA": "W", "TGG": "W",
//         "CTT": "L", "CTC": "L", "CTA": "L", "CTG": "L",
//         "CCT": "P", "CCC": "P", "CCA": "P", "CCG": "P",
//         "CAT": "H", "CAC": "H", "CAA": "Q", "CAG": "Q",
//         "CGT": "R", "CGC": "R", "CGA": "R", "CGG": "R",
//         "ATT": "I", "ATC": "I", "ATA": "I", "ATG": "M",
//         "ACT": "T", "ACC": "T", "ACA": "T", "ACG": "T",
//         "AAT": "N", "AAC": "N", "AAA": "K", "AAG": "K",
//         "AGT": "S", "AGC": "S", "AGA": "R", "AGG": "R",
//         "GTT": "V", "GTC": "V", "GTA": "V", "GTG": "V",
//         "GCT": "A", "GCC": "A", "GCA": "A", "GCG": "A",
//         "GAT": "D", "GAC": "D", "GAA": "E", "GAG": "E",
//         "GGT": "G", "GGC": "G", "GGA": "G", "GGG": "G",
//     },
//     stop_codons=["TAA", "TAG"],
//     start_codons=["TTA", "TTG", "CTG", "ATT", "ATC", "ATA", "ATG", "GTG"],
// )

// register_ncbi_table(
//     name="Invertebrate Mitochondrial",
//     alt_name="SGC4",
//     id=5,
//     table={
//         "TTT": "F", "TTC": "F", "TTA": "L", "TTG": "L",
//         "TCT": "S", "TCC": "S", "TCA": "S", "TCG": "S",
//         "TAT": "Y", "TAC": "Y",                           // noqa: E241
//         "TGT": "C", "TGC": "C", "TGA": "W", "TGG": "W",
//         "CTT": "L", "CTC": "L", "CTA": "L", "CTG": "L",
//         "CCT": "P", "CCC": "P", "CCA": "P", "CCG": "P",
//         "CAT": "H", "CAC": "H", "CAA": "Q", "CAG": "Q",
//         "CGT": "R", "CGC": "R", "CGA": "R", "CGG": "R",
//         "ATT": "I", "ATC": "I", "ATA": "M", "ATG": "M",
//         "ACT": "T", "ACC": "T", "ACA": "T", "ACG": "T",
//         "AAT": "N", "AAC": "N", "AAA": "K", "AAG": "K",
//         "AGT": "S", "AGC": "S", "AGA": "S", "AGG": "S",
//         "GTT": "V", "GTC": "V", "GTA": "V", "GTG": "V",
//         "GCT": "A", "GCC": "A", "GCA": "A", "GCG": "A",
//         "GAT": "D", "GAC": "D", "GAA": "E", "GAG": "E",
//         "GGT": "G", "GGC": "G", "GGA": "G", "GGG": "G",
//     },
//     stop_codons=["TAA", "TAG"],
//     start_codons=["TTG", "ATT", "ATC", "ATA", "ATG", "GTG"],
// )

// register_ncbi_table(
//     name="Ciliate Nuclear; Dasycladacean Nuclear; Hexamita Nuclear",
//     alt_name="SGC5",
//     id=6,
//     table={
//         "TTT": "F", "TTC": "F", "TTA": "L", "TTG": "L",
//         "TCT": "S", "TCC": "S", "TCA": "S", "TCG": "S",
//         "TAT": "Y", "TAC": "Y", "TAA": "Q", "TAG": "Q",
//         "TGT": "C", "TGC": "C", "TGG": "W",   // noqa: E241
//         "CTT": "L", "CTC": "L", "CTA": "L", "CTG": "L",
//         "CCT": "P", "CCC": "P", "CCA": "P", "CCG": "P",
//         "CAT": "H", "CAC": "H", "CAA": "Q", "CAG": "Q",
//         "CGT": "R", "CGC": "R", "CGA": "R", "CGG": "R",
//         "ATT": "I", "ATC": "I", "ATA": "I", "ATG": "M",
//         "ACT": "T", "ACC": "T", "ACA": "T", "ACG": "T",
//         "AAT": "N", "AAC": "N", "AAA": "K", "AAG": "K",
//         "AGT": "S", "AGC": "S", "AGA": "R", "AGG": "R",
//         "GTT": "V", "GTC": "V", "GTA": "V", "GTG": "V",
//         "GCT": "A", "GCC": "A", "GCA": "A", "GCG": "A",
//         "GAT": "D", "GAC": "D", "GAA": "E", "GAG": "E",
//         "GGT": "G", "GGC": "G", "GGA": "G", "GGG": "G",
//     },
//     stop_codons=["TGA"],
//     start_codons=["ATG"],
// )

// register_ncbi_table(
//     name="Echinoderm Mitochondrial; Flatworm Mitochondrial",
//     alt_name="SGC8",
//     id=9,
//     table={
//         "TTT": "F", "TTC": "F", "TTA": "L", "TTG": "L",
//         "TCT": "S", "TCC": "S", "TCA": "S", "TCG": "S",
//         "TAT": "Y", "TAC": "Y",                           // noqa: E241
//         "TGT": "C", "TGC": "C", "TGA": "W", "TGG": "W",
//         "CTT": "L", "CTC": "L", "CTA": "L", "CTG": "L",
//         "CCT": "P", "CCC": "P", "CCA": "P", "CCG": "P",
//         "CAT": "H", "CAC": "H", "CAA": "Q", "CAG": "Q",
//         "CGT": "R", "CGC": "R", "CGA": "R", "CGG": "R",
//         "ATT": "I", "ATC": "I", "ATA": "I", "ATG": "M",
//         "ACT": "T", "ACC": "T", "ACA": "T", "ACG": "T",
//         "AAT": "N", "AAC": "N", "AAA": "N", "AAG": "K",
//         "AGT": "S", "AGC": "S", "AGA": "S", "AGG": "S",
//         "GTT": "V", "GTC": "V", "GTA": "V", "GTG": "V",
//         "GCT": "A", "GCC": "A", "GCA": "A", "GCG": "A",
//         "GAT": "D", "GAC": "D", "GAA": "E", "GAG": "E",
//         "GGT": "G", "GGC": "G", "GGA": "G", "GGG": "G",
//     },
//     stop_codons=["TAA", "TAG"],
//     start_codons=["ATG", "GTG"],
// )

// register_ncbi_table(
//     name="Euplotid Nuclear",
//     alt_name="SGC9",
//     id=10,
//     table={
//         "TTT": "F", "TTC": "F", "TTA": "L", "TTG": "L",
//         "TCT": "S", "TCC": "S", "TCA": "S", "TCG": "S",
//         "TAT": "Y", "TAC": "Y",                           // noqa: E241
//         "TGT": "C", "TGC": "C", "TGA": "C", "TGG": "W",
//         "CTT": "L", "CTC": "L", "CTA": "L", "CTG": "L",
//         "CCT": "P", "CCC": "P", "CCA": "P", "CCG": "P",
//         "CAT": "H", "CAC": "H", "CAA": "Q", "CAG": "Q",
//         "CGT": "R", "CGC": "R", "CGA": "R", "CGG": "R",
//         "ATT": "I", "ATC": "I", "ATA": "I", "ATG": "M",
//         "ACT": "T", "ACC": "T", "ACA": "T", "ACG": "T",
//         "AAT": "N", "AAC": "N", "AAA": "K", "AAG": "K",
//         "AGT": "S", "AGC": "S", "AGA": "R", "AGG": "R",
//         "GTT": "V", "GTC": "V", "GTA": "V", "GTG": "V",
//         "GCT": "A", "GCC": "A", "GCA": "A", "GCG": "A",
//         "GAT": "D", "GAC": "D", "GAA": "E", "GAG": "E",
//         "GGT": "G", "GGC": "G", "GGA": "G", "GGG": "G",
//     },
//     stop_codons=["TAA", "TAG"],
//     start_codons=["ATG"],
// )

// register_ncbi_table(
//     name="Bacterial, Archaeal and Plant Plastid",
//     alt_name=None,
//     id=11,
//     table={
//         "TTT": "F", "TTC": "F", "TTA": "L", "TTG": "L",
//         "TCT": "S", "TCC": "S", "TCA": "S", "TCG": "S",
//         "TAT": "Y", "TAC": "Y",                           // noqa: E241
//         "TGT": "C", "TGC": "C", "TGG": "W",   // noqa: E241
//         "CTT": "L", "CTC": "L", "CTA": "L", "CTG": "L",
//         "CCT": "P", "CCC": "P", "CCA": "P", "CCG": "P",
//         "CAT": "H", "CAC": "H", "CAA": "Q", "CAG": "Q",
//         "CGT": "R", "CGC": "R", "CGA": "R", "CGG": "R",
//         "ATT": "I", "ATC": "I", "ATA": "I", "ATG": "M",
//         "ACT": "T", "ACC": "T", "ACA": "T", "ACG": "T",
//         "AAT": "N", "AAC": "N", "AAA": "K", "AAG": "K",
//         "AGT": "S", "AGC": "S", "AGA": "R", "AGG": "R",
//         "GTT": "V", "GTC": "V", "GTA": "V", "GTG": "V",
//         "GCT": "A", "GCC": "A", "GCA": "A", "GCG": "A",
//         "GAT": "D", "GAC": "D", "GAA": "E", "GAG": "E",
//         "GGT": "G", "GGC": "G", "GGA": "G", "GGG": "G",
//     },
//     stop_codons=["TAA", "TAG", "TGA"],
//     start_codons=["TTG", "CTG", "ATT", "ATC", "ATA", "ATG", "GTG"],
// )

// register_ncbi_table(
//     name="Alternative Yeast Nuclear",
//     alt_name=None,
//     id=12,
//     table={
//         "TTT": "F", "TTC": "F", "TTA": "L", "TTG": "L",
//         "TCT": "S", "TCC": "S", "TCA": "S", "TCG": "S",
//         "TAT": "Y", "TAC": "Y",                           // noqa: E241
//         "TGT": "C", "TGC": "C", "TGG": "W",   // noqa: E241
//         "CTT": "L", "CTC": "L", "CTA": "L", "CTG": "S",
//         "CCT": "P", "CCC": "P", "CCA": "P", "CCG": "P",
//         "CAT": "H", "CAC": "H", "CAA": "Q", "CAG": "Q",
//         "CGT": "R", "CGC": "R", "CGA": "R", "CGG": "R",
//         "ATT": "I", "ATC": "I", "ATA": "I", "ATG": "M",
//         "ACT": "T", "ACC": "T", "ACA": "T", "ACG": "T",
//         "AAT": "N", "AAC": "N", "AAA": "K", "AAG": "K",
//         "AGT": "S", "AGC": "S", "AGA": "R", "AGG": "R",
//         "GTT": "V", "GTC": "V", "GTA": "V", "GTG": "V",
//         "GCT": "A", "GCC": "A", "GCA": "A", "GCG": "A",
//         "GAT": "D", "GAC": "D", "GAA": "E", "GAG": "E",
//         "GGT": "G", "GGC": "G", "GGA": "G", "GGG": "G",
//     },
//     stop_codons=["TAA", "TAG", "TGA"],
//     start_codons=["CTG", "ATG"],
// )

// register_ncbi_table(
//     name="Ascidian Mitochondrial",
//     alt_name=None,
//     id=13,
//     table={
//         "TTT": "F", "TTC": "F", "TTA": "L", "TTG": "L",
//         "TCT": "S", "TCC": "S", "TCA": "S", "TCG": "S",
//         "TAT": "Y", "TAC": "Y",                           // noqa: E241
//         "TGT": "C", "TGC": "C", "TGA": "W", "TGG": "W",
//         "CTT": "L", "CTC": "L", "CTA": "L", "CTG": "L",
//         "CCT": "P", "CCC": "P", "CCA": "P", "CCG": "P",
//         "CAT": "H", "CAC": "H", "CAA": "Q", "CAG": "Q",
//         "CGT": "R", "CGC": "R", "CGA": "R", "CGG": "R",
//         "ATT": "I", "ATC": "I", "ATA": "M", "ATG": "M",
//         "ACT": "T", "ACC": "T", "ACA": "T", "ACG": "T",
//         "AAT": "N", "AAC": "N", "AAA": "K", "AAG": "K",
//         "AGT": "S", "AGC": "S", "AGA": "G", "AGG": "G",
//         "GTT": "V", "GTC": "V", "GTA": "V", "GTG": "V",
//         "GCT": "A", "GCC": "A", "GCA": "A", "GCG": "A",
//         "GAT": "D", "GAC": "D", "GAA": "E", "GAG": "E",
//         "GGT": "G", "GGC": "G", "GGA": "G", "GGG": "G",
//     },
//     stop_codons=["TAA", "TAG"],
//     start_codons=["TTG", "ATA", "ATG", "GTG"],
// )

// register_ncbi_table(
//     name="Alternative Flatworm Mitochondrial",
//     alt_name=None,
//     id=14,
//     table={
//         "TTT": "F", "TTC": "F", "TTA": "L", "TTG": "L",
//         "TCT": "S", "TCC": "S", "TCA": "S", "TCG": "S",
//         "TAT": "Y", "TAC": "Y", "TAA": "Y",               // noqa: E241
//         "TGT": "C", "TGC": "C", "TGA": "W", "TGG": "W",
//         "CTT": "L", "CTC": "L", "CTA": "L", "CTG": "L",
//         "CCT": "P", "CCC": "P", "CCA": "P", "CCG": "P",
//         "CAT": "H", "CAC": "H", "CAA": "Q", "CAG": "Q",
//         "CGT": "R", "CGC": "R", "CGA": "R", "CGG": "R",
//         "ATT": "I", "ATC": "I", "ATA": "I", "ATG": "M",
//         "ACT": "T", "ACC": "T", "ACA": "T", "ACG": "T",
//         "AAT": "N", "AAC": "N", "AAA": "N", "AAG": "K",
//         "AGT": "S", "AGC": "S", "AGA": "S", "AGG": "S",
//         "GTT": "V", "GTC": "V", "GTA": "V", "GTG": "V",
//         "GCT": "A", "GCC": "A", "GCA": "A", "GCG": "A",
//         "GAT": "D", "GAC": "D", "GAA": "E", "GAG": "E",
//         "GGT": "G", "GGC": "G", "GGA": "G", "GGG": "G",
//     },
//     stop_codons=["TAG"],
//     start_codons=["ATG"],
// )

// register_ncbi_table(
//     name="Blepharisma Macronuclear",
//     alt_name=None,
//     id=15,
//     table={
//         "TTT": "F", "TTC": "F", "TTA": "L", "TTG": "L",
//         "TCT": "S", "TCC": "S", "TCA": "S", "TCG": "S",
//         "TAT": "Y", "TAC": "Y", "TAG": "Q",   // noqa: E241
//         "TGT": "C", "TGC": "C", "TGG": "W",   // noqa: E241
//         "CTT": "L", "CTC": "L", "CTA": "L", "CTG": "L",
//         "CCT": "P", "CCC": "P", "CCA": "P", "CCG": "P",
//         "CAT": "H", "CAC": "H", "CAA": "Q", "CAG": "Q",
//         "CGT": "R", "CGC": "R", "CGA": "R", "CGG": "R",
//         "ATT": "I", "ATC": "I", "ATA": "I", "ATG": "M",
//         "ACT": "T", "ACC": "T", "ACA": "T", "ACG": "T",
//         "AAT": "N", "AAC": "N", "AAA": "K", "AAG": "K",
//         "AGT": "S", "AGC": "S", "AGA": "R", "AGG": "R",
//         "GTT": "V", "GTC": "V", "GTA": "V", "GTG": "V",
//         "GCT": "A", "GCC": "A", "GCA": "A", "GCG": "A",
//         "GAT": "D", "GAC": "D", "GAA": "E", "GAG": "E",
//         "GGT": "G", "GGC": "G", "GGA": "G", "GGG": "G",
//     },
//     stop_codons=["TAA", "TGA"],
//     start_codons=["ATG"],
// )

// register_ncbi_table(
//     name="Chlorophycean Mitochondrial",
//     alt_name=None,
//     id=16,
//     table={
//         "TTT": "F", "TTC": "F", "TTA": "L", "TTG": "L",
//         "TCT": "S", "TCC": "S", "TCA": "S", "TCG": "S",
//         "TAT": "Y", "TAC": "Y", "TAG": "L",   // noqa: E241
//         "TGT": "C", "TGC": "C", "TGG": "W",   // noqa: E241
//         "CTT": "L", "CTC": "L", "CTA": "L", "CTG": "L",
//         "CCT": "P", "CCC": "P", "CCA": "P", "CCG": "P",
//         "CAT": "H", "CAC": "H", "CAA": "Q", "CAG": "Q",
//         "CGT": "R", "CGC": "R", "CGA": "R", "CGG": "R",
//         "ATT": "I", "ATC": "I", "ATA": "I", "ATG": "M",
//         "ACT": "T", "ACC": "T", "ACA": "T", "ACG": "T",
//         "AAT": "N", "AAC": "N", "AAA": "K", "AAG": "K",
//         "AGT": "S", "AGC": "S", "AGA": "R", "AGG": "R",
//         "GTT": "V", "GTC": "V", "GTA": "V", "GTG": "V",
//         "GCT": "A", "GCC": "A", "GCA": "A", "GCG": "A",
//         "GAT": "D", "GAC": "D", "GAA": "E", "GAG": "E",
//         "GGT": "G", "GGC": "G", "GGA": "G", "GGG": "G",
//     },
//     stop_codons=["TAA", "TGA"],
//     start_codons=["ATG"],
// )

// register_ncbi_table(
//     name="Trematode Mitochondrial",
//     alt_name=None,
//     id=21,
//     table={
//         "TTT": "F", "TTC": "F", "TTA": "L", "TTG": "L",
//         "TCT": "S", "TCC": "S", "TCA": "S", "TCG": "S",
//         "TAT": "Y", "TAC": "Y",                           // noqa: E241
//         "TGT": "C", "TGC": "C", "TGA": "W", "TGG": "W",
//         "CTT": "L", "CTC": "L", "CTA": "L", "CTG": "L",
//         "CCT": "P", "CCC": "P", "CCA": "P", "CCG": "P",
//         "CAT": "H", "CAC": "H", "CAA": "Q", "CAG": "Q",
//         "CGT": "R", "CGC": "R", "CGA": "R", "CGG": "R",
//         "ATT": "I", "ATC": "I", "ATA": "M", "ATG": "M",
//         "ACT": "T", "ACC": "T", "ACA": "T", "ACG": "T",
//         "AAT": "N", "AAC": "N", "AAA": "N", "AAG": "K",
//         "AGT": "S", "AGC": "S", "AGA": "S", "AGG": "S",
//         "GTT": "V", "GTC": "V", "GTA": "V", "GTG": "V",
//         "GCT": "A", "GCC": "A", "GCA": "A", "GCG": "A",
//         "GAT": "D", "GAC": "D", "GAA": "E", "GAG": "E",
//         "GGT": "G", "GGC": "G", "GGA": "G", "GGG": "G",
//     },
//     stop_codons=["TAA", "TAG"],
//     start_codons=["ATG", "GTG"],
// )

// register_ncbi_table(
//     name="Scenedesmus obliquus Mitochondrial",
//     alt_name=None,
//     id=22,
//     table={
//         "TTT": "F", "TTC": "F", "TTA": "L", "TTG": "L",
//         "TCT": "S", "TCC": "S", "TCG": "S",   // noqa: E241
//         "TAT": "Y", "TAC": "Y", "TAG": "L",   // noqa: E241
//         "TGT": "C", "TGC": "C", "TGG": "W",   // noqa: E241
//         "CTT": "L", "CTC": "L", "CTA": "L", "CTG": "L",
//         "CCT": "P", "CCC": "P", "CCA": "P", "CCG": "P",
//         "CAT": "H", "CAC": "H", "CAA": "Q", "CAG": "Q",
//         "CGT": "R", "CGC": "R", "CGA": "R", "CGG": "R",
//         "ATT": "I", "ATC": "I", "ATA": "I", "ATG": "M",
//         "ACT": "T", "ACC": "T", "ACA": "T", "ACG": "T",
//         "AAT": "N", "AAC": "N", "AAA": "K", "AAG": "K",
//         "AGT": "S", "AGC": "S", "AGA": "R", "AGG": "R",
//         "GTT": "V", "GTC": "V", "GTA": "V", "GTG": "V",
//         "GCT": "A", "GCC": "A", "GCA": "A", "GCG": "A",
//         "GAT": "D", "GAC": "D", "GAA": "E", "GAG": "E",
//         "GGT": "G", "GGC": "G", "GGA": "G", "GGG": "G",
//     },
//     stop_codons=["TCA", "TAA", "TGA"],
//     start_codons=["ATG"],
// )

// register_ncbi_table(
//     name="Thraustochytrium Mitochondrial",
//     alt_name=None,
//     id=23,
//     table={
//         "TTT": "F", "TTC": "F", "TTG": "L",   // noqa: E241
//         "TCT": "S", "TCC": "S", "TCA": "S", "TCG": "S",
//         "TAT": "Y", "TAC": "Y",                           // noqa: E241
//         "TGT": "C", "TGC": "C", "TGG": "W",   // noqa: E241
//         "CTT": "L", "CTC": "L", "CTA": "L", "CTG": "L",
//         "CCT": "P", "CCC": "P", "CCA": "P", "CCG": "P",
//         "CAT": "H", "CAC": "H", "CAA": "Q", "CAG": "Q",
//         "CGT": "R", "CGC": "R", "CGA": "R", "CGG": "R",
//         "ATT": "I", "ATC": "I", "ATA": "I", "ATG": "M",
//         "ACT": "T", "ACC": "T", "ACA": "T", "ACG": "T",
//         "AAT": "N", "AAC": "N", "AAA": "K", "AAG": "K",
//         "AGT": "S", "AGC": "S", "AGA": "R", "AGG": "R",
//         "GTT": "V", "GTC": "V", "GTA": "V", "GTG": "V",
//         "GCT": "A", "GCC": "A", "GCA": "A", "GCG": "A",
//         "GAT": "D", "GAC": "D", "GAA": "E", "GAG": "E",
//         "GGT": "G", "GGC": "G", "GGA": "G", "GGG": "G",
//     },
//     stop_codons=["TTA", "TAA", "TAG", "TGA"],
//     start_codons=["ATT", "ATG", "GTG"],
// )

// register_ncbi_table(
//     name="Pterobranchia Mitochondrial",
//     alt_name=None,
//     id=24,
//     table={
//         "TTT": "F", "TTC": "F", "TTA": "L", "TTG": "L",
//         "TCT": "S", "TCC": "S", "TCA": "S", "TCG": "S",
//         "TAT": "Y", "TAC": "Y",                           // noqa: E241
//         "TGT": "C", "TGC": "C", "TGA": "W", "TGG": "W",
//         "CTT": "L", "CTC": "L", "CTA": "L", "CTG": "L",
//         "CCT": "P", "CCC": "P", "CCA": "P", "CCG": "P",
//         "CAT": "H", "CAC": "H", "CAA": "Q", "CAG": "Q",
//         "CGT": "R", "CGC": "R", "CGA": "R", "CGG": "R",
//         "ATT": "I", "ATC": "I", "ATA": "I", "ATG": "M",
//         "ACT": "T", "ACC": "T", "ACA": "T", "ACG": "T",
//         "AAT": "N", "AAC": "N", "AAA": "K", "AAG": "K",
//         "AGT": "S", "AGC": "S", "AGA": "S", "AGG": "K",
//         "GTT": "V", "GTC": "V", "GTA": "V", "GTG": "V",
//         "GCT": "A", "GCC": "A", "GCA": "A", "GCG": "A",
//         "GAT": "D", "GAC": "D", "GAA": "E", "GAG": "E",
//         "GGT": "G", "GGC": "G", "GGA": "G", "GGG": "G",
//     },
//     stop_codons=["TAA", "TAG"],
//     start_codons=["TTG", "CTG", "ATG", "GTG"],
// )

// register_ncbi_table(
//     name="Candidate Division SR1 and Gracilibacteria",
//     alt_name=None,
//     id=25,
//     table={
//         "TTT": "F", "TTC": "F", "TTA": "L", "TTG": "L",
//         "TCT": "S", "TCC": "S", "TCA": "S", "TCG": "S",
//         "TAT": "Y", "TAC": "Y",                           // noqa: E241
//         "TGT": "C", "TGC": "C", "TGA": "G", "TGG": "W",
//         "CTT": "L", "CTC": "L", "CTA": "L", "CTG": "L",
//         "CCT": "P", "CCC": "P", "CCA": "P", "CCG": "P",
//         "CAT": "H", "CAC": "H", "CAA": "Q", "CAG": "Q",
//         "CGT": "R", "CGC": "R", "CGA": "R", "CGG": "R",
//         "ATT": "I", "ATC": "I", "ATA": "I", "ATG": "M",
//         "ACT": "T", "ACC": "T", "ACA": "T", "ACG": "T",
//         "AAT": "N", "AAC": "N", "AAA": "K", "AAG": "K",
//         "AGT": "S", "AGC": "S", "AGA": "R", "AGG": "R",
//         "GTT": "V", "GTC": "V", "GTA": "V", "GTG": "V",
//         "GCT": "A", "GCC": "A", "GCA": "A", "GCG": "A",
//         "GAT": "D", "GAC": "D", "GAA": "E", "GAG": "E",
//         "GGT": "G", "GGC": "G", "GGA": "G", "GGG": "G",
//     },
//     stop_codons=["TAA", "TAG"],
//     start_codons=["TTG", "ATG", "GTG"],
// )

// register_ncbi_table(
//     name="Pachysolen tannophilus Nuclear",
//     alt_name=None,
//     id=26,
//     table={
//         "TTT": "F", "TTC": "F", "TTA": "L", "TTG": "L",
//         "TCT": "S", "TCC": "S", "TCA": "S", "TCG": "S",
//         "TAT": "Y", "TAC": "Y",                           // noqa: E241
//         "TGT": "C", "TGC": "C", "TGG": "W",   // noqa: E241
//         "CTT": "L", "CTC": "L", "CTA": "L", "CTG": "A",
//         "CCT": "P", "CCC": "P", "CCA": "P", "CCG": "P",
//         "CAT": "H", "CAC": "H", "CAA": "Q", "CAG": "Q",
//         "CGT": "R", "CGC": "R", "CGA": "R", "CGG": "R",
//         "ATT": "I", "ATC": "I", "ATA": "I", "ATG": "M",
//         "ACT": "T", "ACC": "T", "ACA": "T", "ACG": "T",
//         "AAT": "N", "AAC": "N", "AAA": "K", "AAG": "K",
//         "AGT": "S", "AGC": "S", "AGA": "R", "AGG": "R",
//         "GTT": "V", "GTC": "V", "GTA": "V", "GTG": "V",
//         "GCT": "A", "GCC": "A", "GCA": "A", "GCG": "A",
//         "GAT": "D", "GAC": "D", "GAA": "E", "GAG": "E",
//         "GGT": "G", "GGC": "G", "GGA": "G", "GGG": "G",
//     },
//     stop_codons=["TAA", "TAG", "TGA"],
//     start_codons=["CTG", "ATG"],
// )

// register_ncbi_table(
//     name="Karyorelict Nuclear",
//     alt_name=None,
//     id=27,
//     table={
//         "TTT": "F", "TTC": "F", "TTA": "L", "TTG": "L",
//         "TCT": "S", "TCC": "S", "TCA": "S", "TCG": "S",
//         "TAT": "Y", "TAC": "Y", "TAA": "Q", "TAG": "Q",
//         "TGT": "C", "TGC": "C", "TGA": "W", "TGG": "W",
//         "CTT": "L", "CTC": "L", "CTA": "L", "CTG": "L",
//         "CCT": "P", "CCC": "P", "CCA": "P", "CCG": "P",
//         "CAT": "H", "CAC": "H", "CAA": "Q", "CAG": "Q",
//         "CGT": "R", "CGC": "R", "CGA": "R", "CGG": "R",
//         "ATT": "I", "ATC": "I", "ATA": "I", "ATG": "M",
//         "ACT": "T", "ACC": "T", "ACA": "T", "ACG": "T",
//         "AAT": "N", "AAC": "N", "AAA": "K", "AAG": "K",
//         "AGT": "S", "AGC": "S", "AGA": "R", "AGG": "R",
//         "GTT": "V", "GTC": "V", "GTA": "V", "GTG": "V",
//         "GCT": "A", "GCC": "A", "GCA": "A", "GCG": "A",
//         "GAT": "D", "GAC": "D", "GAA": "E", "GAG": "E",
//         "GGT": "G", "GGC": "G", "GGA": "G", "GGG": "G",
//     },
//     stop_codons=["TGA"],
//     start_codons=["ATG"],
// )

// register_ncbi_table(
//     name="Condylostoma Nuclear",
//     alt_name=None,
//     id=28,
//     table={
//         "TTT": "F", "TTC": "F", "TTA": "L", "TTG": "L",
//         "TCT": "S", "TCC": "S", "TCA": "S", "TCG": "S",
//         "TAT": "Y", "TAC": "Y", "TAA": "Q", "TAG": "Q",
//         "TGT": "C", "TGC": "C", "TGA": "W", "TGG": "W",
//         "CTT": "L", "CTC": "L", "CTA": "L", "CTG": "L",
//         "CCT": "P", "CCC": "P", "CCA": "P", "CCG": "P",
//         "CAT": "H", "CAC": "H", "CAA": "Q", "CAG": "Q",
//         "CGT": "R", "CGC": "R", "CGA": "R", "CGG": "R",
//         "ATT": "I", "ATC": "I", "ATA": "I", "ATG": "M",
//         "ACT": "T", "ACC": "T", "ACA": "T", "ACG": "T",
//         "AAT": "N", "AAC": "N", "AAA": "K", "AAG": "K",
//         "AGT": "S", "AGC": "S", "AGA": "R", "AGG": "R",
//         "GTT": "V", "GTC": "V", "GTA": "V", "GTG": "V",
//         "GCT": "A", "GCC": "A", "GCA": "A", "GCG": "A",
//         "GAT": "D", "GAC": "D", "GAA": "E", "GAG": "E",
//         "GGT": "G", "GGC": "G", "GGA": "G", "GGG": "G",
//     },
//     stop_codons=["TAA", "TAG", "TGA"],
//     start_codons=["ATG"],
// )

// register_ncbi_table(
//     name="Mesodinium Nuclear",
//     alt_name=None,
//     id=29,
//     table={
//         "TTT": "F", "TTC": "F", "TTA": "L", "TTG": "L",
//         "TCT": "S", "TCC": "S", "TCA": "S", "TCG": "S",
//         "TAT": "Y", "TAC": "Y", "TAA": "Y", "TAG": "Y",
//         "TGT": "C", "TGC": "C", "TGG": "W",   // noqa: E241
//         "CTT": "L", "CTC": "L", "CTA": "L", "CTG": "L",
//         "CCT": "P", "CCC": "P", "CCA": "P", "CCG": "P",
//         "CAT": "H", "CAC": "H", "CAA": "Q", "CAG": "Q",
//         "CGT": "R", "CGC": "R", "CGA": "R", "CGG": "R",
//         "ATT": "I", "ATC": "I", "ATA": "I", "ATG": "M",
//         "ACT": "T", "ACC": "T", "ACA": "T", "ACG": "T",
//         "AAT": "N", "AAC": "N", "AAA": "K", "AAG": "K",
//         "AGT": "S", "AGC": "S", "AGA": "R", "AGG": "R",
//         "GTT": "V", "GTC": "V", "GTA": "V", "GTG": "V",
//         "GCT": "A", "GCC": "A", "GCA": "A", "GCG": "A",
//         "GAT": "D", "GAC": "D", "GAA": "E", "GAG": "E",
//         "GGT": "G", "GGC": "G", "GGA": "G", "GGG": "G",
//     },
//     stop_codons=["TGA"],
//     start_codons=["ATG"],
// )

// register_ncbi_table(
//     name="Peritrich Nuclear",
//     alt_name=None,
//     id=30,
//     table={
//         "TTT": "F", "TTC": "F", "TTA": "L", "TTG": "L",
//         "TCT": "S", "TCC": "S", "TCA": "S", "TCG": "S",
//         "TAT": "Y", "TAC": "Y", "TAA": "E", "TAG": "E",
//         "TGT": "C", "TGC": "C", "TGG": "W",   // noqa: E241
//         "CTT": "L", "CTC": "L", "CTA": "L", "CTG": "L",
//         "CCT": "P", "CCC": "P", "CCA": "P", "CCG": "P",
//         "CAT": "H", "CAC": "H", "CAA": "Q", "CAG": "Q",
//         "CGT": "R", "CGC": "R", "CGA": "R", "CGG": "R",
//         "ATT": "I", "ATC": "I", "ATA": "I", "ATG": "M",
//         "ACT": "T", "ACC": "T", "ACA": "T", "ACG": "T",
//         "AAT": "N", "AAC": "N", "AAA": "K", "AAG": "K",
//         "AGT": "S", "AGC": "S", "AGA": "R", "AGG": "R",
//         "GTT": "V", "GTC": "V", "GTA": "V", "GTG": "V",
//         "GCT": "A", "GCC": "A", "GCA": "A", "GCG": "A",
//         "GAT": "D", "GAC": "D", "GAA": "E", "GAG": "E",
//         "GGT": "G", "GGC": "G", "GGA": "G", "GGG": "G",
//     },
//     stop_codons=["TGA"],
//     start_codons=["ATG"],
// )

// register_ncbi_table(
//     name="Blastocrithidia Nuclear",
//     alt_name=None,
//     id=31,
//     table={
//         "TTT": "F", "TTC": "F", "TTA": "L", "TTG": "L",
//         "TCT": "S", "TCC": "S", "TCA": "S", "TCG": "S",
//         "TAT": "Y", "TAC": "Y", "TAA": "E", "TAG": "E",
//         "TGT": "C", "TGC": "C", "TGA": "W", "TGG": "W",
//         "CTT": "L", "CTC": "L", "CTA": "L", "CTG": "L",
//         "CCT": "P", "CCC": "P", "CCA": "P", "CCG": "P",
//         "CAT": "H", "CAC": "H", "CAA": "Q", "CAG": "Q",
//         "CGT": "R", "CGC": "R", "CGA": "R", "CGG": "R",
//         "ATT": "I", "ATC": "I", "ATA": "I", "ATG": "M",
//         "ACT": "T", "ACC": "T", "ACA": "T", "ACG": "T",
//         "AAT": "N", "AAC": "N", "AAA": "K", "AAG": "K",
//         "AGT": "S", "AGC": "S", "AGA": "R", "AGG": "R",
//         "GTT": "V", "GTC": "V", "GTA": "V", "GTG": "V",
//         "GCT": "A", "GCC": "A", "GCA": "A", "GCG": "A",
//         "GAT": "D", "GAC": "D", "GAA": "E", "GAG": "E",
//         "GGT": "G", "GGC": "G", "GGA": "G", "GGG": "G",
//     },
//     stop_codons=["TAA", "TAG"],
//     start_codons=["ATG"],
// )

// register_ncbi_table(
//     name="Balanophoraceae Plastid",
//     alt_name=None,
//     id=32,
//     table={
//         "TTT": "F", "TTC": "F", "TTA": "L", "TTG": "L",
//         "TCT": "S", "TCC": "S", "TCA": "S", "TCG": "S",
//         "TAT": "Y", "TAC": "Y", "TAG": "W",   // noqa: E241
//         "TGT": "C", "TGC": "C", "TGG": "W",   // noqa: E241
//         "CTT": "L", "CTC": "L", "CTA": "L", "CTG": "L",
//         "CCT": "P", "CCC": "P", "CCA": "P", "CCG": "P",
//         "CAT": "H", "CAC": "H", "CAA": "Q", "CAG": "Q",
//         "CGT": "R", "CGC": "R", "CGA": "R", "CGG": "R",
//         "ATT": "I", "ATC": "I", "ATA": "I", "ATG": "M",
//         "ACT": "T", "ACC": "T", "ACA": "T", "ACG": "T",
//         "AAT": "N", "AAC": "N", "AAA": "K", "AAG": "K",
//         "AGT": "S", "AGC": "S", "AGA": "R", "AGG": "R",
//         "GTT": "V", "GTC": "V", "GTA": "V", "GTG": "V",
//         "GCT": "A", "GCC": "A", "GCA": "A", "GCG": "A",
//         "GAT": "D", "GAC": "D", "GAA": "E", "GAG": "E",
//         "GGT": "G", "GGC": "G", "GGA": "G", "GGG": "G",
//     },
//     stop_codons=["TAA", "TGA"],
//     start_codons=["TTG", "CTG", "ATT", "ATC", "ATA", "ATG", "GTG"],
// )

// register_ncbi_table(
//     name="Cephalodiscidae Mitochondrial",
//     alt_name=None,
//     id=33,
//     table={
//         "TTT": "F", "TTC": "F", "TTA": "L", "TTG": "L",
//         "TCT": "S", "TCC": "S", "TCA": "S", "TCG": "S",
//         "TAT": "Y", "TAC": "Y", "TAA": "Y",               // noqa: E241
//         "TGT": "C", "TGC": "C", "TGA": "W", "TGG": "W",
//         "CTT": "L", "CTC": "L", "CTA": "L", "CTG": "L",
//         "CCT": "P", "CCC": "P", "CCA": "P", "CCG": "P",
//         "CAT": "H", "CAC": "H", "CAA": "Q", "CAG": "Q",
//         "CGT": "R", "CGC": "R", "CGA": "R", "CGG": "R",
//         "ATT": "I", "ATC": "I", "ATA": "I", "ATG": "M",
//         "ACT": "T", "ACC": "T", "ACA": "T", "ACG": "T",
//         "AAT": "N", "AAC": "N", "AAA": "K", "AAG": "K",
//         "AGT": "S", "AGC": "S", "AGA": "S", "AGG": "K",
//         "GTT": "V", "GTC": "V", "GTA": "V", "GTG": "V",
//         "GCT": "A", "GCC": "A", "GCA": "A", "GCG": "A",
//         "GAT": "D", "GAC": "D", "GAA": "E", "GAG": "E",
//         "GGT": "G", "GGC": "G", "GGA": "G", "GGG": "G",
//     },
//     stop_codons=["TAG"],
//     start_codons=["TTG", "CTG", "ATG", "GTG"],
// )

// ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// // End of auto-generated output from Scripts/update_ncbi_codon_table.py //
// ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
