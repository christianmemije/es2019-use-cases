// @ts-check

const user: any = undefined;

var street = user && user.address && user.address.street;

console.log({ street });

// { street: undefined }

export {};
