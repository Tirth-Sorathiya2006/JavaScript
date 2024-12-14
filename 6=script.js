//In this file the summary of the data types is mentiond

//There are two typs of the data type.This catagorization is based on the how data is stored and accsessed from memory.

//1.Primitive and 2.Non-Primitive

//====> 1.Primitive data typs :-

//1.Number
const num = 5;

//2.null
let roomTemp = null;

//3.boolean
let isLoggedIn = true;

//4.BigInt
const bigNum = 3754461851557165776554n;

console.log(typeof bigNum);
console.log(bigNum);

//In case of BigInt if we need to store huge number in their normal form insted of representing in power of 10(e) then BigInt is use.

//5.Symbol
const id = Symbol("123");
const otherId = Symbol("123");

console.log(id === otherId);

//6.String
const myEmail = "tirth@google.com";

//7.undefined
let otherEmail = undefined;
//OR
let anotherEmail;

//====> 2.Non-Primitive data typs :-
//Non-primitive data typs are also called as a Refrence typs.

//1.Objects
const aboutUser = {
    userName: "Tirth",
    userAge: 18,
    userEmail: "tirth@google.com"
};
console.log(typeof aboutUser);//Type of object is object.

//2.Arrays
const heros = ["Shaktiman", "doga", "Jetha Lal"];
console.log(typeof heros);//Type of arrays is object.

//3.Functions
function add(num1, num2) {
    return (num1 + num2);
}

const total = add(5, 7);
console.log(total);
console.log(add);//Type of function is popularly calld as a function object.

//JavaScript is a dynamicaly typed language because
// 1. You not need to define the type of variable like umber, string, etc during the declaration of the variable
// 2.JavaScript automatically determines the type based on the value assigned.Also we can change the data type while program is running.

/* The basic difference between **primitive** and **non-primitive** data types in JavaScript is:

1. **Primitive Data Types**:  
   - These are simple, immutable values.  
   - They include `number`, `string`, `boolean`, `undefined`, `null`, `symbol`, and `bigint`.  
   - They are passed by value, meaning a copy of the value is created when assigned to a new variable.

2. **Non-Primitive (Reference) Data Types**:  
   - These are more complex, mutable values, like objects and arrays.  
   - They include `object`, `array`, `function`, etc.  
   - They are passed by reference, meaning the new variable refers to the same object or array in memory, not a copy of it.

In short: **Primitive** types are simple and immutable, **Non-primitive** types are complex and mutable. */