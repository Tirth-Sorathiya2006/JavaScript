"use strict";

//Comparision operators
// ==, >=, <=, <, >, !=

console.log(null > 0); //false
console.log(null >= 0); //true
console.log(null < 0); //false
console.log(null == 0); //Remember that null == 0 is give us false.

console.log("2" > 1);//true
console.log(2 < "1");//false
console.log("hello" == "hi");//false
console.log(NaN == NaN);//Remember that the NaN == NaN is false.

console.log(true > 5);//false
console.log(true < 5);//true
console.log(true == "Hi");//false because here 1 == NaN is become during the implisit type conversion.
console.log("hello" == "hello");//true because if string are exactly equal then we get the true answer.
console.log(undefined == undefined); //true remember this.

// === operator is use for strict check it is check value as well as the data type.

console.log("2" === 2);//Give false because data types are different.

//Comparasion operators provids the answer in true or false