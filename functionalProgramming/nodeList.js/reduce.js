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
  if (list) {
    return reduce(reduceFn, list.next, reduceFn(acc, list.value));
  } else {
    return acc;
  }
};

console.log(reduce((acc, x) => acc + x, linked_list, 0));
console.log(reduce((acc, x) => acc.concat([x, x]), linked_list, []));
