//Arrays in JavaScript

const myArray = [0, 1, 2, 3, 4, 5, true, "Tirth", null, undefined];
console.log(typeof myArray);

//Arrays : Arrays in JavaScript is a non-primitive data types which are use to store the collection of data typs.
//Arrays are resizable in JavaScript.Zero based indexing.
//Arrays provide the shallow copy while we are coping it.

const fruits = ["Apple", "Banana", "Mango"];
const hearos = new Array("Saktiman", "Batman", "Spiderman");

console.log(fruits[0]); //Apple
console.log(fruits[1]); //Banana
console.log(fruits[20]); //undefined

//Array Property and Methods :

//1> length
console.log(fruits.length); //provide the length of arrary 

//2> push(element)

//It is use to push the element at back in array
const anotherArray = [1, 50, 60];

anotherArray.push(65);
console.log(anotherArray);

//3> pop()

//It is use to remove the elements from array at back
anotherArray.pop();
console.log(anotherArray);

//4> unshift(element)

//It is add an element at the begning of the array
anotherArray.unshift(-8);
console.log(anotherArray);

//5> shift()

//It is remove an element from starting of the array
anotherArray.shift();
console.log(anotherArray);

//6> includes(element which you want to find in Array)

//It is provide true if element is exist in array otherwise it is provide false.
console.log(anotherArray.includes(60));
console.log(anotherArray.includes("HI"));

//7> indexOf(element which index you want to find in array)

console.log(anotherArray.indexOf(60)); //2
console.log(anotherArray.indexOf(0));  //-1 

//If indexOf() not found any element in the array then it is provids the -1 as a answer.

//8> slice() , splice()

const myArray0 = [0, 1, 2, 3, 4];
const myNewArray1 = myArray0.slice(1, 3); //slice(startingIndex(inclusive), endingIndex(exclusive))
console.log(myNewArray1);
console.log(myArray0); //slice is not change an orignal array.

const myNewArray2 = myArray0.splice(1,3);
console.log(myNewArray2); //splice(startingIndex(inclusive), endingIndex(inclusive))
console.log(myArray0); //splice() changes orignal array