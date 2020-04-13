const SASSAsset = require('parcel-bundler/src/assets/SASSAsset');
const lintAll = require('./lintAll');

class StyleLintSassAsset extends SASSAsset {
  async load() {
    let code = await super.load();
    this.getDependencies().then(() => {
      lintAll(this.name, this.dependencies, 'sass');
    });
    return code;
  }
}

module.exports = StyleLintSassAsset;
