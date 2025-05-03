let numPromise = mapLimit([1, 2, 3, 4, 5], 3, function (num, callback) {
  setTimeout(function () {
    num = num * 2;
    console.log(num);
    callback(null, num);
  }, 2000);
});

numPromise
  .then((result) => console.log("success:" + result))
  .catch(() => console.log("no success"));

//  first batch
// Output: 2;
// 4;
// 6;
//  second batch
// 8;
// 10;
//  final result
// ("success: [2, 4, 6, 8, 10]");

function chopped(arr, limit) {
  let result = [];
  let i = 0;

  while (i < arr.length) {
    result.push(arr.slice(i, i + limit));
    i = i + limit;
  }

  return result;
}

async function mapLimit(arr, limit, fn) {
  const batches = chopped(arr, limit);
  // [[1, 2], [3, 4], [5]];
  const results = [];

  for (let batch of batches) {
    const batchResults = await Promise.all(
      batch.map(
        (each) =>
          new Promise((resolve, reject) => {
            fn(each, (err, result) => {
              if (err) reject(err);
              else resolve(result);
            });
          })
      )
    );
    results.push(...batchResults);
  }

  return results;
}
