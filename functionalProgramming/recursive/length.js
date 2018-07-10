const ARRAY = [1, -22, -3, 4, 5, -6, 6, 7];

const recursiveLength = (arr, len = 0) => {
  const [x, ...xs] = arr;

  return !arr.length ? len : recursiveLength(xs, len + 1);
};

console.log(recursiveLength(ARRAY));
console.log(recursiveLength([undefined]));
