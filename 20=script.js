//Scops in JavaScript

// var c = 300;

if(true){
    let a = 10;     //After the if block the a and b is not used it give an error but we can access the c after the block of then the   if blocck
    const b = 20;
    // var c = 30;
}

// console.log(a);
// console.log(b);
// console.log(c);

let a = 300;
{
    let a = 200;
    console.log(a);
    
}
console.log(a);