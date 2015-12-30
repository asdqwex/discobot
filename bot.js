'use strict'

const DiscordClient = require('discord.io')
const fs = require('fs')
const path = require('path')
const XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;

const BOT_NAME = process.env.BOT_NAME || 'bot'

if (!process.env.DISCORD_EMAIL || !process.env.DISCORD_PASSWORD) {
  process.stdout.write(`Please define DISCORD_EMAIL and DISCORD_PASSWORD environment variables\n`)
  process.exit(1)
}

const DISCORD_CHANNEL = process.env.DISCORD_CHANNEL || '123201770355687424'

// const giphy = require('giphy-api')(process.env.GIPHY_KEY || 'dc6zaTOxFJmzC')
const clipList = fs.readdirSync('./Azire')

const HELP_TEXT = [ 'Here are the things I can do for you master:',
                    'ping - say pong',
                    'giphy <term> - post a damn giph',
                    'azire - play random cody clip'
                  ].join('\n')

var bot = new DiscordClient({
  email: process.env.DISCORD_EMAIL,
  password: process.env.DISCORD_PASSWORD,
  autorun: true
})

bot.on('ready', function () {
  console.log('connected')
  bot.joinVoiceChannel(DISCORD_CHANNEL, function () {
    bot.on('message', function (user, userID, channelID, message, rawEvent) {
      const messages = message.split(' ')
      if (message.indexOf('(╯°□°）╯︵ ┻━┻') > -1) {
        var count = (message.match(/\(\╯\°\□\°\）\╯\︵ \┻\━\┻/g) || []).length
        var tableArray = []
        for (var i = 0; i < count; i++) { 
          tableArray.push('┬─┬ ノ( ゜-゜ノ)')
        }
        var tables = tableArray.join(' ')
        return bot.sendMessage({
          to: channelID,
          message: tables
        })
      }
      if (messages[0] !== '@' + BOT_NAME) return undefined
      if (messages.length < 2) {
        return bot.sendMessage({
          to: channelID,
          message: HELP_TEXT
        })
      }
      const action = messages[1]
      if (action === 'ping') {
        bot.sendMessage({
          to: channelID,
          message: 'pong'
        })
      } else if (action === 'giphy') {
        var gipher = message.slice(11); 
        var theUrl = "http://api.giphy.com/v1/gifs/random?api_key=dc6zaTOxFJmzC&tag="+gipher;
        var xmlHttp = new XMLHttpRequest();
        xmlHttp.open( "GET", theUrl, false );
        xmlHttp.send( null );
        var out = JSON.parse(xmlHttp.responseText);
        bot.sendMessage({
          to: channelID,
          message: out.data.url
        });

//        const GIPHY_QUERY = message.slice(6)
//        let giphy_functor = 'trending'
//        if (GIPHY_QUERY.length > 0) {
//          giphy_functor = 'search'
//        }
//        giphy[giphy_functor]({
//          q: GIPHY_QUERY,
//          limit: 1
//        }).then(function (results) {
//          if (results && results.data && results.data.length > 0) {
//            bot.sendMessage({
//              to: channelID,
//              message: results.data[0].url
//            })
//          } else {
//            bot.sendMessage({
//              to: channelID,
///              message: `I don't know what you searched but it was fucking retarded and therefore had zero results.`
//            })
//          }
//        })
      } else if (action === 'azire') {
        if (messages.length <= 2) {
          const chosen = clipList[Math.floor(Math.random() * clipList.length)]
          const item = './Azire/' + chosen
          bot.getAudioContext({
            channel: DISCORD_CHANNEL,
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
            messages.shift()
            messages.shift()
            const query = messages.join('_').replace(' ', '_').replace('.mp3', '').replace('"', '')
            const attempt = './Azire/' + query + '.mp3'
            if (fs.existsSync(attempt)) {
              bot.getAudioContext({
                channel: DISCORD_CHANNEL,
                stereo: true
              }, function (stream) {
                console.log(`playing audio file, "${attempt}"`)
                stream.playAudioFile(attempt)
              })
            }
          }
        }
      }
    })
  })
})
