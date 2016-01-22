'use strict'

var random = require('random-js')()

module.exports = {
  names: ['decide', 'pick'],
  onMessage: function (bot, user, userID, channelID, message, rawEvent) {
    const thing = random.pick(message.split(' ').slice(1).filter(x => x !== 'or'))
    bot.sendMessage({
      to: channelID,
      message: thing
    })
  }
}
