//====> Inheritance in classes

class User{
    constructor(userName){
        this.userName = userName;
    }

    logMe(){
        console.log(`User Name : ${this.userName}`);
    }
}

class Teacher extends User{     //extands key word is use to Inherit the super class property to the sub class.Here "superclass" is "User" and "subclass" is "Teacher".
    constructor(userName, email, password){
        super(userName)
        this.email = email;
        this.password = password;
    }

    addCourse(){
        console.log(`New course is added by ${this.userName}`);
    }
}

const chai = new Teacher('chai', 'chai@google.com', '123');
chai.addCourse();
chai.logMe();       //chai can exxess all the properties of the User class and also it have some extra properties like addCourse();

const masalaChai = new User('masalaChai');
// masalaChai.addCourse(); //It is give us error because we have no method addCourse();
masalaChai.logMe();


//instanceof key word is use to check that perticular object is a instanceof perticular class or not

console.log(chai instanceof Teacher); //It give us "true"
console.log(chai instanceof User); //It give us "true"
console.log(Teacher instanceof User); //It give us "false"
