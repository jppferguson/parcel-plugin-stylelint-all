const SSSAsset = require('parcel-bundler/src/assets/SSSAsset');
const Linter = require('./Linter');

class StyleLintSSSAsset extends SSSAsset {
  async load() {
    let code = await super.load();
    let codeFilename = this.name;
    Linter(code, codeFilename, 'sugarss');
    return code;
  }
}

module.exports = StyleLintSSSAsset;
