add(1,2)(3,4)(4,5)(1,1)() 

function add(a,b) {
    return function (c,d) {
        if(c && d) {
            return add(a+b+c+d,0);
        }
        return a + b;
    }
}

console.log(add(1,2)(3,4)(4,5)(1,1)());
