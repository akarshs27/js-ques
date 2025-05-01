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

const asyncSequence = async (tasks, callback) => {
  let errors = [];
  let result = [];

  for (let task of tasks) {
    try {
      const res = await task;
      result.push(res);
    } catch (error) {
      errors.push(error);
    }
  }

  callback(errors, result);
};

asyncSequence(tasks, (error, result) => {
  console.error("error", error);
  console.log("result", result);
});
