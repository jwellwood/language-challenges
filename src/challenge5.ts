// The date to work with

const expensiveFunction = (): number => {
  console.log('Una única llamada');
  return 3.1415;
};

// Part A
const memoize: Function = (passedFunction: Function) => {
  let cache: any = {};
  return (key: string) => {
    if (cache[key]) {
      return cache[key];
    } else {
      let result: Function = passedFunction();
      cache[key] = result;
      return result;
    }
  };
};

// Part B
const memoizeInOneLine: Function = (
  passedFunction: Function,
  cache: any = {}
) => (key: string) => cache[key] || (cache[key] = passedFunction());

// Part C

let count: number = 0; // Check the number of times it is executed
const repeatText: Function = (repetitions: number, text: string): string => (
  count++, `${text}`.repeat(repetitions).trim()
);

const memoizeWithArgs: Function = (passedFunction: any, cache: any = {}) => (
  ...args: Array<[]>
) => {
  let key: string;
  key = args.map((arg) => arg.toString()).toString();
  if (!cache[key]) {
    cache[key] = passedFunction(...args);
  }
  return cache[key];
};

// Log the function calls

const partA = () => {
  const memoized = memoize(expensiveFunction);
  console.log(memoized());
  console.log(memoized());
};

const partB = () => {
  const memoizedOneLine = memoizeInOneLine(expensiveFunction);
  console.log(memoizedOneLine());
  console.log(memoizedOneLine());
};
const partC = () => {
  const memoizedGreet: Function = memoizeWithArgs(repeatText);
  console.log(memoizedGreet(1, 'pam')); // pam
  console.log(memoizedGreet(3, 'chun')); // chun chun chun
  console.log(memoizedGreet(1, 'pam')); // pam
  console.log(memoizedGreet(3, 'chun')); // chun chun chun
  console.log(count); // 2,
};

// Log the results

const challenge5 = () => {
  console.log({
    CHALLENGE: '************** CHALLENGE 5 *********************',
  });
  partA();
  partB();
  partC();
};

export = challenge5;
