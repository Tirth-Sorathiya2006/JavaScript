// Filter, Map, Reduce

// forEach loop is provide the return value as a undefined in all the cases.

//filter
const myNums = [1, 2, 3, 4, 5, 6 , 7, 8, 9, 10, 70];

const result1 = myNums.reduce((value, index) => {
    console.log(`${index} : ${value}`); 
});

console.log(result1); //forEach is returning undefined each case.


const result2 = myNums.filter((value, index) => {
    console.log(`${index} : ${value}`); //Use of filter as a forEach method.
});

console.log(result2); //It is return an empty array.

const result3 = myNums.filter((value, index) => {
   if(value > 4){
    return value;
   }
});

console.log(result3); //It returns the array which consisting the element grater than 4.