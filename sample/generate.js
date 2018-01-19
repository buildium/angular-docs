const path = require('path');
const docs = require('../index');

docs({
  title: 'My AngularJS Docs',
  angularVersion: '1.5.9',
  scripts: [ 
    path.join(__dirname, 'src/module.js'), 
    path.join(__dirname, 'src/service.js'), 
    path.join(__dirname, 'src/component.js'), 
  ],
  sourceFiles: [ path.join(__dirname, 'src/module.js'), path.join(__dirname, 'src/**/*.js') ],
  destination: path.join(__dirname, 'docs'),
  ghPages: false
})