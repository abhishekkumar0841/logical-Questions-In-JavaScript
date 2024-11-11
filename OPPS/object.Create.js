let person = {
    calcAge(){
        return new Date().getFullYear() - this.birthYear
    },

    greet(){
        return 'Hello how are you!!!'
    }
}

console.log(person)
 /*         this create a {} object and attach calcAge and greet methods inside is prototype. So by doing this we can 
            achieve prototypal inheritance using  Object.create()
 */
let john  = Object.create(person)