"use strict"; //If we are using "use strict"; then our code of JavaScript is considerd acording to the new js.

//alert("Hello"); //If we are using the node js then we can not use the alert(); but we can use it into the browser.

const userName = "Tirth Sorathiya";
const age = 18;
let isLoggedIn = true;

console.log(userName, "type of the userName is", typeof(userName));
console.log(typeof userName); //We can also write the syntax of typeof like this.
console.log(age, "type of the age is", typeof(age));
console.log(isLoggedIn, "type of the isLoggedIn is", typeof(isLoggedIn));

//typeof(variableName or value like number,string,bigint,null,symbol,undefined,boolean); //It is represent the type of the perticular value or variable.
//typeof variableName or value like number,string,bigint,null,symbol,undefined,boolean; //This is also the sytax of typeof. 

//number ==> It`s range is arround 2^53 in JavaScript.
//BigInt ==> It is use to store the big number then the number data type.
//String ==> It is represented by "" or '' or ``
//Symbol ==> It is use to represent a some type of symbol.
//boolean ==> It is use to represent true or false value.
//null ==> It is a standalone value.
//undefined ==> It is represent to unassigned value.

console.log(typeof null);

//The type of null is object