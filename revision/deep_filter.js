const obj = {
  a: {
    d: {
      e: 5,
      f: {
        g: -4,
      },
    },
  },
  b: {
    h: {
      i: -3,
    },
  },
  c: {},
};

const filter = (val) => val > 0;

function deepFilter(obj, fn) {
  for (let key in obj) {
    let val = obj[key];
    if (typeof val === "object") {
      deepFilter(val, fn);
    } else {
      if (fn(val) === false) {
        delete obj[key];
      }
    }

    if (JSON.stringify(obj[key]) === "{}") {
      delete obj[key];
    }
  }
}

deepFilter(obj, filter);

console.log(obj);
