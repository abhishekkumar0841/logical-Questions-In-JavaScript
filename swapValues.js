function swapValues(x, y){
    console.log("X is :", x);
    console.log("Y is :", y);
    [x, y] = [y, x];
    console.log(`X = ${x} and Y = ${y}`)
}

swapValues(5, 8);