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

const head = (newNode, list) => {
  if (list) {
    return { value: list.value, next: head(newNode, list.next) };
  } else {
    return { value: newNode, next: null };
  }
};

console.log(head("a5", linked_list));
