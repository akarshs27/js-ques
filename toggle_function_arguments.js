// Toggle function arguments
// Ex 1- const onOff = toggle("on", "off") 
//   onOff() => on
//   onOff() => off
//   onOff() => on
 
// Ex 2 - const change = toggle("1", "2", "3");
//    change() => 1
//    change() => 2
//    change() => 3
//    change() => 1

function toggle(...args) {
    let index = 0;

    return function () {
        if(index === args.length) index = 0;
        if(args.length) {
            return args[index++];
        }
    }
}

 const change = toggle("1","2","3");
   console.log(change());
   console.log(change());
   console.log(change());
   console.log(change());
   console.log(change());
