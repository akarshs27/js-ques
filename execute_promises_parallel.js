const createAsyncTask = () => {
  const value = Math.floor(Math.random() * 10);

  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (value < 5) {
        reject(`Error ${value}`);
      } else {
        resolve(`Success ${value}`);
      }
    }, value * 1000);
  });
};

const tasks = [
  createAsyncTask(),
  createAsyncTask(),
  createAsyncTask(),
  createAsyncTask(),
  createAsyncTask(),
  createAsyncTask(),
  createAsyncTask(),
  createAsyncTask(),
];

// const result = Promise.allSettled(tasks);
// result
//   .then((res) => {
//     console.log("res", res);
//   })
//   .catch((err) => {
//     console.log("err", err);
//   });

// suppose promise.allSetltled is not available

const asyncParallel = (tasks, callback) => {
  let errors = [];
  let results = [];
  let completed = 0;

  tasks.forEach((task) => {
    task
      .then((val) => results.push(val))
      .catch((err) => errors.push(err))
      .finally(() => {
        completed++;
        if (completed >= tasks.length) {
          callback(errors, results);
        }
      });
  });
};

asyncParallel(tasks, (error, result) => {
  console.error("error", error);
  console.log("result", result);
});
