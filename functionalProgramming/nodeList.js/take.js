const linked_list = {
  value: "a1",
  next: {
    value: "a2",
    next: {
      value: "a3",
      next: {
        value: "a4",
        next: null
      }
    }
  }
};

const take = (list, n) => {
  const { value, next } = list;

  if (n > 1) {
    return { value, next: take(next, n - 1) };
  } else {
    return { value, next: null };
  }
};
