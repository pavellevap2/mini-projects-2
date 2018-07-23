const series = (fns, resultFn) => {
  function go(fns, result) {
    if (!fns.length) {
      return resultFn(result);
    }

    const currentFn = fns[0];
    currentFn((data, err) => {
      try {
        if (err) {
          throw err;
        } else {
          go(fns.slice(1), [...result, data]);
        }
      } catch (error) {
        go([], error);
      }
    });
  }

  go(fns, []);
};

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
  console.log(fns);
};

function afnWithError(next) {
  setTimeout(() => next("data", "error"), rand(0, 1000));
}

series([afn1, afnWithError, afn3], done); //error
series([afn1, afn2, afn3], done); //[a1, a2, done]
