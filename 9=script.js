//Number and Maths in JavaSccript

const score = 400;
const balance = new Number(10000); //provide object form

//1> toString()

//It is use to convert a number into the string
console.log(score.toString());
console.log(typeof score);
console.log(typeof score.toString());
console.log(balance.toString());
console.log(typeof balance);
console.log(typeof balance.toString());

//Here toString() method is not change the actual value of the variable.

//2> toFixed(number)

//It is use to provide tthe precision after the decimal point
console.log(score.toFixed(4)); //It give us output as a 400.0000
console.log(score.toFixed()); //It give us output as a 400
console.log(score.toFixed(4.2)); //It is also prints the 400.0000 because it is ignor the decimal point which is passed it is consider the only integer which is passed
console.log(score.toFixed(0.2)); //400

//3> toPrecision(number)

//It is roundoff the value to given precision and it is provide answeer in form of String.
const otherNumber = 123.500;

console.log(otherNumber.toPrecision(3)); //It is give first numbers as output by pricising them and after first numbers if the number is 5 or grater then five then it round of number to their ceil value.
console.log(typeof otherNumber.toPrecision(3)); //Type of the number after using the toPrecision() method is become String.

// 4> toLocalString()

//It is provide the number as a string with commas(,)
const amount = 1000000;

console.log(amount.toLocaleString());

// Math library 

//1> Math.E ==> 2.718
//2> Math.PI ==> 3.14
//3> Math.LN2 ==> 0.693
//4> Math.LN10 ==> 2.3025
//5> Math.abs(number) ==> Example : Math.abs(-5) ==> 5
//6> Math.ceil(number) ==> Expample : Math.ceil(7.1) ==> 8
//7> Math.floor(number) ==> Example : Math.floor(7.9) ==> 7
//8> Math.round(number) ==> Example 1 : Math.round(1.5) ==> 2, Example 2 : Math.round(1.1), Example 3 : Math.round(1.7) ==> 2
//9> Math.sqrt(number) ==> Example : Math.sqrt(25) ==> 5
//10> Math.min(num1, num2, num3......) ==> Give minimum number from list of the number.
//11> Math.max(num1, num2, num3......) ==> Give maximum number from list of the number.
//12> Math.pow(base, power) ==> Example : Math.pow(8, 2) ==> 64

console.log(Math.min(1, 0, 2, 8, -1, 70));
console.log(Math.max(1, 0, 2, 8, -1, 70));

//13> Math.random()

//It generates number between 0 (inclusive) and 1 (exclusive). This means the value returned is always greater than or equal to 0 but less than 1.

console.log(Math.random());

//I want to values between 1 to 6 (both 1 & 6 are inclusive)

console.log(Math.floor((Math.random() * 6) + 1)); //NOTE : Very important.

//I want the random values between the 10 & 20

//NOTE remember below formula : 
// Math.floor((Math.random() * (max - min + 1)) + min);

const min = 10;
const max = 20;

console.log(Math.floor((Math.random() * (max - min + 1)) + min));