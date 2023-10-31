//Write a function to find the second most common character in a string.
function find2ndMostCommonChar(str){
    let obj = {}
    for(let i = 0; i < str.length; i++){
        let currStr = str[i]
        obj[currStr] = (obj[currStr] || 0) + 1
    }
    //sort chars by frequency by descending order
    // return obj
    const sortedObj =  Object.keys(obj).sort((a, b) => obj[b] - obj[a])
    return sortedObj[1]
    
}

const str = 'Write a function to find the second most common character in a string'
const res = find2ndMostCommonChar(str)
console.log(res)