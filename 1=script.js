const accountId = 5;
console.log(accountId);

//const is use to declare a constant in JavaScript.
//we can declare only ones the const variable.(We can not reassign the const).
//when we declare a constant at that time we need to provid it`s value.
//it is block scoped.
//We can not redeclare the same const variable.

let accountEmail = "tirth@google.com";
accountEmail = "sorathiya@google.com";
console.log(accountEmail);

//let is block scoped.
//It is use for the declaring a variable.
//we can reassign a let variable.
//we cannot redeclare the same let variable.

var accountPassoword = "Tirth@2006";
var accountPassoword = "T";
accountPassoword = "Sorathiya";
console.log(accountPassoword);

//var is function scoped.
//It is use for the declaring a variable.
//we can reassign a var variable.
//we can redeclare the same var variable.

accountCity = "Gujarat";
console.log(accountCity);

//We can also declare a variable without using const, let or var key word but it is not prefrable.

console.table([accountId, accountEmail, accountPassoword, accountCity]);