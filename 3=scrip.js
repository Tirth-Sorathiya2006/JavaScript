let score = undefined;
console.log(typeof score);
console.log(score);


let scoreInNumber = Number(score);
console.log(typeof scoreInNumber);
console.log(scoreInNumber);

//If we are using Number(variableName); to convert the string into the number then
//"33" ==> 33
//"33abc" ==> NaN
//"Tirth" ==> NaN
//undefined ==> NaN
//null ==> 0
//true ==> 1
//false ==> 0

let isLoggedIn = -25;

let booleanIsLoggedIn = Boolean(isLoggedIn);
console.log(booleanIsLoggedIn);

//Here we are using the Boolen(variableName); to conver other type into the boolean then
//In case of 0, null, ""(Empty string), undefined we get the answer as a false.

let someNumber;

let stringOfSomeNumber = String(someNumber);
console.log(stringOfSomeNumber);
console.log(typeof stringOfSomeNumber);

//It is convert all the values in the string.