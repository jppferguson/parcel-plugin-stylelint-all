const CSSAsset = require('parcel-bundler/src/assets/CSSAsset');
const Linter = require('./Linter');

class StyleLintCssAsset extends CSSAsset {
  async load() {
    let code = await super.load();
    let codeFilename = this.name;
    Linter(code, codeFilename);
    return code;
  }
}

module.exports = StyleLintCssAsset;
