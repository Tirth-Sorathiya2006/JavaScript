//Maps in js

const myNums = [1, 2, 3, 4, 5, 6 , 7, 8, 9, 10, 70];

const result1 = myNums.map( (item) => {
    return (item + 10);
})

console.log(result1); //It provide the array in which each elements are incremented by 10.

//Chaining 

const result2 = myNums.map((item) => item * 10).map((item) => item + 1).filter((item) => item > 40);

console.log(result2);