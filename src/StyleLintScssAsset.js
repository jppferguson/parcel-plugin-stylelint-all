const SASSAsset = require('parcel-bundler/src/assets/SASSAsset');
const Linter = require('./Linter');

class StyleLintScssAsset extends SASSAsset {
  async load() {
    let code = await super.load();
    let codeFilename = this.name;
    Linter(code, codeFilename, 'scss');
    return code;
  }
}

module.exports = StyleLintScssAsset;
