const LESSAsset = require('parcel-bundler/src/assets/LESSAsset');
const lintAll = require('./lintAll');

class StyleLintLessAsset extends LESSAsset {
  async load() {
    let code = await super.load();
    this.getDependencies().then(() => {
      lintAll(this.name, this.dependencies, 'less');
    });
    return code;
  }
}

module.exports = StyleLintLessAsset;
