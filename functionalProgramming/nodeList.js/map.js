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
  const { value, next } = list;

  if (next) {
    return { value: mapFn(value), next: map(mapFn, next) };
  } else {
    return { value: mapFn(value), next: null };
  }
};
