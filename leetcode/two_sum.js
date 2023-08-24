// Input: nums = [2,7,11,15], target = 9
// Output: [0,1]

function twoSum(arr, target) {
    let obj = {};
    for(let i =0; i< arr.length; i++) {
      if(target - arr[i] in obj) {
        return [obj[target - arr[i]], i]
      } else {
        obj[arr[i]] = i;
      }
    }
  
  }
  
  console.log(twoSum([2, 7, 11, 15], 9));