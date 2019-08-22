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
