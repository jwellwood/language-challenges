// Part A

// Data to use

const myObject = {
  a: 1,
  b: {
    c: null,
    d: {
      e: 3,
      f: {
        g: 'bingo',
      },
    },
  },
};

// Answer:

const deepGet = (obj, ...searchKeys) => {
  let newObj = obj;
  const newKeys = searchKeys;
  const keyArr = newKeys.map((_, i) => newKeys.slice(i, i + 1));
  keyArr.map((_, i) => (newObj = newObj[keyArr[i]]));
  return newObj;
};

// Part B
const myObject2 = {};

const deepSet = (value, obj = {}, ...keys) => {
  if (keys.length) {
    const [key, ...rest] = keys;
    return Object.assign(obj, {
      [key]: deepSet.apply(null, [value, obj[key], ...rest]),
    });
  }
  return value;
};

// Log the results

const challenge2 = () => {
  return console.log({
    CHALLENGE_ONE: '************** CHALLENGE 2 *********************',
    PART_1: {
      1: deepGet(myObject, 'x'), // undefined
      2: deepGet(myObject, 'a'), // 1
      3: deepGet(myObject, 'b'), // { c: null, d: {....}}
      4: deepGet(myObject, 'b', 'c'), // null
      5: deepGet(myObject, 'b', 'd', 'f', 'g'), // bingo
      6: deepGet(myObject), // {a: 1, b: {...}}
    },
    PART_2: [
      deepSet(1, myObject2, 'a', 'b'),
      JSON.stringify(myObject2), // {a: { b: 1}}
      deepSet(2, myObject2, 'a', 'c'),
      JSON.stringify(myObject2), // {a: { b: 1, c: 2}}
      deepSet(3, myObject2, 'a'),
      JSON.stringify(myObject2), // {a: 3}
      deepSet(4, myObject2),
      JSON.stringify(myObject2), // Do nothing // {a: 3}
    ],
  });
};

module.exports = challenge2;
