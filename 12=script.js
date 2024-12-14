//Array part 2 

const marvelHeroes = ["Ironman", "Thor", "Spiderman"];
const dcHeroes = ["Superman", "Batman", "Flash"];

marvelHeroes.push(dcHeroes);
console.log(marvelHeroes); //The array of dcHeroes is pushed as a single element in array.
console.log(marvelHeroes[3][0]); //Accessing the "Superman" from heroes array.

//NOTE : push() changes orignal array.


const alphabates = ["A", "B", "C"];
const otherAlphabates = ["D", "E"];
const allHeroes = alphabates.concat(otherAlphabates);
console.log(allHeroes); //The concat method is easyly join the two arrays.

//NOTE : concat() not changes orignal array but provide the new array.

//spread operator[...arrayName].
const fruits = ["Apple", "Banana", "Mengo"];
const otherFruits = ["Dates", "Orange", "Pitch"];

const allFruits = [...fruits, ...otherFruits];

console.log(allFruits);

//spread operator is spread each elements of the array. We can pass multiple values with spread operator in array.
//spread operator is not change orignal array.

//Multi dimentional array 

const numbers = [1, 2, 3, [4, 5, [6, 7]]];

const flatArray = numbers.flat(Infinity); //flat is use to flat the array.It is not change the orignal array.
//By default it is flats the 1 defth in array.
//We can pass the numbers which is represents depth.
//We can also provide the Infinity depth to flat all over the array.
console.log(flatArray);
console.log(numbers);

//Array.isArray() ,ethod checks the passed value is array or not.
console.log(Array.isArray("Tirth"));

//Convert to array
//we can convert any type of data to array by using Array.from() method.
console.log(Array.from("Tirth"));
console.log(Array.from({
    userName: "Tirth",
    age: 18
})); //It gives empty array because in case of object we need to pass the what value we need to convert(key or value or both).

//We can convert the multipule variables array by using Array.of(variable1, variable2, variable3......) method
let score1 = 100;
let score2 = 200;
let score3 = 300;

let score = Array.of(score1, score2, score3);
console.log(score);