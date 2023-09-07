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