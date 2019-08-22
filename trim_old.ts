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
