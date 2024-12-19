//OOPs in JavaScript

//JavaScript is a prototype based language.class are just the syntectic suger code for JavaScript.

//Object : It is a collection of properties and methods.

//Why we use OOPs?
//It is provid the proper structure to the code. To reduce the meshup of code.

//Constructor function
//Prototypes
//classes
//Instances(new, this)

//4 pillers of OOPs
//1. Abstraction ===> hiding the details or hiding how programm actuly works
//2. Encaptulation ===> hiding some data which we want to not to see the user
//3.Inheritance ===> Inherit the properties of one clss to another
//4. Polymorphism ===> one method has ability to do more tasks.

//Object litral :
const user = {
    userName: 'Tirth Sorathiya',
    userAge: 18,
    isSigndIn: true,
    getUserDetails: function(){
        console.log('User details fetch successfuly!!!');
    }
}

console.log(user["userName"]);
console.log(user.getUserDetails());


//Constructor function
//Constructor function is give us the new instance each time when it is run.
//new key word is also the constructor function

function User(userName, loginCount, isLoggedIn){
    this.userName = userName;
    this.loginCount = loginCount;
    this.isLoggedIn = isLoggedIn;
    this.greeting = () => {
        console.log(`Welcome ${this.userName}`);
    }
}

const user1 = new User('Tirth', 12, true);
console.log(user1);

const user2 = new User('Sam', 18, true);
console.log(user2);