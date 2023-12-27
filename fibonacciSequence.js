//Find fibonacci sequences from giving term
// The Fibonacci sequence is a series of numbers in which each number (Fibonacci number) is the sum of the two preceding ones, usually starting with 0 and 1. In mathematical terms, the sequence starts as follows:
// 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, ...

function findFibonacciSeq(term){
    let fibonacciSeq = [0, 1] 
    for(let i = 2; i < term; i++){ 
        const nextFibonacci = fibonacciSeq[i - 1] + fibonacciSeq[i - 2]
        fibonacciSeq.push(nextFibonacci)
    }
    return fibonacciSeq.join(", ")
}

console.log(findFibonacciSeq(10)); //gives first 10 fibonacci sequences
