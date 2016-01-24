'use strict'
module.exports = {
  names: ['join'],
  onMessage: function (bot, user, userID, channelID, message, rawEvent) {
    const inviteLink = message.split(' ')[1]
    // Check to see if the provided code is a URL or code
    const inviteCode = inviteLink.match(/^https/) ? inviteLink.split('/')[3] : inviteLink
    bot.acceptInvite(inviteCode)
  }
}
