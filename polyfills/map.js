const arr1 = [1,2,3,4];

const output = arr1.map(each => each * 2);
console.log("Output 1", output);

Array.prototype.myMap = function (callback) {
    let result = [];
    for(let index = 0; index < this.length; index++) {
        result.push(callback(this[index], index, this))
    }
    return result;
}

const output2 = arr1.myMap(each => each * 3);
console.log("Output 2", output2);