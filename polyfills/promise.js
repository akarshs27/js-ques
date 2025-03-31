function promisePolyfill(executor) {
  let onResolve;
  let onReject;
  let isFulfilled = false;
  let isRejected = false;
  let isCalled = false;
  let value;

  function resolve(val) {
    isFulfilled = true;
    value = val;

    if (typeof onResolve === "function") {
      onResolve(val);
      isCalled = true;
    }
  }

  this.then = function (callback) {
    onResolve = callback;

    if (isFulfilled && !isCalled) {
      called = true;
      onResolve(value);
    }

    return this;
  };

  try {
    executor(resolve, reject);
  } catch (err) {
    reject(err);
  }
}

const promise1 = new promisePolyfill((resolve, reject) => {
  setTimeout(() => {
    resolve(2);
  }, 1000);
});

promise1
  .then((res) => {
    console.log(res);
  })
  .catch((err) => {
    console.error(err);
  });
