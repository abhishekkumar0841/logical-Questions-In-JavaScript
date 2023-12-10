//write a function which only multiply the number type property from the below object

let obj = {
    a: 10,
    b: 20,
    c: 'String',
    d: 30
}

function multiplyBy2(o){
    for(key in o){
        if(typeof o[key] === 'number'){
            o[key] = o[key] * 2
        }
    }
}

multiplyBy2(obj)
console.log("multiplied obj is:", obj);