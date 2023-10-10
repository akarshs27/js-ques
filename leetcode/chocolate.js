function findMinDifference(N, M, arr) {
  if (N < M) {
    return -1; // Not enough parrckets to choose from
  }

  // Sort the array A in non-decreasing order
  arr.sort((a, b) => a - b);
  console.log("arr", arr);

  let minDifference = Infinity; // Initialize with a large value

  // Iterate through the array A, considering each element as the starting point
  for (let i = 0; i <= N - M; i++) {
    // Calculate the difference between the maximum and minimum elements in the subset of M packets
    const diff = arr[i + M - 1] - arr[i];
    console.log("Diff", diff);
    // Update minDifference with the minimum difference encountered so far
    if (diff < minDifference) {
      minDifference = diff;
    }
  }

  return minDifference;
}

// Example usage
const N = 7;
const M = 3;
const A = [7, 3, 2, 4, 9, 12, 56];
const output = findMinDifference(N, M, A);
console.log(output); // Output: 6
