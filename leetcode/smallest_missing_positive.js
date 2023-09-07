function getSmallestPositive(nums) {
//     const newNums = nums.filter(num => num > 0);
//     const min = Math.min(...newNums);
//     const max = Math.max(...newNums);
  
//     if (min > newNums.length) return 1;
//     for (let i = min; i <= max; i++) {
//       if (!newNums.includes(i) && i !== 0 && i > 0) {
//         return i;
//       }
//       if (i === max) return i + 1;
//     }


//https://www.youtube.com/watch?v=mxaBwC48pOY

        let obj = {};
        for(let num of nums) {
            obj[num] = 1;
        }
        console.log(obj);
        for(let i = 1; i < nums.length; i++) {
            if(!obj[i]) {
                return i;
            }
        }
        return nums.length + 1;

  };

  console.log(getSmallestPositive([1, 1, 0, -1, -2]));