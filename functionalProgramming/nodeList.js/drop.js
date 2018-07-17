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

const drop = (list, n) => {
  const { next, value } = list;

  if (n > 0) {
    return drop(next, n - 1);
  } else {
    return list;
  }
};

console.log(drop(linked_list, 1));
