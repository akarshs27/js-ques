
function sum(...args) {
    const storage = [...args];
    console.log(args);

    if(args.length === 0) {
        return 0;
    } 

    function temp(...args2) {
        console.log("Args2", args2);
       storage.push(...args2);
        console.log("Storage", storage);
       if(args2.length === 0) {
         return storage.reduce((a,b) => a+b, 0);
       } else {
        return temp;
       }
    }

    return temp;
}

// const total = sum(10)(20)(30)(40)()
// console.log(total);
const total2 = sum(10,20)(20)(30,30)(40)()
console.log(total2);
// const total3 = sum(10,20)(20,20)(30,40)(40)()
// console.log(total3);