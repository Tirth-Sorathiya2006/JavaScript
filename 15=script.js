//Objects

const userSymbol = Symbol("user1");

const user = {
    userName: "Tirth Sorathiya",
    userAge: 18,
    userEmail: "tirth@google.com",
    [userSymbol]: "@$"
};

//changing the value from the object

user["userName"] = "Tirth";

console.log(user); //In object the value at userName is changed to the "Tirth".

//If we want that no one can change the value at the object then we can use Object.freeze(objectName).

Object.freeze(user);

user["userAge"] = 25;

console.log(user); //We can not get any change in the object user because we are using the Object.freeze(objectName) method.