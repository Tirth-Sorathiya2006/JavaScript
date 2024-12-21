//class

class User {
    constructor(userName) {
        this.userName = userName;
    }

    logMe() {
        console.log(`User Name : ${this.userName}`);
    }

    static createId() {     //To prevent the access of the any variable or function we are using the static key word.
        return ('123');
    }
}

const hitesh = new User('hitesh');
// console.log(hitesh.createId()); // It gives an error because of using the static key word is not give the access of the createId() method.

class Teacher extends User{
    constructor(userName, email){
        super(userName);
        this.email = email;
    }
}

const iPhone = new Teacher('iPhone', 'i@google.com');
console.log(iPhone);
// console.log(iPhone.createId());  //static key word is also not provide the acess to the subclass.