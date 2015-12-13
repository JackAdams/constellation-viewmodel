Package.describe({
  name: 'constellation:viewmodel',
  version: '0.4.0',
  summary: 'Viewmodel inspector plugin for Constellation',
  git: 'https://github.com/JackAdams/constellation-viewmodel.git',
  documentation: 'README.md',
  debugOnly: true
});

Package.onUse(function(api) {
  api.versionsFrom('1.0');

  api.use(['templating','session','blaze','underscore','tracker','reactive-var','reactive-dict'], 'client');
  api.use('constellation:console@1.4.0', 'client');
  api.use('jss:jstree@3.1.3', 'client');

  api.addFiles('viewmodel.css','client');
  api.addFiles('viewmodel.html','client');
  api.addFiles('viewmodel.js','client');
  
  api.imply('constellation:console');
});

Package.onTest(function(api) {
  api.use('tinytest');
});
