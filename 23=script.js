//Arrow functions

const user = {
    userName: "Tirth Sorathiya",
    userAge: 18,
    welcomeMessage: function () {
        console.log(`${this.userName}, welcome to website`);
        console.log(this);

    }

};

//If we are reffering the current context then we are using the this key word.
//this key word is reffering the current context.
//In above example our cuurent context is object curli braces.

user.welcomeMessage();
user.userName = "Sam";
user.welcomeMessage();

console.log(this);//It gives the empty object.


function chai() {
    let userName = "Tirth";
    console.log(this);
    console.log(this.userName); //It give us undefined.

}
chai();

// ==> Function defination :
function subtract(num1, num2) {
    return num1 - num2;
}

// ==> Function expression :
const add = function(num1, num2){
    return num1 + num2;
};

// Arrow function :
const multiplay = (num1, num2) => {
    return num1 * num2;
}

console.log(multiplay(2, 35));

//Implisit return by arrow function

const multThree = (num1, num2, num3) => (num1 * num2 * num3);
console.log(multThree(1, 2, 35));

// In the casee of the arrow function :
//If the syntax is () => {} then in the case of the curly braces we need to use the return key word.
//In the case of the syntax () => () we not need to use the return key word. It is called as a implicit return arrow function.