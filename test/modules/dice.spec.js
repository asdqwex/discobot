/* global escape */
'use strict'
import dice from '../../src/modules/dice'

const describe = global.describe
const it = global.it
import assert from 'assert'
import Random from 'random-js'
import sinon from 'sinon'
const random = new Random(Random.engines.mt19937().seed('lol'))
const roll = dice.onMessage

describe('Roll Dice', () => {
  const roller = (username, inputMessage, rollCommand = 'roll') => {
    const dependencies = {
      random
    }
    const spy = sinon.spy()
    const bot = {
      sendMessage: spy
    }
    const rollMessage = `${rollCommand} ${inputMessage}`
    roll(bot, username, '', '', rollMessage, '', dependencies)
    const {message, channel} = spy.getCall(0).args[0]
    return {message, channel}
  }

  it(`properly addreses the user that rolled the dice`, () => {
    const {message: actual} = roller('kingles', '2d10')
    const expected = /^Kingles/

    assert.ok(expected.test(actual))
  })

  it(`rolls a number of sided dice.`, () => {
    const {message: actual} = roller('kingles', '2d10')
    const expected = 'Kingles rolled 2d10! ( 4 + 1 ) = 5'

    assert.equal(actual, expected)
  })

  it(`rolls a large number of small sided dice.`, () => {
    const numDice = 1000
    const {message: actual} = roller('kingles', `${numDice}d10`)
    const expected = new RegExp(String.raw`Kingles rolled ${numDice}d10! \( \d*( \+ \d*){${+numDice - 1}} \) \= \d*`) // not testing deterministically because fuck 1000 dice. Suffice to say it works.

    assert.ok(expected.test(actual))
  })

  it(`rolls a small number of large sided dice.`, () => {
    const numDice = 4
    const numSides = 100
    const {message: actual} = roller('kingles', `${numDice}d${numSides}`)
    const expected = 'Kingles rolled 4d100! ( 5 + 91 + 60 + 13 ) = 169'

    assert.equal(actual, expected)
  })

  it(`ridicules the user when syntax is invalid`, () => {
    const {message: actual} = roller('kingles', 'ads')
    const expected = 'Kingles doesn\'t understand how rolling dice works.. ads is not a valid dice roll!'

    assert.equal(actual, expected)
  })

  it(`handles addition at the end of a roll`, () => {
    const {message: actual} = roller('kingles', '3d10+5')
    const expected = 'Kingles rolled 3d10+5! ( 8 + 10 + 1 ) + 5 = 24'

    assert.equal(actual, expected)
  })

  it(`handles counting successes at or more than a given value`, () => {
    const {message: actual} = roller('kingles', '4d10>8')
    const expected = 'Kingles rolled 4d10>8! ( 1 + 3 + 8 + 7 ) = 1 Success'

    assert.equal(actual, expected)
  })

  it('handles counting successes less than a given value', () => {
    const {message: actual} = roller('kingles', '4d10<8')
    const expected = 'Kingles rolled 4d10<8! ( 4 + 10 + 2 + 5 ) = 3 Successes'

    assert.equal(actual, expected)
  })

  it('handles counting succcesses at exactly a given value', () => {
    const {message: actual} = roller('kingles', '4d10=9')
    const expected = 'Kingles rolled 4d10=9! ( 2 + 7 + 3 + 9 ) = 1 Success'

    assert.equal(actual, expected)
  })
})
