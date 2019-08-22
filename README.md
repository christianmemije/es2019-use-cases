ES2019 introduced a lot of useful new features to JavaScript. I will be going over some cool use cases.

### Conditionally adding items to an array

Suppose you wanted to conditionally add an item to an array at a given index, say index 1.

#### Pre-ES2019

You could use an if statement and insert the item at the desired index using `splice()`.

```ts
// @ts-check

const headlessMode: boolean = false;

let configArr = [
  '--disable-gpu',
  '--window-size=1274,1274'
];
const index: number = 1;
if (headlessMode) {
  configArr.splice(index, 0, '--headless');
}

console.log({ configArr });

/*
{
  configArr: [
    '--disable-gpu',
    '--window-size=1274,1274'
  ]
}
*/

export {};
```

#### ES2019

You can use a ternary at the given index and place an empty array if condition is not met. You can then call the `flat()` method which would flatten the array thus removing the empty array.

```ts
// @ts-check

const headlessMode: boolean = false;

const configArr = [
  '--disable-gpu',
  headlessMode ? '--headless' : [],
  '--window-size=1274,1274'
].flat();

console.log({ configArr });

/*
{
  configArr: [
    '--disable-gpu',
    '--window-size=1274,1274'
  ]
}
*/

export {};
```

---

### Flattening nested arrays

Suppose you wanted to flatten a nested array of unknown depth.

#### Pre-ES2019

You could do so through a reduction function and recursion.

```ts
// @ts-check

const nestedArray: any = [[[1, [1.1, [1.11]]], 2, 3], [4, 5]];

function flatten(arr: number[]) {
  return arr.reduce(
    (flat: number[], toFlatten: any) =>
      flat.concat(
        Array.isArray(toFlatten) ?
        flatten(toFlatten) :
        toFlatten
      ),
    []
  );
}

const flatArray: number[] = flatten(nestedArray);

console.log({ flatArray });

// { flatArray: [ 1, 1.1, 1.11, 2, 3, 4, 5 ] }

export {};
```

#### ES2019

You can call the `flat()` method with the parameter set to `Infinity`.

```ts
// @ts-check

const nestedArray: any = [[[1, [1.1, [1.11]]], 2, 3], [4, 5]];

const flatArray: number[] = nestedArray.flat(Infinity);

console.log({ flatArray });

// { flatArray: [ 1, 1.1, 1.11, 2, 3, 4, 5 ] }

export {};
```

---

### Creating an object from tuples

Suppose you wanted to create an object from an array of tuples.

#### Pre-ES2019

You could do so using a reduction function.

```ts
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
```

#### ES2019

You can use `Object.fromEntries()`.

```ts
// @ts-check

type strOrNumArray = (string | number)[];
interface IObj {
  [s: string]: string;
}

const arrayPairs: strOrNumArray[] = [['foo', 1], ['bar', 2]];

const obj: IObj = Object.fromEntries(arrayPairs);

console.log({ obj });

// { obj: { foo: 1, bar: 2 } }

export {};
```

---

### Trimming leading or trailing whitespace

Suppose you wanted to only trim leading or trailing whitespace, not both.

#### Pre-2019

You could do so using simple regular expressions.

```ts
// @ts-check

const str: string = '     Whitespace     ';

const leadingTrimmedStr = str.replace(/^\s*/, '');
const trailingTrimmedStr = str.replace(/\s*$/, '');

console.log({ leadingTrimmedStr, trailingTrimmedStr });

/*
{
  leadingTrimmedStr: '     Whitespace',
  trailingTrimmedStr: 'Whitespace     '
}
*/

export {};
```

#### ES2019

You can use the `trimStart()` or `trimEnd()` methods.

```ts
// @ts-check

const str: string = '     Whitespace     ';

const leadingTrimmedStr = str.trimStart();
const trailingTrimmedStr = str.trimEnd();

console.log({ leadingTrimmedStr, trailingTrimmedStr });

/*
{
  leadingTrimmedStr: '     Whitespace',
  trailingTrimmedStr: 'Whitespace     '
}
*/

export {};
```

---

## Bonus: ES2020? (Stage 3 Proposals)

### Safely accessing a deep object key

Suppose you wanted to access a key deep inside an object in a safe manner.

#### Pre-ES2020

You could use the `&&` operator for short circuiting.

```ts
// @ts-check

const user: any = undefined;

var street = user && user.address && user.address.street;

console.log({ street });

// { street: undefined }

export {};
```

#### ES2020

You would be able to use the `?` operator.

```ts
// @ts-check

const user: any = undefined;

var street = user?.address?.street;

console.log({ street });

// { street: undefined }

export {};
```

---

### Setting fallbacks for undefined object keys

Suppose you wanted to have a fallback if a key was not in an object. Note that you do not want to use the `||` operator since a key might be in the object but the value might be falsy.

#### Pre-ES2020

You could check whether a key is in the object using `in` and set a fallback.

```ts
// @ts-check

interface IConfig {
  headerText: string;
  animationDuration: number;
  showSplashScreen: boolean;
}
const config: IConfig = {
  headerText: '',
  animationDuration: 0,
  showSplashScreen: false,
};

const headerText: string = 'headerText' in config ?
  config.headerText :
  'header fallback';
const animationDuration: number = 'animationDuration' in config ?
  config.animationDuration :
  300;
const showSplashScreen: boolean = 'showSplashScreen' in config ?
  config.showSplashScreen :
  true;

console.log({
  headerText,
  animationDuration,
  showSplashScreen,
});

/*
{
  headerText: '',
  animationDuration: 0,
  showSplashScreen: false
}
*/

export {};
```

#### ES2020

You would be able to use the `??` operator to set a fallback.

```ts
// @ts-check

interface IConfig {
  headerText: string;
  animationDuration: number;
  showSplashScreen: boolean;
}
const config: IConfig = {
  headerText: '',
  animationDuration: 0,
  showSplashScreen: false,
};

const headerText: string =
  config.headerText ??
  'header fallback';
const animationDuration: number =
  config.animationDuration ??
  300;
const showSplashScreen: boolean =
  config.showSplashScreen ??
  true;

console.log({
  headerText,
  animationDuration,
  showSplashScreen,
});

/*
{
  headerText: '',
  animationDuration: 0,
  showSplashScreen: false
}
*/

export {};
```

---

## Helpful Resources

- https://exploringjs.com/es2018-es2019/toc.html
- https://github.com/tc39/proposals
