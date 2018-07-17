const linked_list = {
  value: -1,
  next: {
    value: 15,
    next: {
      value: 18,
      next: null
    }
  }
};

const filter = (filterFn, list) => {
  const { value, next } = list;

  if (next) {
    if (filterFn(value)) {
      return { value, next: filter(filterFn, next) };
    } else {
      return filter(filterFn, next);
    }
  } else {
    if (filterFn(value)) {
      return { value, next: null };
    } else return null;
  }
};

console.log(filter(x => x > 2, linked_list));
