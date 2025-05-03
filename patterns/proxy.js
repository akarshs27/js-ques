// With a Proxy object, we get more control over the interactions with certain objects. A proxy object can determine the behavior whenever we’re interacting with the object, for example when we’re getting a value, or setting a value.

// as majority of things in JavaScript are objects they can be passed as a reference there is a higher chance that they can be mutated unknowingly creating bugs.

// instead of interacting with the target object directly, we’ll interact with the Proxy object.

// Instead of interacting with this object directly, we want to interact with a proxy object. In JavaScript, we can easily create a new proxy by creating a new instance of Proxy. First arguments is object and second is the handlers
// JavaScript provides a built-in object called Reflect, which makes it easier for us to manipulate the target object when working with proxies.

const obj = {
  name: "Akarsh",
  age: 28,
  gender: "Male",
};
const proxyObj = new Proxy(obj, {
  get(obj, prop) {
    if (prop === "gender") {
      console.log("Gender is a write only property be exposed!");
    } else {
      return Reflect.get(obj, prop); // we can also use obj[prop]
    }
  },
  set(obj, prop, value) {
    if (prop === "age") {
      if (value < 18 || value > 50) {
        console.log("Age value should be between 18 and 50");
      } else {
        Reflect.set(obj, prop, value); // obj[prop] = value
      }
    } else {
      Reflect.set(obj, prop, value);
    }
  },
});

console.log(proxyObj.gender);
// "Gender is a write only property be exposed!"
// undefined

proxyObj.age = 17;
// "Age value should be between 18 and 50"

console.log(proxyObj.age);
// 28
