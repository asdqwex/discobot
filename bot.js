'use strict'

const XMLHttpRequest = require('xmlhttprequest').XMLHttpRequest
const DiscordClient = require('discord.io')
const fs = require('fs')

var array = fs.readFileSync('.secrets').toString().split(`\n`)

var bot = new DiscordClient({
  email: array[0],
  password: array[1],
  autorun: true
})

bot.on('ready', function () {
  console.log('connected')
  console.log('joining channel')
  bot.joinVoiceChannel('123201770355687424', function () {
    bot.on('message', function (user, userID, channelID, message, rawEvent) {
      if (message === 'ping') {
        bot.sendMessage({
          to: channelID,
          message: 'pong'
        })
      } else if (message === 'robot slave speak') {
        bot.sendMessage({
          to: channelID,
          message: `Here are the things I can do for you master:\n
ping - say pong
giphy <term> - post a damn giph
where is azire - play random cody clip`
        })
      } else if (message.substring(0, 5) === 'giphy') {
        const gipher = message.slice(6)
        const theUrl = 'http://api.giphy.com/v1/gifs/random?api_key=dc6zaTOxFJmzC&tag=' + gipher
        const xmlHttp = new XMLHttpRequest()
        xmlHttp.open('GET', theUrl, false)
        xmlHttp.send(null)
        const out = JSON.parse(xmlHttp.responseText)
        bot.sendMessage({
          to: channelID,
          message: out.data.url
        })
      } else if (message.substring(0, 14) === 'where is azire') {
        const clipList = fs.readdirSync('./Azire')
        const item = './Azire/' + clipList[Math.floor(Math.random() * clipList.length)]
        bot.getAudioContext({ channel: '123201770355687424', stereo: true }, function (stream) {
          console.log('play audio file', item)
          stream.playAudioFile(item)
        })
      }
    })
  })
})
