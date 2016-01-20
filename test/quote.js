/* global escape */
'use strict'
const describe = global.describe
const it = global.it
import expect from 'expect'

import quoteModule from './../src/modules/quote.js'
const quoteDB = new quoteModule.QuoteDB()

describe('quote', function () {
  it('should have the proper methods', function () {
    expect(quoteDB.random).toBeA('function')
    expect(quoteDB.set).toBeA('function')
    expect(quoteDB.save).toBeA('function')
  })
  it('should return a random quote object', function () {
    quoteDB.set('foo', 'bar')
    expect(quoteDB.random()).toBeA('object')
    expect(quoteDB.random().quote).toBeA('string')
    expect(quoteDB.random().author).toBeA('string')
  })
})
