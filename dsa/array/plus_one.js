// Input: digits = [1,2,3]
// Output: [1,2,4]

function incrementOne(arr) {
    for(let i = arr.length - 1; i >= 0; i--) {
        if(arr[i] !== 9) {
          arr[i]++;
          return arr;
        } else {
          arr[i] = 0;
        }
    }
    arr.unshift(1);
    return arr;
  }
  
console.log(incrementOne([9, 9, 9])); [1,0,0,0]
console.log(incrementOne([1,2,3]));  [1,2,4]