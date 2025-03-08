const arr = [1,2,3,4];

const output = arr.map((ar, index, arr) => ar * 2);
console.log("Output 1", output);

Array.prototype.myMap = function (callback) {
    let result = [];
    for(let index = 0; index < this.length; index++) {
        result.push(callback(this[index], index, this))
    }
    return result;
}

const output2 = arr.myMap((ar, index, arr) => ar * 3);
console.log("Output 2", output2);