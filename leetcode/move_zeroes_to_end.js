// Input: nums = [0,1,0,3,12]
// Output: [1,3,12,0,0]

function moveZeroToEnd(arr) {
    let i = 0;
    for (let j = 0; j < arr.length; j++) {
      if (arr[j] !== 0) {
        let temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
        i++;
      }
    }
    return arr;
  }
  
  console.log(moveZeroToEnd([0, 1, 0, 3, 12]));
  