const map = (mapFn, arr) => {
  let resultArr = [];

  for (el of arr) {
    resultArr.push(mapFn(el));
  }

  return resultArr;
};

console.log(map(x => x + 2, [1, 2, 3, 4, 5, 6, 4342, 3]));

const exampleArr = [-1, 2, -5, -23, 124, -23, 1, 22, 44, 12, -22, 0];

const filter = (filterFn, arr) => {
  let resultArr = [];

  for (el of arr) {
    if (filterFn(el)) {
      resultArr.push(el);
    }
  }

  return resultArr;
};

console.log(filter(x => x > 0, exampleArr));

const foldl = (reduceFn, arr, acc) => {
  for (el of arr) {
    acc = reduceFn(acc, el);
  }

  return acc;
};

console.log(foldl((acc, x) => acc + x, exampleArr, 0));

const mapWithReduce = (mapFn, arr) => {};

const filterWithReduce = (mapFn, arr) => {};
