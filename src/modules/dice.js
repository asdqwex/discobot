'use strict'

import capitalize from './utils/capitalize.js'
import x from 'xregexp'
x.install('natives')

const regex = (template) => x(String.raw(template), 'x')
module.exports = {
  names: ['roll', 'dice'],
  onMessage: function (bot, user, userID, channelID, message, rawEvent, {random}) {
    const rollMatches = search => {
      return regex`
      (
        (?<numDice> \d{0,4})
        d
        (?<sidesPerDie> \d{0,4})
      )
      \s*
      (?<afterMath>\+\s*\d{0,4})?
      (?:(?<successSign>[\<\>\=])(?<successThreshold>\d*)*)*`
      .exec(search)
    }
    const rollMessage = message.split(' ').slice(1)[0]
    const matches = rollMatches(rollMessage)
    const { numDice, sidesPerDie, afterMath, successSign, successThreshold, input: fullQuery } = matches
    const result = random.dice(+sidesPerDie, +numDice)
    const actualAfterMath = +afterMath ? +afterMath : 0
    const accumulatedDiceTotal = result.length ? result.reduce((acc, die) => acc + die) : 0
    const fullTotal = actualAfterMath + accumulatedDiceTotal

    // bad syntax..
    if (!accumulatedDiceTotal) {
      bot.sendMessage({
        to: channelID,
        message: `${capitalize(user)} doesn't understand how rolling dice works.. ${fullQuery} is not a valid dice roll!`
      })
      return
    }

    function pluralizeSuccesses (num) {
      if (+num === 0) {
        return '0 Successes'
      }
      if (+num === 1) {
        return '1 Success'
      }
      return `${num} Successes`
    }

    function numSuccesses (candidates, sign, threshold) {
      const comparators = {
        '<': d => +d <= +threshold,
        '>': d => +d >= +threshold,
        '=': d => +d === +threshold
      }
      return pluralizeSuccesses(candidates.filter(comparators[sign]).length)
    }

    // The juicy bits
    function constructMessage () {
      let constructedMessage = []
      constructedMessage.push(`${capitalize(user)} rolled ${fullQuery}!`) // preamble
      constructedMessage.push(`( ${result.join(' + ')} )`)// main return
      if (actualAfterMath) {
        constructedMessage.push(`+ ${actualAfterMath}`)
        constructedMessage.push(`= ${fullTotal}`) // cut out early when there's aftermath
        return constructedMessage
      }
      if (successSign && successThreshold) {
        constructedMessage.push(`= ${numSuccesses(result, successSign, successThreshold)}`)
        return constructedMessage
      }
      constructedMessage.push(`= ${fullTotal}`)
      return constructedMessage
    }

    bot.sendMessage({
      to: channelID,
      message: constructMessage().join(' ')
    })
  }
}
