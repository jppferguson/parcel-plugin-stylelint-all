const logger = require('@parcel/logger');
const mkdirp = require('mkdirp');
const jsonfile = require('jsonfile');
const constFile = require('./src/const');

mkdirp.sync(constFile.cacheDir);

module.exports = (bundler) => {
  jsonfile.writeFileSync(constFile.cacheFile, {});

  bundler.addAssetType('css', require.resolve('./src/StyleLintCssAsset'));
  bundler.addAssetType('less', require.resolve('./src/StyleLintLessAsset'));
  bundler.addAssetType('sass', require.resolve('./src/StyleLintSassAsset'));
  bundler.addAssetType('scss', require.resolve('./src/StyleLintScssAsset'));
  bundler.addAssetType('sss', require.resolve('./src/StyleLintSSSAsset'));

  bundler.on('bundled', () => {
    let cache;
    let deDupeCache = [];
    try {
      cache = jsonfile.readFileSync(constFile.cacheFile);
    } catch (e) {
      cache = {};
    }
    cache.log = cache.log || [];
    if (cache.log.length) {
      logger.clear();
    }
    cache.log.forEach((element) => {
      if (deDupeCache.indexOf(element) === -1) {
        logger.write(element);
        deDupeCache.push(element);
      }
    });

    jsonfile.writeFileSync(constFile.cacheFile, {});
  });
};
