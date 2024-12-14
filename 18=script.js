//Functions

//Function defination : 
function sayMyName (){
    console.log("Tirth");
}

sayMyName; //Function rafference
sayMyName(); //Function call

function add(num1, num2){           // In this line num1, num2 are parameterdd of the function.
    console.log(num1 + num2);
}

add(); //It give us NaN as a answer because we are not passing the any parameters.
add(2, 5); //It give 7  //Here the 2 and 5 are the arguments.
add(3, "4"); //It give us answer as a 34. //Similarly here 3 and "4" are the arguments.
add(3, null); //It give us answer as a 3. //Similarly here 3 and null are the arguments.

function mult(num1, num2){
    return(num1 * num2);
}

const result = mult(2, 35);
console.log(`Result : ${result}`);

function loginUserMassage(userName){
    if(userName === undefined){
        return(`Please enter the User Name as a parameter!!!`);
    }
    return(`${userName} just logged in.`);
}

const result2 = loginUserMassage("Tirth");
console.log(result2);

const result3 = loginUserMassage();
console.log(result3);

//Default valus for parameters

function minus(num1 = 0, num2 = 0){
    return (num1 - num2);
}

const result4 = minus();
console.log(result4); //We get as a answer 0.
const result5 = minus(72, 2);
console.log(result5); //We get as a answer 70.