const parallel = (fns, resultFn) => {
  let resultArr = [];

  for (fn of fns) {
    fn((data, err) => {
      if (err) {
        resultFn(err);
      } else {
        console.log(data);
        if (resultArr.length < fns.length - 1) {
          resultArr.push(data);
        } else {
          resultArr.push(data);
          resultFn(resultArr);
        }
      }
    });
  }
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

// parallel([afn1, afn2, afn3], done); //log in random order
parallel([afn1, afnWithError, afn3], done); //error
