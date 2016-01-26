'use strict'

const request = require('request')

module.exports = {
  names: ['xkcd'],
  onMessage: function (bot, user, userID, channelID, message, rawEvent) {
    request('http://xkcd.com/info.0.json', function (msg, response, body) {
      var img = JSON.parse(body).img
      bot.sendMessage({
        to: channelID,
        message: img
      })
    })
  }
}
