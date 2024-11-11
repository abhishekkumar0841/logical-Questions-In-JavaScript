/*
            CLASS IN JAVASCRIPT
*/

// 2 ways to create class
// 1. class declaration
class Person {
  //constructor function is a special, because when ever a new instance is create using this Person class the this constructor
  // function will called. Always use constructor keyword other name not create constructor function
  // If we not define any constructor function the javascript provide an empty constructor function by default.
  constructor(name, birthYear, gender) {
    this.name = name;
    this.gender = gender;
    this.birthYear = birthYear;

    // defining methods here is very un efficient because when ever an instance is create this method or behaviour is also created so,
    // declare this behaviour outside constructor function. And this is injected in the protototype of Person Class only one time,
    // and we use any where we want.
    // this.calcAge = function(){
    //     let age = new Date().getFullYear() - this.birthYear;
    //     console.log(age)
    // }
  }

  // Declaring behaviour and it attaches in prototype of Person Class
  calcAge() {
    let age = new Date().getFullYear() - this.birthYear;
    console.log(age);
  }
}

// We can also add some behaviour or methods in prototype of Person like this
Person.prototype.greet = function () {
  console.log(`Hello, Good morning ${this.name}`);
};

//             Person() is call the constructor function of Person class
let john = new Person("John", 1995, "Male");
john.greet();

let marry = new Person("Marry", 1995, "Male");
marry.greet();

/* 2. class expression
    let Person = class {

    };
*/
/*
            SOME IMPORTANT POINTS ON CLASS IN JAVASCRIPT
                -> classes cannot be hoisted
                -> classes are first class citizen in javascript like functions
                    -> that means we can pass a class to a function as an argument and we can also return a class from a function
                    -> this is possible because, classes are just a syntatical sugar over function
                -> classes are executed in strict mode by default
*/
