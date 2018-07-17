const linked_list = {
  value: "a1",
  next: {
    value: "a2",
    next: {
      value: "a3",
      next: null
    }
  }
};

const tail = (el, list) => ({ value: el, next: list });

console.log(tail("a0", linked_list));
