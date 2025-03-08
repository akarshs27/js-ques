// Second largest element in an array

const arr = [1, 4, 6, 3, 8, 7, 2];

function secondLargest(arr) {
  let max = 0;
  let secondMax = 0;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > max) {
      max = arr[i];
    }
  }

  for (let j = 0; j < arr.length; j++) {
    if (arr[j] > secondMax && arr[j] !== max) {
      secondMax = arr[j];
    }
  }

  return secondMax;
}

console.log(secondLargest(arr));
