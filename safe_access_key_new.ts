// @ts-check

const user: any = undefined;

var street = user?.address?.street;

console.log({ street });

// { street: undefined }

export {};
