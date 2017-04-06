var generateDocs = require('./lib/generate-docs')
var ghpages = require('gh-pages')
var path = require('path')

module.exports = function buildiumAngularDocs(options) {
  options.destination = options.destination || path.join(process.cwd(), 'docs')
  generateDocs(options)

  if (options.ghPages) {
    ghpages.publish(options.destination, options, function (err) {
      if (err) {
        process.stderr.write(err.message + '\n');
        return process.exit(1);
      }
      process.stderr.write('Published documentation\n');
    })
  }
}
