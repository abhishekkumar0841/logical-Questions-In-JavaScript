const calc = (n) => {
  let sum = 0;
  for (let i = 1; i <= n; i++) {
    sum += i;
  }
  return sum;
};

const memoizedFunc = (fn) => {
  let cache = {};
  return function (...args) {
    let n = args[0];
    if (n in cache) {
      return cache[n];
    } else {
      let result = fn(n);
      cache[n] = result;
      return result;
    }
  };
};

console.time();
const memo = memoizedFunc(calc);
console.log(memo(9));
console.timeEnd();

console.time();
console.log(memo(9));
console.timeEnd();

console.time();
console.log(memo(9));
console.timeEnd();
