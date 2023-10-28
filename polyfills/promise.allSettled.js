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
  return new Promise((resolve, reject) => {
    arr.forEach((ar, index) => {
      ar.then((value) => {
        result.push({
          status: "fulfilled",
          value,
        });
        if (index === arr.length - 1) {
          resolve(result);
        }
      }).catch((err) => {
        result.push({
          status: "rejected",
          reason: err,
        });
        if (index === arr.length - 1) {
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
