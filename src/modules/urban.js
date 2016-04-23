'use strict'

const urban = require('urban')

module.exports = {
  names: ['urban'],
  onMessage: function (bot, user, userID, channelID, message, rawEvent) {
    var verb = message.split(' ').splice(1).join()
    if (verb === 'random') {
      urban.random().first(function (json) {
        bot.sendMessage({
          to: channelID,
          message: json.permalink
        })
      })
    } else {
      var urbTerm = urban(verb)
      urbTerm.first(function (json) {
        bot.sendMessage({
          to: channelID,
          message: json.permalink
        })
      })
    }
  }
}
