var generateDocs = require('./lib/generate-docs')
var path = require('path')

module.exports = function buildiumAngularDocs (options) {
  options.destination = options.destination || path.join(process.cwd(), 'docs')
  generateDocs(options).then(function () {
    if (options.ghPages) {
      require('./lib/publish-docs')(options.destination, options)
    }
  })
}
