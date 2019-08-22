// @ts-check

const str: string = '     Whitespace     ';

const leadingTrimmedStr = str.trimStart();
const trailingTrimmedStr = str.trimEnd()

console.log({ leadingTrimmedStr, trailingTrimmedStr });

/*
{
  leadingTrimmedStr: '     Whitespace',
  trailingTrimmedStr: 'Whitespace     '
}
*/

export {};
