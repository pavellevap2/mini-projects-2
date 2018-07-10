const ROMAN_NUMBERS = {
  1: "I",
  5: "V",
  10: "X",
  50: "L",
  100: "C",
  500: "D",
  1000: "M"
};

const convertToRoman = (number, acc = "") => {
  const discharge = String(number).length - 1;
  const firstNumber = Number(String(number)[0]);

  const ARRAY_OF_DISCHARGES = Array(discharge)
    .fill(0)
    .map(x => 0);

  let nearestDischarge = Number(
    ARRAY_OF_DISCHARGES.reduce((acc, x) => {
      acc = `${acc}` + `${x}`;
      return acc;
    }, firstNumber)
  );

  return nearestDischarge;
};
