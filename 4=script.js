"use strict";

let value = 5;
let negativeValue = -(value);

console.log("Negative value is :",negativeValue);

//Arithmetic operators ==> +, -, *, /, **, %

let str1 = "Hello";
let str2 = " Tirth";

let combinedStr = str1 + str2; 

//In case of string the plus sign is use to concattinate the two or more strings.
//For the -, *, /, %, ** operators between the strings provide the NaN answer.

console.log(combinedStr);

console.log("1" + 2);
console.log(1 + "2");
console.log("1" + 2 + 2);
console.log(1 + 2 + "2");
console.log(1 + 2 + "3" + 2 + 1);

console.log(true); //We get output as a true.
console.log(+true); //We get the output as a 1.
console.log(+"");
console.log(+undefined); //We get the answer as a NaN.

//In short if we are printing the value with plus like +null, +"", +0 we get the answer as a 0.
//But in case of +undefined we get the answer as a NaN.

let num1, num2, num3;

num1 = num2 = num3 = 2 + 3; //This way also we can assign the values to multiple variables.

console.log(num1,num2,num2);

//NOTE : Please see about the prifix and postfix operator (increment/decrement) from the mdn.

console.log(1 + "3");
console.log(12/"tirth");
console.log(true/12);
console.log(12/"6");
console.log("8"/"2");
console.log("8"%2);
console.log(true + "hi");
console.log(true + 1 + "hi");
console.log(12-"6");
console.log(12 + 8 -"Tirth");

//Note : Also learn about the type conversion(explisit) and coarcion(implicit).