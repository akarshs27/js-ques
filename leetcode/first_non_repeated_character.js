// Write a function that returns first non repeated character in a string.
// Ex - 'abadccade' => b

function getNonRepeated(str) {
    let obj = {};

    for(let val of str) {
        obj[val] = obj[val] ? obj[val] + 1 : 1
    }

    // for(let key in obj) {
    //     if(obj[key] === 1) {
    //         return key;
    //     } else {
    //         return null;
    //     }
    // }

    for(let i = 0; i < str.length; i++) {
        if(obj[str[i]] === 1) {
            return str[i];
        } 
    }
    return null;
}

console.log(getNonRepeated('abadccade'));