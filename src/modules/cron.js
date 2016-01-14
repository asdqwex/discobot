'use strict'

module.exports = {
  names: ['cron'],
  onMessage: function (bot, user, userID, channelID, message, rawEvent) {
    const messages = message.split(' ')
    messages.shift()
    console.log(messages)
    if (messages[0] === 'list') {
      console.log('listing crons')
    } else if (messages[0] === 'enable') {
      console.log('enabling crons')
    } else if (messages[0] === 'disable') {
      console.log('disabling cron')
    } else {
      console.log('invalid cron command')
    }
    bot.sendMessage({
      to: channelID,
      message: 'pong, mother fucker'
    })
  }
}
