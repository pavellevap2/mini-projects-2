const createCumulativeSong = quatrainNumber => {
  return Array(4)
    .fill(0)
    .map((_, i) => i);
};

console.log(createCumulativeSong(5));
