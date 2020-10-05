const { createReadStream, createWriteStream } = require('fs');
const { pipeline, Writable } = require('stream');
const getPath = require('./utils/getPath');
const TransformStream = require('./transform');

module.exports = ({ action, shift, input, output }) => {
  const msgText = 'Please, type your text:';

  stdinReadStream = () => {
    console.log(msgText);
    return process.stdin;
  };

  stdoutReadStream = () => {
    class WritableStream extends Writable {
      _write(chunk, encoding, callback) {
        console.log(`Your output text is: \n${String(chunk)}\n${msgText}`);
        callback();
      }
    }
    return new WritableStream();
  };

  pipeline(
    input ? createReadStream(getPath(input)) : stdinReadStream(),
    new TransformStream(action, shift),
    output
      ? createWriteStream(getPath(output), { flags: 'a' }).on('finish', () => {
          console.log('Encryption is done! Check output file!');
        })
      : stdoutReadStream(),
    (e) => {
      if (e) {
        console.error(`Ooops... Something went wrong! Please, check this error - ${e}`);
      }
    },
  );
};
