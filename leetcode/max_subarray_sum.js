function maxSubarray(arr, n) {
  let tempSum = 0;
  let maxSum = 0;

  for (let i = 0; i < n; i++) {
    maxSum = maxSum + arr[i];
  }

  for (let i = n; i < arr.length; i++) {
    tempSum = tempSum - arr[i - n] + arr[i];
    maxSum = Math.max(maxSum, tempSum);
  }

  return maxSum;
}

console.log(maxSubarray([2, 6, 9, 2, 1, 8, 5, 6, 3], 3));
