// Input: nums1 = [1,2,3,0,0,0], m = 3, nums2 = [2,5,6], n = 3
// Output: [1,2,2,3,5,6]
// Explanation: The arrays we are merging are [1,2,3] and [2,5,6].
// The result of the merge is [1,2,2,3,5,6] with the underlined elements coming from nums1.

// [1,2,3,0,0,0] [2,5,6]
//      f     i       s
// [1,2,3,0,0,6] [2,5,6]
//      f   i       s
// [1,2,3,0,5,6] [2,5,6]
//      f i       s
// [1,2,2,3,5,6]  [2,5,6]
//      f i      s
function mergeSortedArray(nums1, m, nums2, n) {
  let first = m - 1;
  let second = n - 1;
  let i = nums1.length - 1;

  while (second >= 0) {
    if (nums1[first] < nums2[second]) {
      nums1[i] = nums2[second];
      i--;
      second--;
    } else {
      nums1[i] = nums1[first];
      nums1[first] = nums2[second];
      i--;
      first--;
    }
  }

  return nums1;
}

console.log(mergeSortedArray([1, 2, 3, 0, 0, 0], 3, [2, 5, 6], 3));
