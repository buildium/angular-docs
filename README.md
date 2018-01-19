# angular-docs

[![standard-readme compliant](https://img.shields.io/badge/readme%20style-standard-brightgreen.svg?style=flat-square)](https://github.com/RichardLitt/standard-readme)

> Publish angular documentation ([ngdoc](https://github.com/angular/angular.js/wiki/Writing-AngularJS-Documentation))

## Background

Generate static documentation based on the ngdoc flavor of jsdoc.

> Your documentation is complete when someone can use your module without ever
having to look at its code. This is very important. This makes it possible for
you to separate your module's documented interface from its internal
implementation (guts). This is good because it means that you are free to
change the module's internals as long as the interface remains the same.

> Remember: the documentation, not the code, defines what a module does.

~ [Ken Williams, Perl Hackers](http://mathforum.org/ken/perl_modules.html#document)

## Install

This project uses [node](http://nodejs.org) and [npm](https://npmjs.com). Go check them out if you don't have them locally installed.

```sh
$ npm install --global @buildium/angular-docs
```

## Usage

```sh
$ buildium-angular-docs --help
# Prints out the available commands and options
```

### Programmatic API

```javascript
var buildiumAngularDocs = require('@buildium/angular-docs');

buildiumAngularDocs({
    scripts: [ 'src/index.js' ],
    title: 'My AngularJS Docs',
    sourceFiles: [ '../src/**/*.js' ],
    destination: '../docs',
    ghPages: true
});
```

## Contribute

Feel free to dive in! [Open an issue](https://github.com/buildium/angular-docs/issues/new) or submit PRs.

angular-docs follows the [Contributor Covenant](http://contributor-covenant.org/version/1/3/0/) Code of Conduct.

## License

[MIT](LICENSE) © Buildium