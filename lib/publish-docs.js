var ghpages = require('gh-pages')

module.exports = function (destination, options) {
  ghpages.publish(destination, options, function (err) {
    if (err) {
      process.stderr.write(err.message + '\n')
      return process.exit(1)
    }
    process.stderr.write('Published documentation\n')
  })
}
