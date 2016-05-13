const registry = require('./')

registry
  .on('package', function (pkg) {
    console.log(`${pkg.name} - ${pkg.description}\n`)
  })
  .on('end', function () {
    // done
  })
