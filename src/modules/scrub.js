'use strict'

module.exports = {
  names: ['who is the scrub?'],
  onMessage: function (bot, user, userID, channelID, message, rawEvent, {random}) {
    const scrub = random.pick(bot.my_guild.members).user.username
    bot.sendMessage({
      to: channelID,
      message: `${scrub} is the fucking scrub`
    })
  }
}
