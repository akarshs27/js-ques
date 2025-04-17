function message() {
  console.log("hello");
}

// const sample = sampler(message, 4);
// sample();
// sample();
// sample();
// sample(); // this will be executed
// sample();
// sample();
// sample();
// sample(); // this will be executed

function sampler(fn, count) {
  let index = 0;
  return () => {
    index++;
    if (index % count === 0) {
      fn();
    }
  };
}

const sample = sampler(message, 4);
sample();
sample();
sample();
sample();
sample();
sample();
sample();
sample();
sample();
