'use strict'
module.exports = {
  names: ['join'],
  onMessage: function (bot, user, userID, channelID, message, rawEvent) {
    const join = message.split(' ')[0]
    const inviteLink = message.split(' ')[1]
    // Join specified server using invite link/code
    if (join === 'join') {
      // Check to see if the provided code is a URL or code
      const inviteCode = inviteLink.match(/^https/) ? inviteLink.split('/')[3] : inviteLink
      bot.acceptInvite(inviteCode)
    }
  }
}
