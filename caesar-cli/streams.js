const { createReadStream, createWriteStream } = require('fs');
const { pipeline } = require('stream');
const getPath = require('./utils/getPath');
const TransformStream = require('./transform');

const stddinRead = () => {
  console.log('Please, type your text:');
  return process.stdin;
};

module.exports = ({ action, shift, input, output }) => {
  pipeline(
    input ? createReadStream(getPath(input), 'utf8') : stddinRead(),
    new TransformStream(action, shift),
    output
      ? createWriteStream(getPath(output), { flags: 'a' }).on('finish', () => {
          console.log('Encryption is done! Check output file');
        })
      : process.stdout,
    (e) => {
      if (e) {
        console.error(`Ooops... Something went wrong! Please, check this error - ${e.code}`);
      }
    },
  );
};
