//String

const userName = "Tirth";
let userAge = 18;

console.log("My name is " + userName + ". I am " + userAge + " years old.");
console.log("My name is", userName, ". I am", userAge, "years old.");

//Above two ways to print somthing with String is not recommanded.
//The recommanded method to write a String is by using a Back Ticks (`.....`).

console.log(`My name is ${userName}. I am ${userAge} years old.`);

// The use of `${}` in the code is called **template literals** or **template strings**. It allows embedding expressions inside a string in JavaScript.

//Here is another way to declare the String in JavaScript.
const gameName = new String("The Black Myth Wucong."); //Here new key word is provide the object form of string.
console.log(gameName);
console.log(typeof gameName);

console.log(gameName[0]);

//Some properties of string

//1> length
console.log(gameName.length); //Use to find the length of the String. It is includs the space charecter also in counting.

//2> toLowerCase()
console.log(gameName.toLocaleLowerCase()); //Use to convert a String into the lower case.

//3> toUpperCase()
console.log(gameName.toUpperCase()); //Use to convert a String into the upper case.

//4> trim()
const str = "    Tirth is good boy.       ";
console.log(str.trim()); //It is remove the spaces from start and end of the string. Note that the trim() is not remove the space between the words of the string.

//5> trimStart()
console.log(str.trimStart()); //It is remove only the starting spaces in the string.

//6> trimEnd()
console.log(str.trimEnd()); //It is remove only the spaces at the end of the string.

//7> indexOf()

console.log(str.indexOf("i")); //It is use to find the character position in string.
console.log(str.indexOf("Tirth")); //If we provide the whole word or part of a word then it is provide the index of the first character of the passed word.
console.log(str.indexOf("iz")); //If we are providing the word or character which is not present in the string then it is return -1 as a answer.

//8> charAt()

console.log(str.charAt(4)); //It is use to find out that the at a perticular index which charecter is present in the string
console.log(str.charAt(55)); //It is provide nothing.
console.log(str.charAt(-1)); //It is provide nothing.

//9> substring(startingIndex(included), endingIndex(excluded))

const profName = "Gutam Varde";
console.log(profName.substring()); //We are not passing any thing in substring( , ) method then we get whole string at it is.
console.log(profName.substring(0, 4)); //Here we get the answer as a "Guta" because it is consider starting index as a 0 but ending index 4 is excluded mence it is neglect 4 and give string from passed staring index to 3 index.
console.log(profName.substring(1, 8)); //We get answer as a "utam va"

//10> slice(startingIndex(included), endingIndex(excluded))

//It is similar to the substring( , ) but it can allow the negative value in it`s starting index in case of substring( , ) if we are provide the strting index as a negetive then it is ignore the negative value and starts from index 0.
//slice also exclude the ending index value.

console.log(profName.slice(0, 4));
console.log(profName.slice(-8, 4));

//11> splice( , ) //NOTE :- splice() method is not use for strings but it is use for an array.So it is cover in part of array.
// In JavaScript, the splice() method works only with arrays and not directly with strings because strings are immutable. However, you can use splice() indirectly with strings by first converting the string into an array of characters (using split()), then applying splice() to modify the array, and finally converting it back to a string (using join()).

// Example: Using splice() with a String
// Let's say you have a string and you want to modify it using splice(). Here's how you can do it:

let strOfHello = "hello world";
let arr = strOfHello.split(""); // Convert string to array: ['h', 'e', 'l', 'l', 'o', ' ', 'w', 'o', 'r', 'l', 'd']

// Using splice to replace "world" with "JavaScript"
arr.splice(6, 5, "J", "a", "v", "a", "S", "c", "r", "i", "p", "t");

let newStr = arr.join(""); // Convert array back to string
console.log(newStr); // Output: "hello JavaScript"


//12> replace("string or words or charecter which you need to replace", "new string or word or charecter")

const otherString = "HI I am Tirth.";
console.log(otherString.replace("HI", "Hi")); //It is change "HI" with the "Hi".

//If it is not find any string which we are providing in replace then it is return orignal string at it is.

//13> includes("String or word or character")

//It is return true if provied string or word or charecter is present in the string.Otherwise it is provide false.

const anotherString = "Tirth Sorathiya";
console.log(anotherString.includes("t")); //true
console.log(anotherString.includes("Tirth")); //true
console.log(anotherString.includes("Tir")); //true
console.log(anotherString.includes("z")); //false
console.log(anotherString.includes("Tirz")); //false

//14> split(separator) OR split(separator, limit)

//The split() method in JavaScript is used to divide a string into an array of smaller substrings based on a separator you provide. It's super handy for breaking a string into parts!

let fruits = "apple,banana,grape";
let result1 = fruits.split(",", 2); // Split at commas, but limit to 2 parts
console.log(result1); // Output: ["apple", "banana"]

let helloWord = "hello";
let result2 = helloWord.split(""); // Split into individual characters
console.log(result2); // Output: ["h", "e", "l", "l", "o"]

let helloWord2 = "hello world";
let result3 = helloWord2.split(); // No split, returns the entire string in an array
console.log(result3); // Output: ["hello world"]

//In case of String not any function can change the orignal string.