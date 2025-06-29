// You are given an integer array coins representing coins of different denominations and an integer amount representing a total amount of money.
// Return the fewest number of coins that you need to make up that amount. If that amount of money cannot be made up by any combination of the coins, return -1.
// You may assume that you have an infinite number of each kind of coin.

// https://www.youtube.com/watch?v=kHogi2PC7EY
// Example 1:
// Input: coins = [1,2,5], amount = 11
// Output: 3
// Explanation: 11 = 5 + 5 + 1

// Example 2:
// Input: coins = [2], amount = 3
// Output: -1

// Example 3:
// Input: coins = [1], amount = 0
// Output: 0

function coinChange(coins, amount) {
  let arr = new Array(amount + 1).fill(Infinity);

  arr[0] = 0;

  for (let coin of coins) {
    for (let i = 0; i < arr.length; i++) {
      if (coin <= i) {
        arr[i] = Math.min(arr[i], arr[i - coin] + 1);
      }
    }
  }

  return arr[arr.length - 1] === Infinity ? -1 : arr[arr.length - 1];
}
