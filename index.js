var generateDocs = require('./lib/generate-docs')
var path = require('path')

module.exports = function buildiumAngularDocs (options) {
  options.destination = options.destination || path.join(process.cwd(), 'docs')
  generateDocs(options)

  if (options.ghPages) {
    // NOTE: this has to be after generateDocs()
    // gh-pages has a dependency on https://github.com/montagejs/collections
    // which modifies Array.prototype
    var ghpages = require('gh-pages')

    ghpages.publish(options.destination, options, function (err) {
      if (err) {
        process.stderr.write(err.message + '\n')
        return process.exit(1)
      }
      process.stderr.write('Published documentation\n')
    })
  }
}
