Package.describe({
  name: 'color:collection-chunk-inefficient',
  version: '0.0.1',
  summary: 'Split array into chunks for Mango collection.',
  git: 'https://github.com/coloryazilim/collection-chunk-inefficient.git',
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.versionsFrom('1.4.3.2');
  api.use([ 'ecmascript', 'mongo']);

  // RUN SERVER AND CLIENT FILE.
  api.addFiles('collection-chunk-inefficient.js');
});
