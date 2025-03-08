// Call method is used for function borrowing.
// Same as call. Takes second method as an array of arguments.
// Bind method gives a copy of the exact same method which can be invoked later on.

const name = {
  first: "ABC",
  last: "XYZ",
};

function getName(city, state) {
  console.log(`Name is ${this.first} ${this.last} is from ${city} in ${state}`);
}

getName.call(name, "LKO", "UP");
getName.apply(name, ["LKOO", "UP"]);

const letsInvokeLater = getName.bind(name, "LKOOO", "UP");
letsInvokeLater();

Function.prototype.myBind = function (...args) {
  let context = this;
  let params = args.slice(1);
  return function (...args2) {
    context.apply(args[0], [...params, ...args2]);
  };
};

const letsInvokeLater2 = getName.myBind(name, "LKOOO", "UP");
letsInvokeLater2();
