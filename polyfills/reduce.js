const arr = [1,2,3,4];

const output = arr.reduce((acc, ar) => acc+ ar, 10);
console.log("Output 1", output);

Array.prototype.myReduce = function(callback, initialValue) {
    let accumulator = initialValue;
    for(let index = 0; index < this.length; index++) {
        accumulator = accumulator ? callback(accumulator, this[index], index, this) : this[index];
    }
    return accumulator;
}

const output2 = arr.myReduce((acc, ar, index, arr) => acc + ar);
console.log("Output 2", output2);