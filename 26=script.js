//Control Structures

//==> if :
// if(condition){
//     code
// }

//==>if...else :
// if(condition){
//     if block statments
// } else{
//     else block statments
// }

//==>if...else if ladder :
// if(condition){
//     if block statments
// } else if(condition){
//     else if block statments
// } else if(condition){
//     else if block statments
// } else{
//     else block statment
// }

// ==> switch(expression){
//     case value1 : code break;
//     case value2 : code break;
//     case value3 : code break;
//     case value4 : code break;
//     default : code;
// }

// ==> turnary operator
// (condition) ? expression1 : expression2;

//Falsy values : null, 0, -0, false, undefined, BigInt 0n, "", NaN.
//other valuse insted of falsy values are the truthy values.

// ==> Nullish Coalescing Operator (??) use for null and undefined

let val1;
val1 = 5 ?? 10;
console.log(val1);

val1 = null ?? 10;
console.log(val1);

val1 = undefined ?? 15;
console.log(val1);

val1 = undefined ?? null;
console.log(val1);

val1 = null ?? undefined;
console.log(val1);

val1 = null ?? "";
console.log(val1);

//?? first avoid the null and undefined value and provide the first not null or not undefined value