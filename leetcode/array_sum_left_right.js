//Find an element in array such that sum of left array and right array is equal
// Ex - [1,4,1,7,5,1]


function findPivot(arr) {
    for(let i = 1; i< arr.length; i++) {
        let leftSum = 0;
        for(let j = i-1; j >= 0; j--) {
            leftSum = leftSum + arr[j];
        }
        let rightSum = 0;
        for(let k= i+1; k < arr.length; k++) {
            rightSum = rightSum + arr[k];
        }

        if(leftSum === rightSum) {
            return arr[i];
        }
    }
    return -1;
}

console.log(findPivot([1,4,1,7,5,1]));