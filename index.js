#!/usr/bin/env node

const fs = require('fs')
const JSONStream = require('JSONStream')
const mapSync = require('event-stream').mapSync
const EventEmitter = require('events')
const util = require('util')

function Emitter () { EventEmitter.call(this) }
util.inherits(Emitter, EventEmitter)

const emitter = module.exports = new Emitter()

fs.createReadStream('./skimdb.json')
  .pipe(JSONStream.parse('rows.*'))
  .pipe(mapSync(function (pkg) {
    emitter.emit('package', pkg.value)
  }))
  .on('end', function () {
    emitter.emit('end')
    emitter.emit('done')
    emitter.emit('finished')
  })
