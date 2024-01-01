"use strict"
// ***** this in global scope *******
    // value of this in global scope is global object
    // it can be window, global or any thing else, which depends upon where the javascript code run or executed
    // global object in browser (window object)
console.log(this); 

// ***** this inside a function *******
    // inside function value of this depends on strict mode
    // if strict mode is on then value of this is undefined 
    // without strict mode value of this is window object in browser ( or global object)
function x(){
    console.log(this); // undefined
}
// x()

// ***** this in non-strict mode (this substitution) *******
    // this substitution--> happens in non-strict mode
    // If the value of this keyword is undefined or null
    // this keyword will be replaced with global object
    // only in non strict mode

// ***** this keyword value depends on how function is called (window) *******
    x() // this value is undefined without in strict mode
    window.x() // this value is window object or global object in strict mode

// ***** this inside a object's method *******
    // whenever we are inside a method (function defined inside an object), this the value of this keyword is that whole object where the method defined
const user1 = {
    name: "Abhishek",
    sayName: function (){
        console.log('this of user1:', this); //{name: 'Abhishek', sayName: ƒ}
        console.log('name of user:', this.name);
    }
}
user1.sayName() //-> user1

// ***** call apply bind methods (sharing methods) *******
const user2 = {
    name: "John"
}
    // value of this keyword can be modified by using "call, apply, bind" methods
user1.sayName.call(user2) //-> Now the value of this is user2

// ***** this inside arrow function *******
    // arrow functions does not have their own "this"
    // the value of this is come from  lexical scope 
    // here obj is in global object so, the this is window object (global object)
    // it retains the this value of the enclosing lexical context
const obj = {
    a: 10,
    b: ()=>{
        console.log("this in arrow func:", this);
    }
}
obj.b() //window object

// ***** this inside nested arrow function *******
const obj2 = {
    a: 10,
    b: function(){
        // here arrow function is not the method of the obj2 it is inside the other method which "b" so the value of this here is the whole obj2
        const y = ()=>{
            console.log("this in nested arrow func:", this);
        }
        y()
    }
}
obj2.b() // {a: 10, b: ƒ}

// ***** this inside DOM *******
    // value of "this" inside DOM is the reference to HTML element
    // check this.html file also 