/* global Blob, URL */

'use strict'

const assign = require('lodash/assign')

class BlobWriter {
  constructor (options) {
    this.label = 'blob writer'
    this.inPlace = false
    this.dirty = true

    assign(this, options)
  }

  process (data) {
    return Promise.resolve(URL.createObjectURL(new Blob([data], {type: this.mediaType || 'application/octet-binary'})))
  }
}

module.exports = BlobWriter
