//Write a function to check if two strings are rotations of each other.

{
  function findTwoStrAreRotationOfEachOther(str1, str2) {
    return str1.split("").reverse().join("") === str2;
  }

  let str1 = "abhishek";
  let str2 = "kehsihba";
  let res = findTwoStrAreRotationOfEachOther(str1, str2);
  console.log(res);
}

//********WITHOUT USING ANY BUILTIN METHODS******** */
{
    function findTwoStrAreRotationOfEachOther(str1, str2) {
      let check1 = ''
      let check2 = ''
      for(let i = 0; i < str1.length; i++){
        let currStr = str1[i]
         check1 += currStr
      }

      for(let j = str2.length -1; j >= 0; j--){
        check2 += str2[j]
      }
      
      if(check1 === check2){
        return `${str1} & ${str2} both are rotation of each other`
      }else{
        return `${str1} & ${str2} both are not rotation of each other`
      }
    }
  
    let str1 = "abhishek";
    let str2 = "kehsihba";
    let res = findTwoStrAreRotationOfEachOther(str1, str2);
    console.log(res);
  }
