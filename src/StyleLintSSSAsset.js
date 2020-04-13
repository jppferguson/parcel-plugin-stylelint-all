const SSSAsset = require('parcel-bundler/src/assets/SSSAsset');
const lintAll = require('./lintAll');

class StyleLintSSSAsset extends SSSAsset {
  async load() {
    let code = await super.load();
    this.getDependencies().then(() => {
      lintAll(this.name, this.dependencies, 'sugarss');
    });
    return code;
  }
}

module.exports = StyleLintSSSAsset;
