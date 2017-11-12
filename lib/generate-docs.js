var path = require('path')
var docgen = require('dgeni-alive/src/docgen')()

var packages = [
  require('dgeni-alive/src/packages/jsdoc-ext'),
  require('dgeni-alive/src/packages/ngdoc-ext'),
  require('dgeni-alive/src/packages/links-ext'),
  require('dgeni-alive/src/packages/examples-ext')
]

module.exports = function generateDocs (options) {
  var destination = options.destination
  var scripts = options.scripts || []
  var stylesheets = options.stylesheets || []
  var title = options.title || 'Documentation'
  var sourceFiles = options.sourceFiles

  if (options.angularVersion) {
    scripts.unshift(['//ajax.googleapis.com/ajax/libs/angularjs', options.angularVersion, 'angular.min.js'].join('/'));
  }
  
  docgen.Package(packages)

  .config(function (log) {
    log.level = 'info'
  })

  .config(function (generateExamplesProcessor, generateProtractorTestsProcessor) {
    var deployments = {
      name: 'default',
      examples: {
        commonFiles: {
          scripts: scripts
        }
      },
      scripts: scripts,
      stylesheets: stylesheets
    }
    generateExamplesProcessor.deployments = [ deployments ]
    generateProtractorTestsProcessor.deployments = [ deployments ]
  })

  .config(function (renderDocsProcessor) {
    renderDocsProcessor.extraData.deploymentTarget = 'default'
  })

  .config(function (generateWebsiteProcessor) {
    generateWebsiteProcessor.locals('productTitle', title)
  })

  .config(function (templateFinder, renderDocsProcessor) {
    var configPath = path.join(__dirname, '../config')

    templateFinder.templateFolders.unshift(path.resolve(configPath, 'templates/examples'))
    templateFinder.templateFolders.unshift(path.resolve(configPath, 'templates/ngdoc'))
    templateFinder.templateFolders.unshift(path.resolve(configPath, 'templates/app'))
  })

  return docgen
    .src(sourceFiles)
    .title(title)
    .dest(destination)
    .generate()
}
