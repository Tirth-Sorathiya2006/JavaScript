//====> class

// class User{
//     constructor(userName, email, password){      //Constructor is a function which is run when object is created.
//         this.userName = userName;
//         this.email = email;
//         this.password = password;
//     }

//     encryptPassword(){          //Methods no need to key word function in class
//         return (`${this.password}abc`);
//     }

//     capUserName(userName){
//         return ((`${this.userName}`).toUpperCase());
//     }
// }

// const user1 = new User('chai', 'chai@google.com', '123');

// console.log(user1);
// console.log(user1.encryptPassword());
// console.log(user1.capUserName());

//====> The second way to do above thing without using class
function User(userName, email, password) {
    this.userName = userName;
    this.email = email;
    this.password = password;
}

//By using the function, object name .prototype . variable name or function name is use to inject any variable or function as a member of the prototype of perticular function or object. 
User.prototype.encryptPassword = function (password) {
    return (`${this.password}abc`);
}

User.prototype.capUserName = function (userName) {
    return ((`${this.userName}`).toUpperCase());
}

const user2 = new User('tea', 'tea@google.com', '123');
console.log(user2);
console.log(user2.encryptPassword());
console.log(user2.capUserName());