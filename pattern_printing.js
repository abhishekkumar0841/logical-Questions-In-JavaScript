// Q. 1
// *
// **
// ***
// ****
// *****

function printPat1() {
  let numOfCols = 5,
    numOfRows = 5,
    i,
    j,
    str = "";

  for (i = 1; i <= numOfRows; i++) {
    for (j = 1; j <= numOfCols; j++) {
      if (j <= i) {
        str += "*";
      } else {
        str += " ";
      }
    }
    str += "\n";
  }
  return str;
}

// console.log(printPat1())

// Q.2
// *****
//  ****
//   ***
//    **
//     *

function printPat2() {
  let numOfCols = 5,
    numOfRows = 5,
    i,
    j,
    str = "";

  for (i = 1; i <= numOfRows; i++) {
    for (j = 1; j <= numOfCols; j++) {
      if (j >= i) {
        str += "*";
      } else {
        str += " ";
      }
    }
    str += "\n";
  }
  return str;
}

// console.log(printPat2())

//Q. 3
//    *
//   ***
//  *****
// *******
//*********

function printPat3() {
  let rows = 5,
    cols = 9,
    i,
    j,
    str = "";
  for (i = 1; i <= rows; i++) {
    for (j = 1; j <= cols; j++) {
      if (j >= 6 - i && j <= 4 + i) {
        str += "*";
      } else {
        str += " ";
      }
    }
    str += "\n";
  }
  return str;
}
// console.log(printPat3())

/* Q. 4
    *    
   * *
  * * *
 * * * *
* * * * *
*/
function printPat4() {
  let rows = 5,
    cols = 9,
    i,
    j,
    k,
    str = "";
  for (i = 1; i <= rows; i++) {
    k = 1;
    for (j = 1; j <= cols; j++) {
      if (j >= 6 - i && j <= 4 + i && k) {
        str += "*";
        k = 0;
      } else {
        str += " ";
        k = 1;
      }
    }
    str += "\n";
  }
  return str;
}

// console.log(printPat4())

//Q. 5
// *********
// **** ****
// ***   ***
// **     **
// *       *

function printPat5() {
  let rows = 5,
    cols = 9,
    i,
    j,
    str = "";
  for (i = 1; i <= rows; i++) {
    for (j = 1; j <= cols; j++) {
      if (j <= 6 - i || j >= 4 + i) {
        str += "*";
      } else {
        str += " ";
      }
    }
    str += "\n";
  }
  return str;
}
// console.log(printPat5())

//Q. 6
//     *
//    ***
//   *****
//  *******
// *********
//  *******
//   *****
//    ***
//     *

function printPat6() {
  let str = "";
  let k = 0;
  for (let i = 1; i <= 9; i++) {
    i <= 5 ? k++ : k--;
    for (let j = 1; j <= 9; j++) {
      if (j >= 6 - k && j <= 4 + k) {
        str += "*";
      } else {
        str += " ";
      }
    }
    str += "\n";
  }
  return str;
}
// console.log(printPat6())

// Q. 7
// *********
//  *******
//   *****
//    ***
//     *
//    ***
//   *****
//  *******
// *********

/*
 *********
 *******
 *****
 ***
 *
 ***
 *****
 *******
 *********
 */
function printPat7() {
  let str = "";
  let k = 10;
  let l = 0;
  for (let i = 1; i <= 9; i++) {
    i <= 5 ? k-- && l++ : k++ && l--;
    for (let j = 1; j <= 9; j++) {
      if (j >= l && j <= k) {
        str += "*";
      } else {
        str += " ";
      }
    }
    str += "\n";
  }
  return str;
}
// console.log(printPat7())

// Q 8.
//    1
//   121
//  12321
// 1234321
function printPat8(n) {
  let str = "";
  for (let i = 1; i <= n; i++) {
    let k = 1;
    for (let j = 1; j <= n * 2 - 1; j++) {
      if (j >= n - i + 1 && j <= n + i - 1) {
        str += k;
        if (j >= n) {
          k--;
        } else {
          k++;
        }
      } else {
        str += " ";
      }
    }
    str += "\n";
  }
  return str;
}
// console.log(printPat8(4))

