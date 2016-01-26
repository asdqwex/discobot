'use strict'

const teller = require('fortune-teller')

module.exports = {
  names: ['fortune'],
  onMessage: function (bot, user, userID, channelID, message, rawEvent) {
    let fortune = teller.fortune()
    bot.sendMessage({
      to: channelID,
      message: fortune
    })
  }
}
