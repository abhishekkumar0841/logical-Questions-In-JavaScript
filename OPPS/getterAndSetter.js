/*
            GETTER AND SETTER
            These both are accessor properties which are use to gets and sets the value of an objects property
            -> Accessor properties are of two types
                 1. Getter -> reads objects property value using get keyword
                 2. Setter -> set an objects property value using set keyword
*/

// ENCAPSULATION -> Hide data from outside world
// Set some calculated values with some operations
/*let john = {
  name: "John",
  birthYear: 1995,
  AnnualSalary: 120000,

  //this is getter property
  get getName() {
    return "Mr. " + this.name;
  },

  //this is getter property
  set setName(val) {
    if (val.length < 4) {
      alert("Invalid name or name is too short!!!");
    } else {
      this.name = val;
    }
  },
};

// Accessor methods are not call like a methods, it just behave like a normal property
console.log(john.getName);
john.setName = "John Smith";
console.log(john.getName);

// we can also achieve same logic with these, so why we need getter and setter this is because to implement Encapsulation behaviour of OOPs
console.log(john.name);
john.setName = "John Doe";
console.log(john.name);
*/

let User = class{
    constructor(name, pswd, role){
        this.name = name;
        this.password = pswd;
        this.role = role
    }

    set setPassword(val){
        if(val.length <= 4){
            alert('Password should be greater than 4 chars')
        }else{
            this.password = val;
        }
    }
}

const john = new User('John', 'john', 'admin')
console.log(john)
john.setPassword = 'john123'
console.log(john)


