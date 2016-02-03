'use strict'

const random = require('random-js')()

module.exports = {
  names: ['decide', 'pick'],
  help_text: 'decide <a> <b> - Choose a random thing',
  onMessage: function (bot, user, userID, channelID, message, rawEvent) {
    const thing = random.pick(message.split(' ').slice(1).filter(x => x !== 'or'))
    bot.sendMessage({
      to: channelID,
      message: thing
    })
  }
}
