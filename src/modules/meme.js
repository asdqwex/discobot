'use strict'

const imgflip = require('imgflipper')

module.exports = {
  names: ['meme'],
  onMessage: function (bot, user, userID, channelID, message, rawEvent) {
	  const imgParts = message.split('"')
		var memeType = imgParts[0].split(' ')[1]
		
		bot.sendMessage({
			to: channelID,
			message: imgParts
		})
		bot.sendMessage({
			to: channelID,
			message: memeType
		})
  }
}
