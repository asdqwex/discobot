/* global describe, it */

'use strict'
const describe = global.describe
const it = global.it
import expect from 'expect'

import quoteModule from '../../src/modules/quote.js'
const quoteDB = new quoteModule.QuoteDB()

describe('quote', function () {
  it('should have the proper methods', function () {
    expect(quoteDB.set).toBeA('function')
    expect(quoteDB.save).toBeA('function')
  })

})
