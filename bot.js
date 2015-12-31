'use strict'

// Modules
const DiscordClient = require('discord.io')
const fs = require('fs')
const path = require('path')

// Constants
const BOT_NAME = process.env.BOT_NAME || 'bot'
const DISCORD_CHANNEL = process.env.DISCORD_CHANNEL || '123201770355687424'
const HELP_TEXT = [ 'Here are the things I can do for you master:',
                    'ping - say pong',
                    'giphy <term> - post a damn giph',
                    'azire - play random cody clip'
                  ].join('\n')
if (!process.env.DISCORD_EMAIL || !process.env.DISCORD_PASSWORD) {
  process.stdout.write('Please define DISCORD_EMAIL and DISCORD_PASSWORD environment variables\n')
  process.exit(1)
}

// Initialization
const giphy = require('giphy-api')(process.env.GIPHY_KEY || 'dc6zaTOxFJmzC')
const clipList = fs.readdirSync('./Azire')
const bot = new DiscordClient({
  email: process.env.DISCORD_EMAIL,
  password: process.env.DISCORD_PASSWORD,
  autorun: true
})

const onMessage = function (user, userID, channelID, message, rawEvent) {
  const messages = message.split(' ')
  //
  // Table flipper!
  //
  if (message.indexOf('(╯°□°）╯︵ ┻━┻') > -1) {
    const count = (message.match(/\(\╯\°\□\°\）\╯\︵ \┻\━\┻/g) || []).length
    const tableArray = []
    for (let i = 0; i < count; i++) {
      tableArray.push('┬─┬ ノ( ゜-゜ノ)')
    }
    return bot.sendMessage({
      to: channelID,
      message: tableArray.join(' ')
    })
  }
  // Anything after this point needs to be addressed to us (!bot action)
  if (messages[0] !== '!' + BOT_NAME) return undefined
  // Help text for "!bot"
  if (messages.length < 2) {
    return bot.sendMessage({
      to: channelID,
      message: HELP_TEXT
    })
  }
  const action = messages[1]
  if (action === 'ping') {
    // Ping
    bot.sendMessage({
      to: channelID,
      message: 'pong'
    })
  } else if (action === 'giphy' || action === 'gif') {
    //
    // Giphy
    //
    messages.shift(); messages.shift()
    giphy.translate({
      s: messages.join(' '),
      limit: 1
    }).then(function (results) {
      if (results && results.data) {
        bot.sendMessage({
          to: channelID,
          message: results.data.url
        })
      } else {
        bot.sendMessage({
          to: channelID,
          message: `I don't know what you searched but it was fucking retarded and therefore had zero results.`
        })
      }
    })
  } else if (action === 'azire') {
    //
    // Azire Soundboard - all credit to the Falcon
    //
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
        messages.shift(); messages.shift()
        const query = messages.join('_').replace(' ', '_').replace('.mp3', '').replace('"', '')
        const attempt = './Azire/' + path.basename(query) + '.mp3'
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
}

bot.on('ready', function () {
  console.log('connected')
  bot.joinVoiceChannel(DISCORD_CHANNEL, function () {
    bot.on('message', onMessage)
  })
})
