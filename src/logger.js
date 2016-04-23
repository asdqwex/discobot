'use strict'

const winston = require('winston')
export const LOG = new (winston.Logger)({
  transports: [
    new (winston.transports.Console)({
      timestamp: function () { return new Date().toLocaleString() }
    })
  ]
})
