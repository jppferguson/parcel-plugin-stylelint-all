const Bundler = require('parcel-bundler');
const PluginStyleLint = require('../index');

let bundler = new Bundler('./examples/index.html', {
  watch: true,
});

PluginStyleLint(bundler);

bundler.serve();
