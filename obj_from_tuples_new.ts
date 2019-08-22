// @ts-check

type strOrNumArray = (string | number)[];
interface IObj {
  [s: string]: string;
}

const arrayPairs: strOrNumArray[] = [['foo', 1], ['bar', 2]];

const obj: IObj = Object.fromEntries(arrayPairs);

console.log({obj})

// { obj: { foo: 1, bar: 2 } }

export {};
