const p1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("P1 resolved");
  }, 2000);
});
const p2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("P2 resolved");
  }, 2000);
});
const p3 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("P3 resolved");
  }, 2000);
});

const nativeP = Promise.all([p1, p2, p3]);
nativeP
  .then((values) => {
    console.log(values);
  })
  .catch((err) => {
    console.error(err);
  });

function myPromiseAll(arr) {
  let result = [];
  return new Promise((resolve, reject) => {
    arr.forEach((ar, index) => {
      ar.then((value) => {
        result.push(value);
        if (index === arr.length - 1) {
          resolve(result);
        }
      }).catch((err) => {
        reject(err);
        return;
      });
    });
  });
}

const p = myPromiseAll([p1, p2, p3]);
p.then((values) => {
  console.log("Values", values);
}).catch((err) => {
  console.error(err);
});

const p5 = myPromiseAll([Promise.resolve("Hi"), Promise.reject("Bye"), p3]);
p5.then((values) => {
  console.log("Values", values);
}).catch((err) => {
  console.error(err);
});
