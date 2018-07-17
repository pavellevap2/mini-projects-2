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

  if (filterFn(value) && next) {
    return { value, next: filter(filterFn, list.next) };
  } else if (!filterFn(value) && next) {
    filter(filterFn, next);
  } else {
    return { value, next: null };
  }
};

console.log(filter(x => x > 2, linked_list));
