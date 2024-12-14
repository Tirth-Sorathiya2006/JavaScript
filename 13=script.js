//Objects in JavaScript

// If the object is created by the construstor then it is called as a singleton objecct.
// Singleton object : It is discussed later.
// Object.create 

// If an object is created by litrals then it is not a singleton object.

// Object literals :

const user = {
    userName: "Tirth Sorathiya",
    userAge: 18,
    userEmail: "tirth@google.com",
    isLoggedIn: false,
    "userHobby": "coading"
};

//Here we have two typs to access the data from the object

console.log(user.userName); //It gives the "Tirth Sorathiya" as a answer
console.log(user["userName"]); //It gives the "Tirth Sorathiya" as a answer

//Here we can not access the value of "userHobby" by using the dot(.) operator. It gives us error.
//But we can access the values at the "userHobby" by using the [] operator.
console.log(user["userHobby"]); //Most preferd waay to access the value from object is by using ["keyName"].