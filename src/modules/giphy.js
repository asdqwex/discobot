'use strict'

const giphy = require('giphy-api')(process.env.GIPHY_KEY || 'dc6zaTOxFJmzC')

const Giphy = function (bot, user, userID, channelID, message, rawEvent) {
  //
  // Giphy
  //
  const messages = message.split(' ')
  messages.shift()
  let giphy_type = 'translate'
  if (messages.length === 0) giphy_type = 'random'
  giphy[giphy_type]({
    s: messages.join(' '),
    limit: 1
  }).then(function (results) {
    if (results && results.data) {
      bot.sendMessage({
        to: channelID,
        message: results.data.url
      })
    } else {
      bot.sendMessage({
        to: channelID,
        message: `I don't know what you searched but it was fucking retarded and therefore had zero results.`
      })
    }
  })
}

Giphy.names = ['giphy', 'gif']

module.exports = Giphy
