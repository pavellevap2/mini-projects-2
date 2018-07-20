const rand = (min, max) => Math.floor(Math.random() * (max - min) + min);

function afn1(next) {
  setTimeout(() => next("a1", 0), rand(0, 1000));
}

function afn3(next) {
  setTimeout(() => next("done", 0), rand(0, 1000));
}

const done = fns => {
  console.log(...fns);
};

const series = (fns, resultFn) => {
  let resultArr = [];

  function go() {
    if (!fns.length) {
      return resultFn(resultArr);
    } else {
      const firstFn = fns.shift();

      firstFn(res => {
        resultArr.push(res);
        go();
      });
    }
  }

  go();
};

series([afn1, afn2, afn3], done);
