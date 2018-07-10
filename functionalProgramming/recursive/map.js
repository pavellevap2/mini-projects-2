const ARRAY = [1, 2, 3, 4, 5, 6, 6, 7];

const recursiveMap = (mapFn, array) => {
  const [x, ...xs] = array;
  const currentElement = !array.length ? [] : [mapFn(x)];

  return array.length
    ? [...currentElement, ...recursiveMap(mapFn, xs)]
    : currentElement;
};

console.log(recursiveMap(x => x + 2, ARRAY));
console.log(recursiveMap(x => x * x, [2]));
console.log(recursiveMap(x => x, [undefined, 3, 5, 6]));
