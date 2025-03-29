const promise1 = new Promise((resolve, reject) => {
  resolve("1");
});

const promise2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("2");
  }, 1000);
});

const promise3 = Promise.resolve("3");

const allPromises = [promise1, promise2, promise3];

function recursivePromiseCall(promises) {
  if (promises.length === 0) return;

  const currentPromise = promises.shift();

  currentPromise
    .then((res) => {
      console.log(res);
      recursivePromiseCall(promises);
    })
    .catch((err) => {
      console.error(err);
    });
}

recursivePromiseCall(allPromises);
