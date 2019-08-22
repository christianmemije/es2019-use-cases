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
