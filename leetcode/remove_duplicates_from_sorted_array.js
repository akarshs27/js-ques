// Remove Duplicates from Sorted Array
// https://leetcode.com/explore/featured/card/top-interview-questions-easy/92/array/727/
// Input - nums = [0,0,1,1,1,2,2,3,3,4] Output - 5

                    // [0,0,1,1,1,2,2,3,3,4]
                    // [0,0,1,1,1,2,2,3,3,4]
                    // [0,0,1,1,1,2,2,3,3,4]
                    // [0,0,1,1,1,2,2,3,3,4]

function getNumberOfUniqueCharacters(arr) {
    if(arr.length === 0) return 0;
    let i =0;
    for(let j=1; j < arr.length; j++) {
        if(arr[i] !== arr[j]) {
            i++;
            console.log(arr[i], arr[j]);
            arr[i] = arr[j];
            console.log(arr);
        } 
    }
    return i+1;
}

console.log(getNumberOfUniqueCharacters([0,0,1,1,1,2,2,3,3,4]));