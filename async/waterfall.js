const rand = (min, max) => Math.floor(Math.random() * (max - min) + min);

function afn1(next) {
  setTimeout(() => next("a1", null), rand(0, 1000));
}

function afn2(next) {
  setTimeout(() => next("a2", null), rand(0, 1000));
}

function afn3(next) {
  setTimeout(() => next("done", null), rand(0, 1000));
}

const done = fns => {
  console.log(...fns);
};

const waterfall = (fns, resultFn) => {
  function go(prevResult, index = 0) {
    if (fns.length === index) {
      return resultFn(prevResult);
    } else {
      const currentFn = fns[index];

      currentFn(prevResult, data => {
        //
      });
    }
  }

  go();
};

waterfall([afn1, afn2, afn3], done);
