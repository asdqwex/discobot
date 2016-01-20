'use strict'

import capitalize from './utils/capitalize'

export default {
  names: ['roll', 'dice'],
  onMessage: function (bot, user, userID, channelID, message, rawEvent, {random}) {
    const findRollStatement = (search) => search.match(/((\d{0,4})d(\d{0,4}))/)
    const rollMessage = message.split(' ').slice(2)[0]
    const rollStatement = findRollStatement(rollMessage)
    const numDice = rollStatement[2]
    const sidesPerDie = rollStatement[3]
    const result = random.dice(+sidesPerDie, +numDice)
    const accumulatedDiceTotal = result.length ? result.reduce((acc, die) => acc + die) : null
    if (!accumulatedDiceTotal) {
      bot.sendMessage({
        to: channelID,
        message: `${capitalize(user.username)} doesn't understand how rolling dice works.. ${rollMessage} is not a valid dice roll!`
      })
      return
    }
    bot.sendMessage({
      to: channelID,
      message: `${capitalize(user.username)} rolled ${rollStatement[1]}! ${result.join(' + ')} = ${accumulatedDiceTotal}`
    })
  }
}
