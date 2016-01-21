'use strict'

var random = require('random-js')()

module.exports = {
  names: ['decide'],
  onMessage: function (bot, user, userID, channelID, message, rawEvent) {
    var messages = message.split(' ')
    messages.shift()
    messages.splice(1, 1)
    const chosenValue = random.integer(0, 1)
    const thing = messages[chosenValue]
    bot.sendMessage({
      to: channelID,
      message: thing
    })
  }
}