/*
ABCDEFGFEDCBA
ABCDEF GFEDCB
ABCDE   FEDCB
ABCD     EDCB
ABC       CBA
AB         BA
A           A
*/
function printPat9(n) {
  let str = "";
  for (let i = 1; i <= n; i++) {
    let k = 65;
    for (let j = 1; j <= n * 2 - 1; j++) {
      if (j <= n - i + 1 || j >= n + i - 1) {
        str += String.fromCharCode(k);
        j < n ? k++ : k--;
      } else {
        str += " ";
        j === 4 && k--;
      }
    }
    str += "\n";
  }
  return str;
}
// console.log(printPat9(7))

function printPat10(n) {
  let str = "";
  let k = 0;
  let l = Math.ceil(n / 2);
  for (let i = 1; i <= n; i++) {
    if (n % 2 === 0) {
      if (i <= l) k++;
      if (i > l + 1) k--;
    } else {
      i <= l ? k++ : k--;
    }
    for (let j = 1; j <= n; j++) {
      if (j >= l + 1 - k && j <= l - 1 + k) {
        str += "*";
      } else {
        str += " ";
      }
    }
    str += "\n";
  }
  return str;
}
// console.log(printPat10(7));

function printPat11(n) {
  let str = "";
  let k = 0;
  for (let i = 1; i <= n; i++) {
    if (n % 2 === 0) {
      if (i <= n / 2) {
        k++;
      }
      if (i > n / 2 + 1) {
        k--;
      }
    } else {
      i <= Math.floor(n / 2 + 1) ? k++ : k--;
    }
    for (let j = 1; j <= Math.floor(n / 2 + 1); j++) {
      if (j <= k) {
        str += "*";
      } else {
        str += " ";
      }
    }
    str += "\n";
  }
  return str;
}

// console.log(printPat11(7));

function printPat12(n) {
  let str = "";
  for (let i = 1; i <= n; i++) {
    for (let j = 1; j <= n * 2 - 1; j++) {
      if (j >= i && j <= n * 2 - i) {
        str += "*";
      } else {
        str += " ";
      }
    }
    str += "\n";
  }
  return str;
}

// console.log(printPat12(7));

function printPat13(n) {
  let str = "";
  for (let i = 1; i <= n; i++) {
    let k = i;
    for (let j = 1; j <= n * 2 - 1; j++) {
      if (j >= n - i + 1 && j <= n + i - 1) {
        str += k;
        j < n ? k++ : k--;
      } else {
        str += " ";
      }
    }
    str += "\n";
  }
  return str;
}

// console.log(printPat13(4));

function printPat14(n) {
  let str = "";
  for (let i = 1; i <= n; i++) {
    let k = n - i;
    for (let j = 1; j <= n; j++) {
      if (j <= n - i + 1) {
        str += `${k} `;
        k--;
      } else {
        str += " ";
      }
    }
    str += "\n";
  }
  return str;
}

// console.log(printPat14(7));

function printPat15(n) {
  let str = "";
  let k = 0;
  let x;
  let c = Math.ceil(n / 2);
  for (let i = 1; i <= n; i++) {
    x = 1;
    i < c + 1 ? k++ : k--;
    for (let j = 1; j <= c; j++) {
      if (j >= c - k + 1) {
        str += `${x} `;
        x++;
      } else {
        str += " ";
      }
    }
    str += "\n";
  }
  return str;
}

// console.log(printPat15(9));

function printPat16(n) {
  let str = "";
  for (let i = 1; i <= n; i++) {
    for (let j = 1; j <= n; j++) {
      if (j === i || j === n - i + 1) {
        if (i === n + 1 - j) {
          str += "/";
        } else {
          str += "\\";
        }
      } else {
        str += "*";
      }
    }
    str += "\n";
  }
  return str;
}

// console.log(printPat16(7));

