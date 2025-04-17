// let hello = toggle("hello");
// hello(); // "hello";
// hello(); // "hello";

// let onOff = toggle("on", "off");
// onOff(); // "on"
// onOff(); // "off"
// onOff(); // "on"

function toggle(...args) {
  let index = 0;
  return () => {
    if (index === args.length) index = 0;
    return args[index++];
  };
}

let hello = toggle("hello");
console.log(hello()); // "hello";
console.log(hello()); // "hello";

let onOff = toggle("on", "off", "c");
console.log(onOff()); // "on"
console.log(onOff()); // "off"
console.log(onOff()); // "c"
console.log(onOff()); // "on"
console.log(onOff()); // "off"
console.log(onOff()); // "c"
