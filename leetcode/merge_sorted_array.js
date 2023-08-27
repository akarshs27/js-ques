// Merge Sorted Array
// You are given two integer arrays nums1 and nums2, sorted in non-decreasing order, and two integers m and n, representing the number of elements in nums1 and nums2 respectively.
// Merge nums1 and nums2 into a single array sorted in non-decreasing order.
// The final sorted array should not be returned by the function, but instead be stored inside the array nums1. To accommodate this, nums1 has a length of m + n, where the first m elements denote the elements that should be merged, and the last n elements are set to 0 and should be ignored. nums2 has a length of n.
// Input: nums1 = [1,2,3,0,0,0], m = 3, nums2 = [2,5,6], n = 3
// Output: [1,2,2,3,5,6]
// Explanation: The arrays we are merging are [1,2,3] and [2,5,6].
// The result of the merge is [1,2,2,3,5,6] with the underlined elements coming from nums1.

// https://www.youtube.com/watch?v=FhIhUy8bZww

function mergeSortedArray(arr1, m, arr2, n) {
  let first = m - 1;
  let second = n - 1;
  let i = m + n - 1;

  while (second >= 0) {
    let firstVal = nums1[first];
    let secondVal = nums2[second];
    if (firstVal > secondVal) {
      nums1[i] = firstVal;
      first--;
      i--;
    } else {
      nums1[i] = secondVal;
      i--;
      second--;
    }
  }
  console.log(nums1);
}

mergeSortedArray([1,2,3,0,0,0], 3, [2,5,6], 3);