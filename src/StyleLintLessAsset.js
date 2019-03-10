const LESSAsset = require('parcel-bundler/src/assets/LESSAsset');
const Linter = require('./Linter');

class StyleLintLessAsset extends LESSAsset {
  async load() {
    let code = await super.load();
    let codeFilename = this.name;
    Linter(code, codeFilename, 'less');
    return code;
  }
}

module.exports = StyleLintLessAsset;