function printPat17(n) {
  let str = "";
  let mid = Math.ceil(n / 2);
  let k = 0;
  for (let i = 1; i <= n; i++) {
    i <= mid ? k++ : k--;
    for (let j = 1; j <= n; j++) {
      if (j <= mid - k + 1 || j >= mid + k - 1) {
        str += "*";
      } else {
        str += " ";
      }
    }
    str += "\n";
  }
  return str;
}
// console.log(printPat17(5))

function printPat18(n) {
  let str = "";
  let col = n * 2 - 1;
  for (let i = 1; i <= n; i++) {
    for (let j = 1; j <= col; j++) {
      if (j >= i && j <= col - i + 1) {
        str += "*";
      } else {
        str += " ";
      }
    }
    str += "\n";
  }
  return str;
}
// console.log(printPat18(6))

function printPat19(n) {
  let str = "";
  let col = n * 2 - 1;
  for (let i = 1; i <= n; i++) {
    let charCode = 65;
    for (let j = 1; j <= col; j++) {
      if (j >= 5 - i && j <= 3 + i) {
        str += String.fromCharCode(charCode);
        j < 4 ? charCode++ : charCode--;
      } else {
        str += " ";
      }
    }
    str += "\n";
  }
  return str;
}
// console.log(printPat19(4))

//    A1
//   AB12
//  ABC123
// ABCD1234
function printPat20(n) {
  let str = "";
  let col = n * 2;
  for (let i = 1; i <= n; i++) {
    let count = 1;
    let charCode = 65;
    for (let j = 1; j <= col; j++) {
      if (j >= n - i + 1 && j <= n + i) {
        if (j <= n) {
          str += String.fromCodePoint(charCode);
          charCode++;
        } else {
          str += count;
          count++;
        }
      } else {
        str += " ";
      }
    }
    str += "\n";
  }
  return str;
}
// console.log(printPat20(4));

function printPat21(n) {
  let str = "";
  let cols = n * 2;
  for (let i = 1; i <= n; i++) {
    for (let j = 1; j <= cols; j++) {
      if (j >= n - i + 1 && j <= cols - i) {
        str += "*";
      } else {
        str += " ";
      }
    }
    str += "\n";
  }
  return str;
}
// console.log(printPat21(4))

function printPat22(n) {
  let str = "";
  let cols = n * 2 - 1;
  for (let i = 1; i <= n; i++) {
    let count = 1;
    let char = 65;
    for (let j = 1; j <= cols; j++) {
      if (j >= n - i + 1 && j <= n + i - 1) {
        if (j <= n) {
          str += " " + count + " ";
          count++;
        } else {
          str += " " + String.fromCharCode(char) + " ";
          char++;
        }
      } else {
        str += "   ";
      }
    }
    str += "\n";
  }
  return str;
}
// console.log(printPat22(4));

// 1
// 1  0
// 1  0  1
// 1  0  1  0
// 1  0  1  0  1
// 1  0  1  0  1  0
function printPat23(n) {
  let str = "";
  for (let i = 1; i <= n; i++) {
    for (let j = 1; j <= n; j++) {
      if (j <= i) {
        if (j % 2 !== 0) {
          str += " " + 1 + " ";
        } else {
          str += " " + 0 + " ";
        }
      } else {
        str += "   ";
      }
    }
    str += "\n";
  }
  return str;
}
// console.log(printPat23(6))

//     *  *  *  *  *  *  *
//     *                 *
//     *     *  *  *     *
//     *     *     *     *
//     *     *  *  *     *
//     *                 *
//     *  *  *  *  *  *  *
function printPat24(n) {
  let str = "";
  for (let i = 1; i <= n; i++) {
    for (let j = 1; j <= n; j++) {
      if (
        j === 1 ||
        i === 1 ||
        j === 7 ||
        i === 7 ||
        (i >= 3 &&
          i <= 5 &&
          j >= 3 &&
          j <= 5 &&
          (j === 3 || j === 5 || i === 3 || i === 5))
      ) {
        str += " * ";
      } else {
        str += "   ";
      }
    }
    str += "\n";
  }
  return str;
}
// console.log(printPat24(7));

