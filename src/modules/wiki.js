'use strict'

var Wiki = require('wikijs')
var wiki = new Wiki()

module.exports = {
  names: ['wiki'],
  onMessage: function (bot, user, userID, channelID, message, rawEvent) {
    var term = message.split(' ').splice(1).join()
    wiki.search(term).then((data) => {
      var list = data.results
      var selected = list[0]
      var url = 'https://en.wikipedia.org/wiki/'
      var msgPart = url + selected
      var msg = msgPart.replace(' ', '%20')
      bot.sendMessage({
        to: channelID,
        message: msg
      })
    })
  }
}
