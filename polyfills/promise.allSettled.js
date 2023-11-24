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
  }, 5000);
});

// const p = Promise.allSettled([p1, p2, p3]);

// p.then((values) => {
//   console.log(values);
// }).catch((err) => {
//   console.error(err);
// });

// [
//   { status: "fulfilled", value: "p2 resolved" },
//   { status: "fulfilled", value: "p2 resolved" },
//   { status: "rejected", reason: "p3 reject" },
// ];

function myPromiseAllSettled(arr) {
  const result = [];
  let c = 0;
  return new Promise((resolve, reject) => {
    arr.forEach((ar, index) => {
      ar.then((value) => {
        result[index] = {
          status: "fulfilled",
          value,
        };
        c++;
        if (c === arr.length - 1) {
          resolve(result);
        }
      }).catch((err) => {
        result[index] = {
          status: "rejected",
          reason: err,
        };
        c++;
        if (c === arr.length - 1) {
          resolve(result);
        }
      });
    });
  });
}

const p = myPromiseAllSettled([p1, p2, p3]);

p.then((values) => {
  console.log(values);
}).catch((err) => {
  console.error(err);
});
