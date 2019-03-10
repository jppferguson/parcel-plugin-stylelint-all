const stylelint = require('stylelint');
const jsonfile = require('jsonfile');
const constFile = require('./const');
const Debug = require('debug');

const Linter = function (code, codeFilename, syntax) {
  let ownDebugger = Debug(`parcel-plugin-stylelint-all:${syntax}`);

  ownDebugger('before parse do stylelint.');

  stylelint.lint({
    code,
    codeFilename,
    formatter: 'string',
    syntax
  }).then(function (resultObject) {

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
  }).catch(function (err) {
    ownDebugger(err.message);
  });
}

module.exports = Linter;
