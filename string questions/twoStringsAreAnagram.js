//Write a program to check if two strings are anagrams of each other.

(function checkAnagram(str1, str2){
        if(str1.split("").sort().join("") === str2.split("").sort().join("")){
            console.log(`${str1} and ${str2} both are anagrams`)
        }else{
             console.log(`${str1} and ${str2} both are not anagrams`)
        }
})('listen', 'silenoot')