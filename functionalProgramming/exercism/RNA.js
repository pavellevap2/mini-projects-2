const TRANSFORMATIONS = {
  G: "C",
  C: "G",
  T: "A",
  A: "U"
};

const STRAND_EXMAPLE = "GGGCCCTTTAAGCATACAGGGTTTCA";

const toRNA = strand => {
  strand = strand.split("");
  return strand.map(x => TRANSFORMATIONS[x]).join("");
};

console.log(toRNA(STRAND_EXMAPLE));
