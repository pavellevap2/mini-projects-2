const PROTEINS = {
  AUG: "Methionine",
  UUU: "Phenylalanine",
  UUC: "Phenylalanine",
  UUA: "Leucine",
  UUG: "Leucine",
  UCU: "Serine",
  UCC: "Serine",
  UCA: "Serine",
  UCG: "Serine",
  UAU: "Tyrosine",
  UAC: "Tyrosine",
  UGU: "Cysteine",
  UGC: "Cysteine",
  UGG: "Tryptophan",
  UAA: "STOP",
  UAG: "STOP",
  UGA: "STOP"
};

const RNA_EXAMPLE = "AUGUUUUCUUAAAUG";

const proteinTranslitions = codon => {
  codon = codon.match(/.{1,3}/g);
  return codon.map((x, i) => ` ${PROTEINS[x]}`).join(",");
};

console.log(proteinTranslitions(RNA_EXAMPLE));
