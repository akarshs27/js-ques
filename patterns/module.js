// Module Pattern
// As your application and codebase grow, it becomes increasingly important to keep your code maintainable and separated. The module pattern allows you to split up your code into smaller, reusable pieces.

// With the module pattern, we can encapsulate parts of our code that should not be publicly exposed. This prevents accidental name collision and global scope pollution, which makes working with multiple dependencies and namespaces less risky. In order to be able to use ES2015 modules in all JavaScript runtimes, a transpiler such as Babel is needed.

// "The Module Pattern in JavaScript uses closures to create private variables and expose public methods. It helps prevent polluting the global scope and keeps certain variables or functions hidden from the outside world.";

function createUserModule() {
  let username = "guest";

  function login(name) {
    username = name;
  }

  function getUser() {
    return username;
  }

  return { login, getUser };
}

const user = createUserModule();
user.login("akarsh");
console.log(user.getUser()); // akarsh
