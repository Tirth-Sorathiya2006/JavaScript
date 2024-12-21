//Closers and lexixal scoping

// lexical scoping : Definition: Lexical scoping means that a variable's scope is determined by its position in the source code. A function can access variables defined in its own scope and in the scope where it was declared.

// Example:

function outer() {
  let outerVar = "I am from outer scope";
  
  function inner() {
    console.log(outerVar); // Accesses outerVar from outer scope
  }

  inner();
}

outer();

// Output: I am from outer scope

// In this example, the inner function can access the outerVar because it is defined within the scope of the outer function, where outerVar exists. This is lexical scoping

// A closure is a function that "remembers" variables from the scope where it was created, even if it is executed outside that scope.

// Example in JavaScript:
// javascript
// Copy code
// function createCounter() {
//   let count = 0; // This variable is remembered by the inner function

//   return function() {
//     count++; // The inner function has access to 'count'
//     return count;
//   };
// }

const counter = createCounter(); // Create a counter
console.log(counter()); // Output: 1
console.log(counter()); // Output: 2

// Here, the inner function (returned function) remembers the count variable, forming a closure.