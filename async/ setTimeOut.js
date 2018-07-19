function setTimeout2(fn, delay) {
  function go() {
    let timer;
    timer = setInterval(() => {
      fn();
    }, delay);
    clearInterval(timer);
    return timer;
  }
  return go();
}

setTimeout2(_ => {
  console.log("es");
}, 500);
