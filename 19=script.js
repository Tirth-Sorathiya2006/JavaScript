//Function
//We can pass infinite number of arguments
function calculateCartPrice(...num1) {  //By using the reast operater we can pass unlimited arguments.
    return num1;
}

const result = calculateCartPrice(200, 400, 500);
console.log(result); //Rest operater provide the answer in form of array.

//By using rest operater we can pass the values in huge numbers.

function myPayment(num1, num2, ...num) {
    return num;
}

console.log(myPayment(50, 60, 70)); //In this case the 50 and 60 are assign to the num1 and num2 and rest arguments(here 70) is assign to the rest parameters.

const user = {
    userName: "Tirth Sorathiya",
    userAge: 18
};

function handleObject(anyObject) {
    console.log(`User Name : ${anyObject.userName}\nUser Age : ${anyObject.userAge}`);
}

handleObject(user); //Pass the object
handleObject({              //pass the object
    userName: "Sam",
    userAge: 25
});

const myArray = [1, 2, 4, 16, 70];

function returnLastElement(anyArray) {
    return (anyArray[(anyArray.length)-1]);
};

const result2 = returnLastElement(myArray);
console.log(`Last element of myArray : ${result2}`);
const result3 = returnLastElement([1, 2, 65]);
console.log(`Last element of passed array : ${result3}`);