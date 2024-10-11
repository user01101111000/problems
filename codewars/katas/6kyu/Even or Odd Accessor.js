// https://www.codewars.com/kata/6656a4687f3e4eb5fb520817

const target = (n) => {
  return n % 2 ? "Odd" : "Even";
};

const handler2 = {
  get(target, prop) {
    return target(prop);
  },
};

const evenOrOdd = new Proxy(target, handler2);

// other

// const evenOrOdd = new Proxy(n => n % 2 ? "Odd" : "Even", { get: (f, k) => f(k) });
