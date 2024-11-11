/*
===> OOPS
===> OOPS
===> OOPS
===> OOPS
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

Person.prototype.city = 'Indore'

let john = new Person("John", "male", 1998);
console.log(john);
john.calcAge();
console.log(john.city);

let marry = new Person("Marry", "Female", "1994");
console.log(marry);
marry.calcAge();

let steve = new Person("steve", "Female", "1994");
console.log(steve);
steve.calcAge();

let mark = {
    name: "Mark",
    age: 33,
    city: "Delhi"
}

// let mark = new Object();
// mark.name = 'mark'
// mark.city = 'city'
// mark.age = 33

let arr = [3,5,6]
console.log(arr)