// FROM HERE I'M TAKEING INPUT FROM USER THROUGH TERMINAL AND SHOW THE RESULT ON THE BASIS OF INPUT
/*
const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question("Enter value of n: \n", (n) => {
  console.log("\n");
  // console.log(printPat25(n));
  // console.log(printPat26(n));
  // console.log(printPat27(n));
  rl.close();
});

rl.on("close", () => {
  console.log("...INTERFACE CLOSED...");
});
*/

/* pattern 25
          0
         121
        23432
       3456543
      456787654
     56789098765
    6789012109876
   789012343210987
  89012345654321098
 9012345678765432109
012345678909876543210
 9012345678765432109
  89012345654321098
   789012343210987
    6789012109876
     56789098765
      456787654
       3456543
        23432
         121
          0
*/

function printPat25(n) {
  let str = "";
  let mid = Math.ceil(n / 2);
  let k = 0;
  let count = 0;
  for (let i = 1; i <= n; i++) {
    i <= mid ? k++ : k--;
    count = k - 1;
    for (let j = 1; j <= n; j++) {
      if (j >= mid - k + 1 && j <= mid + k - 1) {
        str += j < mid ? Math.floor(count++ % 10) : Math.floor(count-- % 10);
      } else {
        str += " ";
      }
    }
    str += "\n";
  }
  return str;
}

function printPat26(n) {
  let str = "";
  for (let i = 1; i <= n; i++) {
    let k = i;
    for (let j = 1; j <= n; j++) {
      if (j <= i) {
        str += " " + String.fromCharCode(64 + k) + " ";
        k--;
      } else {
        str += "   ";
      }
    }
    str += "\n";
  }
  return str;
}

function printPat27(n) {
  let str = "";
  let cols = n * 2 - 1;
  for (let i = 1; i <= n; i++) {
    let k = i;
    for (let j = 1; j <= cols; j++) {
      if (j >= n - i + 1 && j <= n + i - 1) {
        str += k;
        j < n ? k-- : k++;
      } else {
        str += " ";
      }
    }
    str += "\n";
  }
  return str;
}
// console.log(printPat27(8));

/*28
    1
    3*2
    4*5*6
    10*9*8*7
    11*12*13*14*15
*/
function printPat28(n) {
  let str = "";
  let cols = n * 2 - 1;
  let k = 0;
  let p;
  for (let i = 1; i <= n; i++) {
    if (i % 2 === 1) {
      k = k + 1;
    } else {
      k--;
      k = k + i;
    }
    p = k;
    for (let j = 1; j <= cols; j++) {
      if (j <= 2 * i - 1) {
        if (j % 2 !== 0) {
          str += p;
          if (i % 2) {
            p++;
            k++;
          } else {
            p--;
          }
        } else {
          str += "*";
        }
      } else {
        str += " ";
      }
    }
    str += "\n";
  }
  return str;
}
// console.log(printPat28(5));

/* 29
             A
          C  B
       F  E  D
    J  I  H  G
 O  N  M  L  K
*/
function printPat29(n) {
  let str = "";
  let k = 0;
  let p;
  for (let i = 1; i <= n; i++) {
    let charCode = 64 + i + k;
    p = charCode;
    for (let j = 1; j <= n; j++) {
      if (j >= n - i + 1) {
        str += " " + String.fromCharCode(p) + " ";
        p--;
      } else {
        str += "   ";
      }
    }
    k += i;
    str += "\n";
  }
  return str;
}
// console.log(printPat29(5));

