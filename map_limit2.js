function getUserById(id, callback) {
  const randomeRequestTime = Math.floor(Math.random() * 100) + 200;

  setTimeout(() => {
    callback("user" + id);
  }, randomeRequestTime);
}

function mapLimit(inputs, limit, iterateeFn, callback) {
  let index = 0;
  let result = [];
  let completedTask = 0;

  function postCompletionCallback(activeIndex, output) {
    result[activeIndex] = output;
    completedTask += 1;

    if (completedTask === inputs.length) {
      callback(result);
      return;
    }

    if (index < inputs.length) {
      iterateeFn(inputs[index], postCompletionCallback.bind(null, index));
      index += 1;
    }
  }

  while (index < inputs.length) {
    iterateeFn(inputs[index], postCompletionCallback.bind(null, index));
  }
}

mapLimit([1, 2, 3, 4, 5], 2, getUserById, (allResults) => {
  console.log("output", allResults);
});
