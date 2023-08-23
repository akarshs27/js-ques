// Input: nums1 = [1,2,2,1], nums2 = [2,2]
// Output: [2,2]

function intersection(arr1, arr2) {
    let obj1 = {};
    let obj2 = {};
    let result = [];
  
    for (let item of arr1) {
      obj1[item] = obj1[item] ? obj1[item] + 1 : 1;
    }
    for (let item of arr2) {
      obj2[item] = obj2[item] ? obj2[item] + 1 : 1;
    }

    for (let key in obj1) {
      if (key in obj2) {
        for (let i = 0; i < Math.min(obj1[key], obj2[key]); i++) {
          result.push(key);
        }
      }
    }
    
    return result;
  }
  
  console.log(intersection([1, 2, 2, 1], [2, 2]));