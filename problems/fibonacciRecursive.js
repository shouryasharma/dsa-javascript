const memoize = (fn) => {
  let cache = {};
  return (...args) => {
    if (args in cache) return cache[args];
    return (cache[args] = fn.apply(this, args));
  };
};

let fib = (n) => {
  if (n == 0 || n == 1) return n;
  return fib(n - 1) + fib(n - 2);
};

fib = memoize(fib);

console.log(fib(500));
