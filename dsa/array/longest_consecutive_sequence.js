// Given an unsorted array of integers nums, return the length of the longest consecutive elements sequence.

// Example 1:
// Input: nums = [100,4,200,1,3,2]
// Output: 4
// Explanation: The longest consecutive elements sequence is [1, 2, 3, 4]. Therefore its length is 4.

// Example 2:
// Input: nums = [0,3,7,2,5,8,4,6,0,1]
// Output: 9

// [100, 4, 200, 1, 3, 2]

// 4 -> 3 -> 2 -> 1 -> 0
// 1 -> 2 -> 3 -> 4

//www.youtube.com/watch?v=W61fIEQ9KhE

function longestConsecutiveSequence(arr) {
  let set = new Set(arr);
  let streak = 0;

  for (let num of set) {
    if (!set.has(num - 1)) {
      let currentStreak = 1;

      while (set.has(num + 1)) {
        currentStreak++;
        num++;
      }
      streak = Math.max(streak, currentStreak);
    }
  }
  return streak;
}

console.log(longestConsecutiveSequence([100, 4, 200, 1, 3, 2]));
