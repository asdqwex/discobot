'use strict'

// Modules
const DiscordClient = require('discord.io')

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
const bot = new DiscordClient({
  email: process.env.DISCORD_EMAIL,
  password: process.env.DISCORD_PASSWORD,
  autorun: true
})
bot.BOT_NAME = BOT_NAME
bot.DISCORD_CHANNEL = DISCORD_CHANNEL

const glob = require('glob')
const modules = []
glob('_build/modules/*.js', function (err, files) {
  if (err) throw new Error(err)
  else {
    for (let i = 0; i < files.length; i++) {
      const module = require('./' + files[i].replace('_build/', ''))
      if (!module.names) {
        console.log(`Warning! ${files[i]} ignored as it has no .names propery`)
        continue
      }
      modules.push(module)
    }

    const Sifter = require('sifter')
    const sifter = new Sifter(modules)
    const hailing_frequency = '!' + BOT_NAME

    const onMessage = function (user, userID, channelID, message, rawEvent) {
      // Anything after this point needs to be addressed to us (!bot action)
      if (message.substr(0, hailing_frequency.length) !== hailing_frequency) return undefined
      // Help text for "!bot"
      if (message === hailing_frequency || message === hailing_frequency + '--help') {
        return bot.sendMessage({
          to: channelID,
          message: HELP_TEXT
        })
      }
      const trimmed = message.replace(hailing_frequency + ' ', '').trimLeft()
      const results = sifter.search(trimmed.split(' ')[0], {
        fields: [ 'names' ],
        sort: [{ field: 'score', direction: 'asc' }],
        limit: 1
      })
      if (results.total > 0) {
        const module = modules[results.items[0].id]
        console.log(`${user} called ${module.names} with "${trimmed}" by a score of ${results.items[0].score}`)
        modules[results.items[0].id](bot, user, userID, channelID, trimmed, rawEvent)
      }
    }

    bot.on('ready', function (data) {
      bot.general_channel = data.d.guilds[0].channels.filter(function (chan) {
        if (chan.name === 'general' && chan.type === 'text') return true
      })[0].id
      bot.presences = data.d.guilds[0].presences
      bot.joinVoiceChannel(DISCORD_CHANNEL, function () {
        bot.on('message', onMessage)
        bot.on('presence', function (name, id, status, game) {
          if (game) {
            return bot.sendMessage({
              to: bot.general_channel,
              message: `${name} has begun playing ${game}!`
            })
          }
        })
      })
    })
  }
})
