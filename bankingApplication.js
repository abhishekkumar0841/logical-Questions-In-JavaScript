// A banking application needs to manage customer accounts and transactions. The user detail is stored in an
// object with a keys name and balance. Write functions using object methods to update a customer's account
// balance based on a deposit or withdrawal.

function Customer(name, balance){
    this.name = name;
    this.balance = balance;
}

//depositing money
Customer.prototype.depositedAmount = function(amount){
    if(amount > 0){
        this.balance += amount
        return `${amount} deposited successfully to ${this.name} account and total balance is ${this.balance}.`
    }else{
        return "Amount cannot be deposited, try again!"
    }
}

//withdrawing money
Customer.prototype.withdrawAmount = function(amount){
    if(amount <= this.balance && amount > 0){
        this.balance -= amount;
        return `${amount} Amount withdraw successfully from ${this.name} account and remaining balance is ${this.balance}`
    }else{
        return "Low balance or invalid entry!"
    }
}

const customer1 = new Customer("Abhishek", 90000)
console.log(customer1.balance)

customer1.depositedAmount(10000)
console.log(customer1.balance)

customer1.withdrawAmount(50000)
console.log(customer1.balance)
console.log(customer1.withdrawAmount(4000))
console.log(customer1.depositedAmount(999))

