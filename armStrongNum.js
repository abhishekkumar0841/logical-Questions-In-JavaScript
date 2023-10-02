// print all armStrong number from 1 to 1000
function findArmStrongNum() {
    for(let i = 1; i <= 1000; i++){
        let x = i;
        let s = 0;
        while(x !== 0){
            let lastDigit = x % 10;
            s = s + lastDigit * lastDigit * lastDigit;
            x = Math.floor(x / 10);
        }
        if(s === i){
            console.log("Arm Strong numbers are:-", i)
        }
    }
    
}

findArmStrongNum()
