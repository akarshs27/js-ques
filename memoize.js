
function memoize() {
    const cache = {};
    return (num) => {
        if(cache[num]) {
            console.log("Memoized function");
            return cache[num];
        } else {
            cache[num] = num * 2;
            console.log("Un memoized function");
            return cache[num];
        }
    }
}

const res = memoize();

console.log(res(3));
console.log(res(3));