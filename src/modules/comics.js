'use strict'

var request = require('request')

module.exports = {
  names: ['comic'],
  onMessage: function (bot, user, userID, channelID, message, rawEvent) {
    var term = message.split(' ').splice(1).join(' ')
    if (term === 'c&h') {
      var r = request.get('http://explosm.net/comics/random', function (err, res, body) {
        if (err) {
          console.log(err)
        }
        bot.sendMessage({
          to: channelID,
          message: r.uri.href
        })
      })
    }
  }
}
