//OOps in JavaScript (Prototype) ==> Inherit : __proto__

//Prototype : it's a mechanism that allows objects to inherit properties and methods from other objects. Every object in JavaScript has an internal hidden property called [[Prototype]], which points to another object (or null).

let animal = {
    eats: true,
    walks: true
}

let rabit = {
    jumps: true
}

//Before inheriting the property of animal to rabit
console.log(rabit);
console.log(rabit.eats); //We get undefined because rabit has not a propery of eats.

rabit.__proto__ = animal; //set rabbit.[[Prototype]] = animal; so here rabit inherits the properties of the animal.

//After inheriting the property of animal to rabit
console.log(rabit);
console.log(rabit.eats);