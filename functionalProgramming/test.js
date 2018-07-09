const mapWith = (x, y) => y.map(z => x(z));

const row = function() {
  console.log(arguments);
  return mapWith(
    column => {
      console.log(arguments, "arg");
      return column * arguments[0];
    },
    [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]
  );
};

console.log(row(3));
