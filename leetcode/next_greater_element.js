// Next Greater Element (NGE)
//  Input = [ 4 , 5 , 2 , 25 ];
//  Output = [5, 25, 25, -1]
//  Input =  [ 13 , 7, 6 , 12 ]
//  Output =  [-1, 12 , 12 ,-1]

function getNextLargerElement(arr) {
    let result = [];
    for (let i = 0; i < arr.length; i++) {
      for (let j = i + 1; j < arr.length; j++) {
        if (arr[j] > arr[i]) {
          result.push(arr[j]);
          break;
        }
        if (j === arr.length - 1) result.push(-1);
      }
      if (i === arr.length - 1) {
        result.push(-1);
      }
    }
  
    return result;
  }
  
  console.log(getNextLargerElement([13, 7, 6, 12]));


  function printNGE(arr) {
    let result = new Array(arr.length).fill(-1);
    let stack = [];
  
    // do for each element
    for (let i = 0; i < arr.length; i++) {
      // loop till we have a greater element on top or stack becomes empty.
  
      // Keep popping elements from the stack smaller than the current
      // element, and set their next greater element to the current element
  
      while (stack.length !== 0 && arr[stack.length - 1] < arr[i]) {
        result[stack.pop()] = arr[i];
      }
  
      // push current "index" into the stack
      stack.push(i);
    }
  
    return result;
  }
  console.log(printNGE([11, 13, 21, 3]));