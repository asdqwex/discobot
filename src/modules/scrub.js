'use strict'

module.exports = {
  names: ['who is the scrub?'],
  onMessage: function (bot, user, userID, channelID, message, rawEvent) {
    const scrub = bot.my_guild.members[Math.floor(Math.random() * bot.my_guild.members.length)].user.username
    bot.sendMessage({
      to: channelID,
      message: scrub + ' is the fucking scrub'
    })
  }
}
