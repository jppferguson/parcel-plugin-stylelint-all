const fs = require('fs');
const stylelint = require('stylelint');
const jsonfile = require('jsonfile');
const constFile = require('./const');

const Linter = (codeFilename, syntax, ownDebugger) => {
  stylelint
    .lint({
      files: [codeFilename],
      codeFilename,
      formatter: 'string',
      syntax,
    })
    .then((resultObject) => {
      if (!resultObject.ignored) {
        let ret = resultObject.output;

        if (ret) {
          let cache;
          try {
            cache = jsonfile.readFileSync(constFile.cacheFile);
          } catch (e) {
            cache = {};
          }
          cache.log = cache.log || [];
          cache.log.push(ret);
          jsonfile.writeFileSync(constFile.cacheFile, cache);
        }
      }
    })
    .catch((err) => {
      ownDebugger(err.message);
    });
};

module.exports = Linter;
