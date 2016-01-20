/* global escape */
'use strict'
import dice from '../../src/modules/dice'

const describe = global.describe
const it = global.it
import assert from 'assert'
import Random from 'random-js'
import sinon from 'sinon'
const random = new Random(Random.engines.mt19937().autoSeed())
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
    const rollMessage = `!bot ${rollCommand} ${inputMessage}`

    roll(bot, {username}, '', '', rollMessage, '', dependencies)
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
    const expected = /Kingles rolled 2d10! \d* \+ \d* \= \d*/

    assert.ok(expected.test(actual))
  })

  it(`rolls a large number of small sided dice.`, () => {
    const numDice = 1000
    const {message: actual} = roller('kingles', `${numDice}d10`)
    const expected = new RegExp(`Kingles rolled ${numDice}d10! \\d*( \\+ \\d*){${+numDice - 1}} \\= \\d*`)

    assert.ok(expected.test(actual))
  })

  it(`rolls a small number of large sided dice.`, () => {
    const numDice = 4
    const numSides = 100
    const {message: actual} = roller('kingles', `${numDice}d${numSides}`)
    const expected = new RegExp(`Kingles rolled ${numDice}d${numSides}! \\d*( \\+ \\d*){${+numDice - 1}} \\= \\d*`)

    assert.ok(expected.test(actual))
  })

  it(`ridicules the user when syntax is invalid`, () => {
    const {message: actual} = roller('kingles', 'ads')
    const expected = /Kingles doesn't understand how rolling dice works.. ads is not a valid dice roll!/

    assert.ok(expected.test(actual))
  })
})
