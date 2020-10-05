const { program } = require('commander');
const initProgram = require('./init-program');
const streams = require('./streams');

try {
  initProgram(program, streams);
} catch (e) {
  process.exit(1);
}
