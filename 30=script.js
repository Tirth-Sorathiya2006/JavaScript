// Reduce

// arr.reduce( (accumulator, currentValue) => accumulator + currentValue, initialValue);

const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 70];
const initialValue = 0;
const sumOfAllElement = myNums.reduce((accumulator, currentValue) => {
    return accumulator + currentValue
}, initialValue);

console.log(sumOfAllElement);

const myNums2 = [1, 2, 4, 5, 70];
const result1 = myNums2.reduce(function(acc, currVal){
    return (acc + currVal);
},0); //Here 0 is a initialValue