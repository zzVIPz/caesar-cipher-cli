const { parseToString, parseToInt, validateParam } = require('./utils/validate-param');

module.exports = (program, streams) => {
  return program
    .storeOptionsAsProperties(false)
    .passCommandToAction(false)
    .requiredOption('-a, --action <actionType>', 'action - must be encode or decode', parseToString)
    .requiredOption('-s, --shift <number>', 'shift value - must be between 1 and 26', parseToInt)
    .option('-i, --input <filePath>', 'input file path', validateParam)
    .option('-o, --output <filePath>', 'output file path', validateParam)
    .action(streams)
    .parse(process.argv);
};
