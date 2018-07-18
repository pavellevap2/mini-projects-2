const linked_list = {
  value: 1433,
  next: {
    value: -1,
    next: {
      value: 15,
      next: {
        value: -18,
        next: null
      }
    }
  }
};

const filter = (filterFn, list) => {
  if (list) {
    const { value, next } = list;
    if (filterFn(value)) {
      return { value, next: filter(filterFn, next) };
    } else {
      return filter(filterFn, next);
    }
  } else {
    return null;
  }
};

console.log(filter(x => x > 2, linked_list));
