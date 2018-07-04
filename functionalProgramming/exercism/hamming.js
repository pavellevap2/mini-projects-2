const FIRST_STRAND = "GAGCCTACTAACGGGAT";
const SECOND_STRAND = "CATCGTAATGACGGCCT";

const makeHamming = (firstStrand, secondStrand) => {
  let differnce = 0;
  firstStrand = firstStrand.split("");

  firstStrand.forEach((x, i) => {
    if (x.charCodeAt() !== secondStrand.charCodeAt(i)) {
      differnce += 1;
    }
  });

  return differnce;
};

console.log(makeHamming(FIRST_STRAND, SECOND_STRAND));
