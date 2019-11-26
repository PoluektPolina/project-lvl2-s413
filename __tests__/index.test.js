import genDiff from '../src';

const pathToFile1 = '../__tests__/__fixtures__/before.json';
const pathToFile2 = '../__tests__/__fixtures__/after.json';


test('gendiff', () => {
  const result = {
    '+ verbose': true,
    host: 'hexlet.io',
    '- timeout': 50,
    '+ timeout': 20,
    '- proxy': '123.234.53.22',
    '- follow': false,
  };
  expect(genDiff(pathToFile1, pathToFile2)).toEqual(result);
});
