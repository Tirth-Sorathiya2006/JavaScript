// Loops in JavaScript

// 1. 
// while (condition) {

// }

// 2.
// do {

// } while (condition);

// 3.
// for (let index = 0; index < array.length; index++) {
//     const element = array[index];

// }

// 4. for of loop is use for the array
// for (const element of array) {

// }

const arr = [1, 2, 3, 4, 70]

for (const element of arr) {
    console.log(element);

}

//5. for each loop
// array.forEach(element => {

// });

arr.forEach(element => {
    console.log(element);
})

//6. for in loop is use for the objects
// for (const key in object) {
//     
// }

const user = {
    userName: "Tirth",
    userAge: 18
}

for (const key in user) {
    console.log(`${key} : ${user[key]}`);
}

for (const index in arr) {
    console.log(`${index} : ${arr[index]}`);
}

//7. forEach

const arr2 = [1, 2, 4, 16, 70]
const arr3 = ["T", "i", "r", "t", "h"]

arr2.forEach(function (value, index) {
    console.log(`${index} : ${value}`);

})

arr3.forEach((value, index) => {
    console.log(`${index} : ${value}`);

})

const myCoding = [{ userName: "Tirth" }, { userAge: 18 }]

myCoding.forEach((item) => {
    for (const key in item) {
        console.log(`${key} : ${item[key]}`);
    }
})