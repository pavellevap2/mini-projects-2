const rand = (min, max) => Math.floor(Math.random() * (max - min) + min);

export default function afn1(next) {
  setTimeout(() => next("a1", 0), rand(0, 1000));
}

function afn2(next) {
  setTimeout(() => next("a2", 0), rand(0, 1000));
}

function afn3(next) {
  setTimeout(() => next("done", 0), rand(0, 1000));
}

const done = fns => {
  console.log(...fns);
};

const waterfall = (fns, resultFn) => {
  let resultArr = [];

  function go() {
    if (!fns.length) {
      return resultFn(resultArr.slice(-1));
    } else {
      const currentFn = fns.shift();

      currentFn(data => {
        resultArr.push(data);

        if (resultArr.length > 1) {
          data = resultArr[resultArr.length - 2];
        }
        go();
      });
    }
  }

  go();
};

waterfall([afn1, afn2, afn3], done);
