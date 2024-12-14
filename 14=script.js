//How to add the Symbol as a key in the object

const mySym = Symbol("key1");

const user = {
    userName: "Tirth Sorathiya",
    userAge: 18,
    [mySym]: "#"
};

console.log(user[mySym]);