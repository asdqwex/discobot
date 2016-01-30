'use strict'

var request = require('request')

module.exports = {
  names: ['lol'],
  onMessage: function (bot, user, userID, channelID, message, rawEvent) {
    var verb = message.split(' ').splice(1).join()
    if (verb === 'status') {
      var reqUrl = 'http://status.leagueoflegends.com/shards/na'
      request(reqUrl, function (error, response, body) {
        if (!error && response.statusCode === 200) {
          var data = JSON.parse(body)
          data.services.forEach(function (item) {
            var statusMessage = 'NA ' + item.name + ' Status is ' + item.status
            bot.sendMessage({
              to: channelID,
              message: statusMessage
            })
          })
        }
      })
    }
  }
}