/*30
                *
              * *
          *  *  *
          |  *  *
    *     |     *
    *  *  |
    *  *  *
    *  *
    *
*/
function printPat30(n) {
  let str = "";
  let k;
  for (let i = 1; i <= 3 * n; i++) {
    for (let j = 1; j <= 2 * n - 1; j++) {
      if (i <= n) {
        if (j >= 2 * n - i) {
          str += " * ";
        } else {
          str += "   ";
        }
      } else if (i <= n * 2) {
        k = 0;
        if (j === n) {
          k = 1;
          str += " | ";
        }
        if (j <= i - n - 1) {
          k = 1;
          str += " * ";
        }
        if (j >= i) {
          k = 1;
          str += " * ";
        }
        if (k === 0) {
          str += "   ";
        }
      } else if (i <= n * 3) {
        if (j <= 3 * n + 1 - i) {
          str += " * ";
        } else {
          str += "   ";
        }
      }
    }
    str += "\n";
  }
  return str;
}
// console.log(printPat30(3));

/*31
   1
  A B
 1 2 3
A B C D
*/
function printPat31(n) {
  let str = "";
  let k;
  for (let i = 1; i <= n; i++) {
    k = 1;
    let x = 1;
    for (let j = 1; j <= n * 2 - 1; j++) {
      if (j >= n - i + 1 && j <= n + i - 1) {
        if (k) {
          if (i % 2 !== 0) {
            str += x;
            x++;
          } else {
            str += String.fromCharCode(64 + x);
            x++;
          }
        } else {
          str += " ";
        }
        k = 1 - k;
      } else {
        str += " ";
      }
    }
    str += "\n";
  }
  return str;
}
// console.log(printPat31(4));

/*32
 *           *
 *     *
 *
 *     *
 *           *
 */
function printPat32(n) {
  let str = "";
  for (let i = 1; i <= n; i++) {
    for (let j = 1; j <= n; j++) {
      if (j === i || j === n - i + 1) {
        str += " * ";
      } else {
        str += "   ";
      }
    }
    str += "\n";
  }
  return str;
}
// console.log(printPat32(5))

/*
 A  B  C  D  E  F  G
 A  B  C     E  F  G
 A  B           F  G
 A                 G
*/
function printPat32(n) {
  let str = "";
  for (let i = 1; i <= n; i++) {
    let charCode = 65;
    for (let j = 1; j <= n * 2 - 1; j++) {
      if (j <= n - i + 1 || j >= n + i - 1) {
        str += " " + String.fromCharCode(charCode) + " ";
      } else {
        str += "   ";
      }
      charCode++;
    }
    str += "\n";
  }
  return str;
}
// console.log(printPat32(9));

/* 34
1
7 2
12 8 3
16 13 9 4
19 17 14 10 5
21 20 18 15 11 6
*/
function printPat34(n) {
  let k = 1;
  let p;
  for (let i = 1; i <= n; i++) {
    p = k;
    for (let j = 1; j <= n; j++) {
      if (j <= i) {
        process.stdout.write(p.toString() + " ");
        p = p - (n - i + j);
      } else {
        process.stdout.write(" ");
      }
    }
    k = k + 1 + n - i;
    process.stdout.write("\n");
  }
}
// printPat34(6);

/*35 --> With only 1 loop
    *
   * *
  * * *
 * * * *
* * * * *
*/
function printPat35(n) {
  let cols = n*2-1;
  let flag = 1;
  for(let i = 1, k = 0; i <= cols; i++){
    if(i < n - k){
      process.stdout.write(' ')
    }else{
      if(flag){
        process.stdout.write("*")
      }else{
        process.stdout.write(" ")
      }
      flag = 1 - flag;
    }

    if(i === n + k){
      k++;
      process.stdout.write("\n");
      if(i === cols) break;
      i = 0;
      flag = 1;
    }
  }
}

// printPat35(5);

/*36
  0     
  0 1
  0 2 4
  0 3 6 9
  0 4 8 12 16
*/
function printPat36(n){
  for(let i = 1; i <= n; i++){
    let k = 0;
    for(let j = 1; j <= n; j++){
      if(j <= i){
        process.stdout.write(k.toString() + " ")
        k = k + i - 1;
      }else{
        process.stdout.write(" ")
      }
    }
    process.stdout.write("\n")
  }
}

printPat36(5)


