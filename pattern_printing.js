// Q. 1
// *
// **
// ***
// ****
// *****

function printPat1(){
    let numOfCols = 5, numOfRows = 5, i, j, str = "";

    for(i = 1; i <= numOfRows; i++){
        for(j = 1; j <= numOfCols; j++){
            if(j <= i){
                str += "*"
            }else{
                str += " "
            }
        }
        str += "\n"
    }
    return str;
}

console.log(printPat1())

// Q.2
// *****
//  ****
//   ***
//    **
//     *

function printPat2(){
    let numOfCols = 5, numOfRows = 5, i, j, str = "";

    for(i = 1; i <= numOfRows; i++){
        for(j = 1; j <= numOfCols; j++){
            if(j >= i){
                str += "*"
            }else{
                str += " "
            }
        }
        str += "\n"
    }
    return str;
}

console.log(printPat2())

//Q. 3
//    *
//   ***
//  *****
// *******
//*********

function printPat3(){
    let rows = 5, cols = 9, i, j, str = ""; 
    for(i = 1; i <= rows; i++){
        for(j = 1; j <= cols; j++){
            if(j >= 6 - i && j <= 4 + i){
                str += "*"
            }else{
                str += " "
            }
        }
        str += "\n"
    }
    return str;
}
console.log(printPat3())

//Q. 4
//    *
//   ***
//  *****
// *******
//*********

function printPat4(){
    let rows = 5, cols = 9, i, j, k, str = ""; 
    for(i = 1; i <= rows; i++){
        k = 1;
        for(j = 1; j <= cols; j++){
            if(j >= 6 -i && j <= 4 + i && k){
                str += "*";
                k = 0;
            }else{
                str += " ";
                k = 1;
            }
        }
        str += "\n"
    }
    return str;
}
console.log(printPat4())

//Q. 5
// *********
// **** ****
// ***   ***
// **     **
// *       *

function printPat5(){
    let rows = 5, cols = 9, i, j, str = ""; 
    for(i = 1; i <= rows; i++){
        for(j = 1; j <= cols; j++){
            if(j <= 6 - i || j >= 4 + i){
                str += "*"
            }else{
                str += " "
            }
        }
        str += "\n"
    }
    return str;
}
console.log(printPat5())
