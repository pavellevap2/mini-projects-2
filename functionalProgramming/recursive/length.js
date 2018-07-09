const ARRAY = [1, -22, -3, 4, 5, -6, 6, 7];

const recursiveLength = (arr, index = 0) =>
  !arr[index] ? index : recursiveLength(arr, index + 1);

console.log(recursiveLength(ARRAY));
console.log(recursiveLength([]));
