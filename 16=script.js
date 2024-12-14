//Adding the values in the object

const user = {
    userName: "Tirth Sorathiya",
    userAge: 18,
    userEmail: "tirth@google.com"
};

user["userHobby"] = "Codding"; //This way we can add the new key and value pair in the object.

console.log(user); 

//Adding the anonymous function in object.

user["greeting"] = function(){
    console.log(`Hello User ${user["userName"]}!!!`);
};

console.log(user);
console.log(user.greeting()); 