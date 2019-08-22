// @ts-check

type strOrNumArray = (string | number)[];
interface IObj {
  [s: string]: string;
}

const arrayPairs: strOrNumArray[] = [['foo', 1], ['bar', 2]];

const obj: IObj = arrayPairs.reduce(
  (o: IObj, item: strOrNumArray) => ({ ...o, [item[0]]: item[1] }), {}
);

console.log({ obj });

// { obj: { foo: 1, bar: 2 } }

export {};
