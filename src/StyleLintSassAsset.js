const SASSAsset = require('parcel-bundler/src/assets/SASSAsset');
const Linter = require('./Linter');

class StyleLintSassAsset extends SASSAsset {
  async load() {
    let code = await super.load();
    let codeFilename = this.name;
    Linter(code, codeFilename, 'sass');
    return code;
  }
}

module.exports = StyleLintSassAsset;
