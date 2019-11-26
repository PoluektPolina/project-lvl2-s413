const path = require('path');
const fs = require('fs');

const getFile = (pathToFile) => {
  const fullPath = path.resolve(__dirname, pathToFile);
  const json = fs.readFileSync(fullPath);
  const obj = JSON.parse(json);
  return obj;
};

const genDiff = (firstConfig, secondConfig) => {
  const objBefore = getFile(firstConfig);
  const objAfter = getFile(secondConfig);
  const accNew = Object.keys(objAfter).reduce((acc, key) => (Object.keys(objBefore).includes(key)
    ? acc : { ...acc, [`+ ${key}`]: objAfter[key] }), {});
  const comparingValues = (key) => {
    if (objBefore[key] === objAfter[key]) {
      return { [key]: objBefore[key] };
    }
    return { [`- ${key}`]: objBefore[key], [`+ ${key}`]: objAfter[key] };
  };
  return Object.keys(objBefore).reduce((acc, key) => (Object.keys(objAfter).includes(key)
    ? { ...acc, ...comparingValues(key) } : { ...acc, [`- ${key}`]: objBefore[key] }), accNew);
};

export default genDiff;
