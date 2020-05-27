// Data to use
const sample = [1, [2, 3], [[4], [5, 6, [7, 8, [9]]]]];

// Answer
let flatArray: number[] = [];

const flattenArray = (arr: any[number]): number[] => {
  arr.map((_: void, i: number) => {
    Array.isArray(arr[i]) ? flattenArray(arr[i]) : flatArray.push(arr[i]);
  });

  return flatArray;
};

// Log result

const challenge1 = () =>
  console.log({
    CHALLENGE: '************** CHALLENGE 01 *********************',
    ANSWER: flattenArray(sample),
  });

export = challenge1;
