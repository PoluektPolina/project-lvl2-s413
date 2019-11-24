import { genDiff } from './bin';

const pathToFile1 = '../__tests__/__fixtures__/before.json';
const pathToFile2 = '../__tests__/__fixtures__/after.json';
const diff = genDiff(pathToFile1, pathToFile2);
console.log(diff);
