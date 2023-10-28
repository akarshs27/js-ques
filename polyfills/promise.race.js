const p1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("p1 resolved");
  }, 3000);
});
const p2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("p2 resolved");
  }, 2000);
});
const p3 = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject("p3 reject");
  }, 1000);
});

// const p = Promise.race([p1, p2, p3]);

// p.then((values) => {
//   console.log(values); // p3 reject
// }).catch((err) => {
//   console.error(err);
// });

function myPromiseRace(arr) {
  return new Promise((resolve, reject) => {
    arr.forEach((ar) => {
      ar.then((value) => {
        resolve(value);
      }).catch((err) => {
        reject(err);
      });
    });
  });
}

const p = myPromiseRace([p1, p2, p3]);
p.then((value) => {
  console.log(value);
}).catch((err) => {
  console.error(err);
});
