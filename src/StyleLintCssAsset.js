const CSSAsset = require('parcel-bundler/src/assets/CSSAsset');
const lintAll = require('./lintAll');

class StyleLintCssAsset extends CSSAsset {
  async load() {
    let code = await super.load();
    this.getDependencies().then(() => {
      lintAll(this.name, this.dependencies);
    });
    return code;
  }
}

module.exports = StyleLintCssAsset;
