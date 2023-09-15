// reverse below number without using any built-in functions/methods

function reverseNum(num){
    let reverse = 0;
    while (num !== 0) {
        // as we know that when we divide any number from 10 then the remainder will be the last digit
        let lastDigit = num % 10    
        // here 0 * 10 = 0 + last digit(6) = 6-->> this repeats and shifted numbers
        reverse = reverse * 10 + lastDigit;
        // when we divide any number form 10 then the last digit of that number is removed
        num = Math.floor(num / 10); 
    }
    return reverse;
}

console.log(reverseNum(123456));
