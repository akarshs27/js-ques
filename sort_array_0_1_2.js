// Sort an array having 0's,1's and 2's
// Ex - [0,1,2,1,0,0,1,2,0] => [0,0,0,0,1,1,1,2,2]

//Dutch National Flag Algo

//Brute Force - Count frequency of 0,1 and 2 and replace in the array.

function getSortedArray(arr) {
    let low = 0;
    let mid = 0;
    let high = arr.length - 1;
    while(mid <= high) {
        switch(arr[mid]) {
            case 0:
                let temp = arr[mid];
                arr[mid] = arr[low];
                arr[low] = temp;
                low++;
                mid++;
                break;
            case 1: mid++;
                    break;
            case 2: 
            let temp2 = arr[mid];
            arr[mid] = arr[high];
            arr[high] = temp2;
            high--;
            break;
        } 
    }
    return arr;
}


console.log(getSortedArray([0,1,2,1,0,0,1,2,0]));