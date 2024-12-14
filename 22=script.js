//Hoisting

//Hoisting : **Hoisting** in JavaScript is assumed that variable and function declarations are moved to the top of their scope before the code runs. This allows you to use variables or call functions before they are written in the code, but only the declarations are moved, not their values or definitions.

console.log(a); //We get the answer as a undefined. incase of let and const we get an error.
var a = 5;


//Function defination :

function addOne(num){
    return num + 1;
}

//function expression :

const addTwo = function(num){
    return num + 2;
}

console.log(addOne(5));
console.log(addTwo(5));

console.log(two()); // We can call the function above the function defination. we get answer as a 2.But we can not call the function expressin this way.In case of the function expresson we can access the output when we use var insted of the const and let.
function two(){
    return 2;
}