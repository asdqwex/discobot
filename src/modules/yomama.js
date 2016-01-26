'use strict'

const request = require('request')

module.exports = {
  names: ['yomama'],
  onMessage: function (bot, user, userID, channelID, message, rawEvent) {
    request('http://api.yomomma.info/', function (msg, response, body) {
      var joke = JSON.parse(body).joke
      bot.sendMessage({
        to: channelID,
        message: joke
      })
    })
  }
}
