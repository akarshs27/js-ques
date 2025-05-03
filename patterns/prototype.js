The Prototype Pattern is a creational design pattern where new objects are created by copying (cloning) an existing object, known as the prototype, rather than instantiating a class directly.

"The prototype pattern in JavaScript allows objects to inherit behavior from other objects. JavaScript is prototype-based by nature, so it's built into the language via Object.create() and the [[Prototype]] chain. This pattern helps reuse object methods and properties efficiently."

const animal = {
  speak() {
    console.log(`${this.name} makes a noise.`);
  },
};

const dog = Object.create(animal); // 🔁 clone prototype
dog.name = "Buddy";
dog.speak(); // Buddy makes a noise.

"In JavaScript, the prototype pattern is often implemented using Object.create(), which creates a new object with a given prototype. It allows for inheritance without classes and is especially useful when I want to define a shared structure or behavior across multiple object instances without using ES6 class syntax."