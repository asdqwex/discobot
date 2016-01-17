'use strict'

var users = []

module.exports = {
  names: ['who is the scrub?'],
  onMessage: function (bot, user, userID, channelID, message, rawEvent) {
    for (var i in bot.my_guild.members) {
      users.push(bot.my_guild.members[i].user.username)
    }
    var scrub = users[Math.floor(Math.random() * users.length)]
    bot.sendMessage({
      to: channelID,
      message: scrub + ' is the fucking scrub'
    })
  }
}
