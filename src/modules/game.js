'use strict'

module.exports = {
  names: ['game'],
  onMessage: function (bot, user, userID, channelID, message, rawEvent) {
    const messages = message.split(' ')
    messages.shift()
    bot.setPresence({
      idle_since: null,
      game: messages.join(' ')
    })
  }
}
