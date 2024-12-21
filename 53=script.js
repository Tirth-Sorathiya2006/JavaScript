//Objects in JavaScript

//We can change the value of the Math.PI or not???

//Ans ===> No
// console.log(Math.PI);
// Math.PI = 5;
// console.log(Math.PI);

// const descriptor = Object.getOwnPropertyDescriptor(Math, 'PI');
// console.log(descriptor); //Here writable property is hardcoded is false. So we can not change the value of PI

const chai = {
    name: 'ginger chai',
    price: 250,
    isAvailable: true
}

console.log(Object.getOwnPropertyDescriptor(chai, 'isAvailable'));

Object.defineProperty(chai, 'isAvailable', {
    value: true, 
    writable: false, 
});

chai.isAvailable = 'false';

console.log(chai); //Here writable is false so we can not change the  value of the isAvailable.
