// @ts-check

const headlessMode: boolean = true;

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
    '--headless',
    '--window-size=1274,1274'
  ]
}
*/

export {};
