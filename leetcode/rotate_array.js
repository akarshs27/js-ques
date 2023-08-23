// Input: nums = [1,2,3,4,5,6,7], k = 3
// Output: [5,6,7,1,2,3,4]
// Explanation:
// rotate 1 steps to the right: [7,1,2,3,4,5,6]
// rotate 2 steps to the right: [6,7,1,2,3,4,5]
// rotate 3 steps to the right: [5,6,7,1,2,3,4]

function rotate(arr, k) {
    reverse(arr, 0 ,arr.length - 1);
    reverse(arr, 0 , k -1);
    reverse(arr, k, arr.length - 1);
    return arr;
}

function reverse(arr, start, end) {
    while(start < end) {
        let temp = arr[start];
        arr[start] = arr[end];
        arr[end] = temp;
        start++;
        end--;
    }
}

console.log(rotate([1,2,3,4,5,6,7], 3));