# all-the-packages

All the npm registry metadata as an offline event stream.

## Why?

See https://github.com/nice-registry/about#why

## Installation

```sh
npm install all-the-packages --save
```

When you install this package, a `postinstall` script downloads
the npm registry metadata to a local JSON file, which is about 540 MB.

To refresh the module once you've already installed it, just reinstall:

```sh
npm i all-the-packages@latest
```

## Usage

This package provides a simple event emitter that emits two events:
`package` and `end`.

```js
const registry = require('all-the-packages')

registry
  .on('package', function (pkg) {
    console.log(`${pkg.name} - ${pkg.description}\n`)
  })
  .on('end', function () {
    // done
  })
```

To get cleaner package data, use [nice-package](http://ghub.io/nice-package):

```js
const registry = require('all-the-packages')
const NicePackage = require('nice-package')
const coolPackages = []

registry
  .on('package', function (pkg) {
    if (pkg.name.match('cool') || pkg.description.match('cool')) {
      coolPackages.push(new NicePackage(pkg))
    }
  })
  .on('end', function () {
    // done
  })
```

## Why Streams?

Streams are cool and all, but the main reason this module has a streaming
interface is *RAM*. It would be nice to just `require` the module and have a
giant registry object to work with, but a 400 MB JSON file is too big to fit in
memory on most computers.

## See Also

- [package-stream](https://github.com/zeke/package-stream/): An endless stream of clean package data from the npm registry.
- [nice-package](https://github.com/zeke/nice-package): Clean up messy package metadata from the npm registry

## Tests

```sh
npm install
npm test
```

## Dependencies

- [JSONStream](https://github.com/dominictarr/JSONStream): rawStream.pipe(JSONStream.parse()).pipe(streamOfObjects)
- [event-stream](https://github.com/dominictarr/event-stream): construct pipes of streams of events

## Dev Dependencies

- [tap-spec](https://github.com/scottcorgan/tap-spec): Formatted TAP output like Mocha's spec reporter
- [tape](https://github.com/substack/tape): tap-producing test harness for node and browsers


## License

MIT

_Generated by [package-json-to-readme](https://github.com/zeke/package-json-to-readme)_
