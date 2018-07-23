function waterfall(fns, resultFn) {
  function go(fns, lastResult) {
    if (!fns.length) {
      return resultFn(lastResult);
    }

    const [fn, ...restFns] = fns;
    fn(lastResult, (data, err) => {
      try {
        if (err) {
          throw err;
        } else {
          go(restFns, data);
        }
      } catch (error) {
        go([], error);
      }
    });
  }

  go(fns, null);
}

const rand = (min, max) => Math.floor(Math.random() * (max - min) + min);

function afn1(_, next) {
  setTimeout(() => next("a1", null), rand(0, 1000));
}

function afn2(_, next) {
  setTimeout(() => next("a2", null), rand(0, 1000));
}

function afn3(_, next) {
  setTimeout(() => next("done", null), rand(0, 1000));
}

const done = fns => {
  console.log(fns);
};

function afnWithError(_, next) {
  setTimeout(() => next("data", "error"), rand(0, 1000));
}

waterfall([afn1, afn2, afn3], done); //done
waterfall([afn1, afnWithError, afn3], done); //error
