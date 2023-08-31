const arr = [1,2,3,4,5,6];
const output = arr.find(each => each === 3);
console.log('Output 1', output);

Array.prototype.myFind = function (callback) {
    for(let index = 0 ; index < this.length; index++) {
        if(callback(this[index], index, this)) {
            return this[index];
        }
    }
}

const output2 = arr.myFind((ar, index, arr) => ar === 3);
console.log('Output 2', output2);