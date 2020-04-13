const SASSAsset = require('parcel-bundler/src/assets/SASSAsset');
const lintAll = require('./lintAll');

class StyleLintScssAsset extends SASSAsset {
  async load() {
    let code = await super.load();
    this.getDependencies().then(() => {
      lintAll(this.dependencies, 'scss');
    });
    return code;
  }
}

module.exports = StyleLintScssAsset;
