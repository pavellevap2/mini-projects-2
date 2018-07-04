const curry = fn => next(fn.length, (args = []), fn);

const next = (arity, args, fn) => (...xs) => {
  if (arity - xs.length <= 0) {
    return fn(...args, ...xs);
  }

  return next(arity - xs.length, [...args, ...xs], fn);
};

const sum_4 = curry((x, y, z, n) => x + y + z + n);
const mul_3 = curry((x, y, z) => x * y * z);

console.log(
  sum_4(1, 2, 3, 4),
  sum_4(1, 2)(3)(4),
  sum_4(1)(2, 3, 4),
  sum_4(1)(2)(3)(4)
); //10

console.log(mul_3(1, 2, 3), mul_3(1, 2)(3), mul_3(1)(2, 3), mul_3(1)(2)(3)); //6
