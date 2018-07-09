const filter = (filterFn, [x, ...xs]) => {
  const currentElement = filterFn(x) ? [x] : [];

  return xs.length
    ? [...currentElement, ...filter(filterFn, xs)]
    : currentElement;
};

console.log(filter(x => x, []));
console.log(filter(x => x < 3, [1, -2, 3, -4, -55, 31, -2, 3, 10]));
