'use strict'

const fs = require('fs')
const path = require('path')
const clipList = fs.readdirSync('./Azire')

const Azire = function (bot, user, userID, channelID, message, rawEvent) {
  //
  // Azire Soundboard - all credit to the Falcon
  //
  const messages = message.split(' ')
  if (messages.length <= 2) {
    const chosen = clipList[Math.floor(Math.random() * clipList.length)]
    const item = './Azire/' + chosen
    bot.getAudioContext({
      channel: bot.DISCORD_CHANNEL,
      stereo: true
    }, function (stream) {
      console.log(`playing audio file, "${chosen}"`)
      stream.playAudioFile(item)
    })
  } else {
    if (messages[2] === '--list') {
      bot.sendMessage({
        to: channelID,
        message: 'See https://github.com/asdqwex/discobot/tree/master/Azire'
      })
    } else {
      messages.shift(); messages.shift()
      const query = messages.join('_').replace(' ', '_').replace('.mp3', '').replace('"', '')
      const attempt = './Azire/' + path.basename(query) + '.mp3'
      if (fs.existsSync(attempt)) {
        bot.getAudioContext({
          channel: bot.DISCORD_CHANNEL,
          stereo: true
        }, function (stream) {
          console.log(`playing audio file, "${attempt}"`)
          stream.playAudioFile(attempt)
        })
      }
    }
  }
}

Azire.names = 'azire'

module.exports = Azire
