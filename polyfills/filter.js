const arr = [1,2,3,4,5,6];
const output = arr.filter(each => each > 3);
console.log("Output 1", output);

Array.prototype.myFilter = function(callback) {
    let result = [];
    for(let index = 0; index < this.length; index++) {
        if(callback(this[index], index, this)) {
            result.push(this[index]);
        }
    }
    return result;
}

const output2 = arr.myFilter((ar, index, arr) => ar > 3);
console.log("Output 2", output2);