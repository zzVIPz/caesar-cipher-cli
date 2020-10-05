const { Transform } = require('stream');
const caesarCipher = require('./utils/caesar-cipher');

class TransformStream extends Transform {
  constructor(action, shift) {
    super();
    this.action = action;
    this.shift = shift;
  }
  _transform(chunk, encoding, callback) {
    this.push(caesarCipher(String(chunk), this.action, this.shift));
    callback();
  }
}

module.exports = TransformStream;
