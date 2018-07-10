const filter = (filterFn, array) => {
  const [x, ...xs] = array;
  const currentElement = filterFn(x) ? [x] : [];

  return array.length
    ? [...currentElement, ...filter(filterFn, xs)]
    : currentElement;
};

console.log(filter(x => x, []));
console.log(filter(x => x > 3, [1, -2, 3, -4, -55, 31, -2, 3, 10]));
