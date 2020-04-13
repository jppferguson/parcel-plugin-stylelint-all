const Linter = require('./Linter');

const lintAll = (dependencies, syntax) => {
  const cache = [];
  dependencies.forEach((dep) => {
    if (!cache.includes(dep.name)) {
      cache.push(dep.name);
      Linter(undefined, dep.name, syntax);
    }
  });
};

module.exports = lintAll;
