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

const map = (mapFn, list) => {
  if (list) {
    const { value, next } = list;
    return { value: mapFn(value), next: map(mapFn, next) };
  } else {
    return null;
  }
};

console.log(map(x => x + "!", linked_list));
