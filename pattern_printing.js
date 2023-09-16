// Q. 1
// *
// **
// ***
// ****
// *****

// function printPat(){
//     let numOfCols = 5, numOfRows = 5, i, j, str = "";

//     for(i = 1; i <= numOfRows; i++){
//         for(j = 1; j <= numOfCols; j++){
//             if(j <= i){
//                 str += "*"
//             }else{
//                 str += " "
//             }
//         }
//         str += "\n"
//     }
//     return str;
// }

// console.log(printPat())

// Q.2
// *****
//  ****
//   ***
//    **
//     *

// function printPat(){
//     let numOfCols = 5, numOfRows = 5, i, j, str = "";

//     for(i = 1; i <= numOfRows; i++){
//         for(j = 1; j <= numOfCols; j++){
//             if(j >= i){
//                 str += "*"
//             }else{
//                 str += " "
//             }
//         }
//         str += "\n"
//     }
//     return str;
// }

// console.log(printPat())

//Q. 4
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