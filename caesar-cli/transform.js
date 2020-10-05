const { Transform } = require('stream');
const caesarCipher = require('./utils/caesar-cipher');

class TransformStream extends Transform {
  constructor(shift, action) {
    super();
    this.shift = shift;
    this.action = action;
  }
  _transform(chunk, encoding, callback) {
    this.push(caesarCipher(chunk, this.shift, this.action));
    callback();
  }
}

module.exports = TransformStream;
