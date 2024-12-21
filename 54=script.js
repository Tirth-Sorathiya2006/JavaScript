//Getters and Setters

class User{
    constructor(email, password){
        this.email = email;
        this.password = password;
    }

    get email(){
        return (this._email.toUpperCase());
    }

    set email(value){
        this._email = value;
    }

    get password(){     //If we are defining the getter then we need to define the setter also and if we defining the seeter then we need to define the getter also.
        return (this._password.toUpperCase());
    }

    set password(value){
        this._password = value;
    }
}

const hitesh = new User('hitesh@google.com', '123abc');
console.log(hitesh.password);
console.log(hitesh.email);
