const rand = (min, max) => Math.floor(Math.random() * (max - min) + min);

function afn1(next) {
  setTimeout(() => next("a1"), rand(0, 1000));
}

function afn2(next) {
  setTimeout(() => next("a2"), rand(0, 1000));
}

function afn3(next) {
  setTimeout(() => next("a3dsa"), rand(0, 1000));
}

const done = fns => {
  console.log(fns);
};

const afns = [afn1, afn2, afn3];

const parallel = (fns, resultFn) => {
  let resultArr = [];

  fns.forEach(fn => {
    fn(res => {
      if (resultArr.length < fns.length - 1) {
        resultArr.push(res);
      } else {
        resultArr.push(res);
        return resultFn(resultArr);
      }
    });
  });
};

parallel(afns, done);
