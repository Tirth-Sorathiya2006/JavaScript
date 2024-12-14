//This file is containing about the memory in JavaScript

// 1.Stack memory(Used by the primitive data types)
// 2.Heap memory(Used by the non-primitive data typs)

let myYoutubeName = "Tirth Sorathiya";

//here myYoutubeName is the primitive data type so it is stord in the stack.

let anotherName = myYoutubeName; //The copy of the value of the myYoutubeName is assign to the anotherName. 

console.log(anotherName);    // We get output as a "Tirth Sorathiya".
console.log(myYoutubeName);  // We get the output as a "Tirth Sorathiya".

anotherName = "Tirth";

console.log(anotherName);   // We get the value as a "Tirth".
console.log(myYoutubeName); // We get the value as a "Tirth Sorathiya".

//So basically in above example we can say that the myYoutubename and the anotherName is containing the diffrent memory location in stack 

let userOne = {
    userName: "Tirth Sorathiya",
    userAge: 18,
    userEmail: "tirth@google.com"
};

let userTwo = userOne;

console.log(userOne);
console.log(userTwo);

userTwo.userEmail = "tirthsorathiya@google.com";
console.log(userOne);
console.log(userTwo);

//In both the objects userOne and userTwo the value of email is changed by changing userTwo's userEmail.
//So basically the object is created in heap memory but the object name userOne is declared at the stack and userOne is pointing out the object in heap when we are creating the userTwo then it is also declared in stack and when the value assign in userTwo as a userOne then it is not make the copy of the object but it is also pointing out the same memory of the heap when actully the userOne is pointing.So if we change any one value of object then it is reflect to the both userOne and userTwo objects.  