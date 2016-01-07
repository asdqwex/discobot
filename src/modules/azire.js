'use strict'

const fs = require('fs')
const clipList = fs.readdirSync('./Azire')
const Sifter = require('sifter')
const sifter = new Sifter(clipList.map(function (clip) {
  return { name: clip }
}))

module.exports = {
  names: 'azire',
  onMessage: function (bot, user, userID, channelID, message, rawEvent) {
    //
    // Azire Soundboard - all credit to the Falcon
    //
    if (!bot.voiceReady) return false
    const messages = message.split(' ')
    messages.shift()
    if (messages.length === 0) { // Random
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
      if (messages[0] === '--list') {
        bot.sendMessage({
          to: channelID,
          message: 'See https://github.com/asdqwex/discobot/tree/master/Azire'
        })
      } else {
        const results = sifter.search(messages.join(' '), {
          fields: [ 'name' ],
          sort: [{ field: 'score', direction: 'asc' }],
          limit: 1
        })
        if (results.total > 0) {
          console.log(`${clipList[results.items[0].id]} won with a score of ${results.items[0].score}`)
          bot.getAudioContext({
            channel: bot.DISCORD_CHANNEL,
            stereo: true
          }, function (stream) {
            stream.playAudioFile('./Azire/' + clipList[results.items[0].id])
          })
        }
      }
    }
  }
}
