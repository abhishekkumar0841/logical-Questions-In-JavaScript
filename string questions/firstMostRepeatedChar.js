function mostRepeatedChar(str){
    let charCount = {}
    for(let i = 0; i < str.length; i++){
        let currChar = str[i]
        if(charCount[currChar]){
            charCount[currChar]++;
        }else{
            charCount[currChar] = 1;
        }
    }

    let mostChar = "";
    let mostCount = 0;

    for(let char in charCount){
        if(charCount[char] > mostCount){
            mostCount = charCount[char]
            mostChar = char
        }
    }

    return mostChar
}

console.log(mostRepeatedChar('ieorknnnnieojkesffffm'));