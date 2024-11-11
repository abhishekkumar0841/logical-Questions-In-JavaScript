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
}

class Employee extends Person{
    constructor(name, gender, birthYear, empId, salary){
        super(name, gender, birthYear) // super keyword is use to call constructor function of parent class
        this.empId = empId;
        this.salary = salary;
    }

    calcSalary(){
        return this.salary
    }

    empDetails(){
        console.log(this.name)
        console.log(this.empId)
    }
}

let mark = new Employee('Mark', 'Male', 1995, 102, 19999)
console.log(mark)
