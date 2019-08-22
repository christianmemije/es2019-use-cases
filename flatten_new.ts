// @ts-check

const nestedArray: any = [[[1, [1.1, [1.11]]], 2, 3], [4, 5]];

const flatArray: number[] = nestedArray.flat(Infinity);

console.log({ flatArray });

// { flatArray: [ 1, 1.1, 1.11, 2, 3, 4, 5 ] }

export {};
