const reduce = (reduceFn, arr, initalValue) => {
  const [x, ...xs] = arr;
  const acc = x === undefined ? initalValue : reduceFn(initalValue, x);

  return arr.length ? reduce(reduceFn, xs, acc) : acc;
};

const concatFn = (acc, x) => acc.concat([x * 2]);

console.log(reduce((acc, x) => acc + x, [1, 2, 3, 4], 0));
console.log(reduce(concatFn, [1, 2, 3, 4, 56, 6, 235], []));
