const Debug = require('debug');
const Linter = require('./Linter');

const lintAll = (filename, dependencies, syntax) => {
  let ownDebugger = Debug(`parcel-plugin-stylelint-all:${syntax}`);

  ownDebugger('before parse do stylelint.');

  const allFiles = [filename];
  dependencies.forEach((dep) => {
    if (!allFiles.includes(dep.name)) {
      allFiles.push(dep.name);
    }
  });
  allFiles.forEach((file) => {
    Linter(file, syntax, ownDebugger);
  });
};

module.exports = lintAll;
