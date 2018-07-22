const rand = (min, max) => Math.floor(Math.random() * (max - min) + min);

function afn1(next) {
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

const series = (fns, resultFn) => {
  function go(resultArr = [], index = 0) {
    if (fns.length === index) {
      return resultFn(resultArr);
    } else {
      const nextFn = fns[index];

      nextFn(res => {
        go([...resultArr, res], index + 1);
      });
    }
  }

  go();
};

series([afn1, afn2, afn3], done);
