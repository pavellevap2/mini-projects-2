const FIRST_STRAND = "GAGCCTACTAACGGGAT";
const SECOND_STRAND = "CATCGTAATGACGGCCT";

const makeHamming = (firstStrand, secondStrand) => {
  firstStrand = firstStrand.split("");

  return firstStrand.reduce((acc, x, i) => {
    if (x.charCodeAt() !== secondStrand.charCodeAt(i)) {
      acc += 1;
    }

    return acc;
  }, 0);
};

console.log(makeHamming(FIRST_STRAND, SECOND_STRAND));
