/*
            STATIC METHODS
            -> Static methods are those methods which are associated with class and not with instances of that class.
            -> They can be of two types 
                1. Instance method -> attached to the prototype of class, so instance of that class can access them.
                2. Static method -> attached to a class or an object. And we can access like ClassName.methodName()
*/

/*
class Person {
    constructor(name, birthYear, gender) {
      this.name = name;
      this.gender = gender;
      this.birthYear = birthYear;
    }

    calcAge() {
      let age = new Date().getFullYear() - this.birthYear;
      console.log(age);
    }

    static greet(){
        console.log(`Good morning , how are you!!!`)
    }
  }

  const john = new Person('John', 1995, 'male')
  console.log(john)

  Person.greet();
*/

let Person = function (name, gender, birthYear) {
  this.name = name;
  this.gender = gender;
  this.birthYear = birthYear;
};

Person.prototype.calcAge = function () {
  let age = new Date().getFullYear() - this.birthYear;
  console.log(age);
};

// creating static method on Person class
Person.greet = function(){
    console.log("How's going on....")
}

const mark = new Person('mark', 'male', 1995)
console.log(mark)
mark.calcAge();
Person.greet();

// SOME INBUILT STATIC METHOD EXAMPLES
Array.from();
Number.parseInt();
Number.isNaN();
