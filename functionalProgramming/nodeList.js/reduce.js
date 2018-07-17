const linked_list = {
  value: -1,
  next: {
    value: 15,
    next: {
      value: 18,
      next: {
        value: 23,
        next: {
          value: -100,
          next: null
        }
      }
    }
  }
};

const reduce = (reduceFn, list, acc) => {
  const { value, next } = list;

  if (next) {
    return reduce(reduceFn, next, reduceFn(acc, value));
  } else {
    return reduceFn(acc, value);
  }
};

console.log(reduce((acc, x) => acc + x, linked_list, 0));
