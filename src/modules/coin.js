'use strict'

const random = require('random-js')()

module.exports = {
  names: ['coin'],
  onMessage: function (bot, user, userID, channelID, message, rawEvent) {
    var coinFlip = [ 'Heads', 'Tails' ]
    const coinFlipResponse = random.pick(coinFlip)
    bot.sendMessage({
      to: channelID,
      message: coinFlipResponse
    })
  }
}
