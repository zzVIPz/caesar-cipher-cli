const fs = require('fs');

const parseToString = (value) => {
  const formattedStr = String(value);
  if (formattedStr !== 'encode' && formattedStr !== 'decode') {
    console.error('Only action "encode" or "decode" must be specified!');
    throw new Error();
  }
  return formattedStr;
};

const parseToInt = (value) => {
  const formattedValue = +value;
  const parseValue = Number.isInteger(formattedValue);
  if (!parseValue || formattedValue < 1 || formattedValue > 25) {
    console.error('Shift value must be an integer and between 1 and 25');
    throw new Error();
  }
  return formattedValue;
};

const validateParam = (filePath) => {
  if (!fs.existsSync(filePath)) {
    console.error(`File ${filePath} doesn't exist or readable`);
    throw new Error();
  }
  return filePath;
};

module.exports = { parseToString, parseToInt, validateParam };
