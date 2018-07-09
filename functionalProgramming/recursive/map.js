const ARRAY = [1, 2, 3, 4, 5, 6, 6, 7];

const recursiveMap = (mapFn, [x, ...xs]) => {
  const currentElement = x === undefined && !xs.length ? [] : [mapFn(x)];

  return xs.length
    ? [...currentElement, ...recursiveMap(mapFn, xs)]
    : currentElement;
};

console.log(recursiveMap(x => x + 2, ARRAY));
console.log(recursiveMap(x => x * x, [2]));
console.log(recursiveMap(x => x, []));
