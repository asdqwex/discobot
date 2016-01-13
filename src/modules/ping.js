'use strict'

module.exports = {
  names: ['ping'],
  onMessage: function (bot, user, userID, channelID, message, rawEvent) {
    bot.sendMessage({
      to: channelID,
      message: 'pong, mother fucker'
    })
  }
}
