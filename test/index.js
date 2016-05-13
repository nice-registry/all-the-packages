const test = require('tape')
const registry = require('..')

var somePkg = null

test('all-the-packages', function (t) {
  registry
    .on('package', function (pkg) {
      process.stderr.write('.')
      if (pkg.name === 'alphabet') somePkg = pkg
    })
    .on('end', function () {
      t.equal(somePkg.name, 'alphabet', 'includes name')
      t.ok(somePkg.version, 'includes version')
      t.ok(somePkg.homepage, 'includes homepage')
      t.ok(somePkg.description, 'includes description')
      t.ok(somePkg._from, 'includes _from')
      t.ok(somePkg._id, 'includes _id')
      t.ok(somePkg._npmUser, 'includes _npmUser')
      t.ok(somePkg._npmVersion, 'includes _npmVersion')
      t.ok(somePkg._shasum, 'includes _shasum')
      t.ok(somePkg.dist, 'includes dist')
      t.ok(somePkg.maintainers, 'includes maintainers')
      t.end()
    })
})
