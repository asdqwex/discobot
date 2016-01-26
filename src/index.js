'use strict'

// Libraries!
const DiscordClient = require('discord.io')
const glob = require('glob')
const Sifter = require('sifter')
const schedule = require('node-schedule')
import Random from 'random-js'
const random = new Random(Random.engines.mt19937().autoSeed())

const dependencies = {
  random
}

// All configuration is done via Environment Variables
if (!process.env.DISCORD_EMAIL || !process.env.DISCORD_PASSWORD) {
  console.log(`Please define DISCORD_EMAIL and DISCORD_PASSWORD environment variables`)
  process.exit(1)
}
if (!process.env.DISCORD_GUILD) console.warn(`Warning: DISCORD_GUILD unset - joining first guild`)
if (!process.env.DISCORD_VOICE_CHANNEL) console.warn(`Warning: DISCORD_VOICE_CHANNEL unset - joining 'General'`)
if (!process.env.DISCORD_TEXT_CHANNEL) console.warn(`Warning: DISCORD_TEXT_CHANNEL unset - joining 'general'`)

// Initialization
const bot = new DiscordClient({
  email: process.env.DISCORD_EMAIL,
  password: process.env.DISCORD_PASSWORD,
  autorun: true
})
bot.BOT_NAME = process.env.BOT_NAME || 'bot'
// This is the default text channel that
bot.DISCORD_GUILD = process.env.DISCORD_GUILD || undefined
bot.DISCORD_TEXT_CHANNEL = process.env.DISCORD_TEXT_CHANNEL || 'general'
bot.DISCORD_VOICE_CHANNEL = process.env.DISCORD_VOICE_CHANNEL || 'General'

// We will load all the code from the "modules" directory, and put the object each file exports into this array:
const modules = {}
// Used to sort thru modules
let sifter
// The bots name plus the identifier
let hailing_frequency = (process.env.HAILING || '!') + bot.BOT_NAME
if (process.env.NO_HAILING) hailing_frequency = bot.BOT_NAME

const initialize = function () {
  glob('_build/modules/*.js', function (err, files) {
    // Bail out if the modules directory doesn't exist. Your install is fucked?
    if (err) throw new Error(err)
    for (let i = 0; i < files.length; i++) {
      try {
        const module = require('./' + files[i].replace('_build/', ''))
        if (!module.names) {
          console.log(`Warning! ${files[i]} ignored as it has no .names propery`)
          continue
        }
        modules[module.names[0]] = module
      } catch (e) {
        console.log(`Failed to load ${module}:`, e.message)
      }
    }
    sifter = new Sifter(modules)
    setupBot()
  })
}

// Connect and determine default channels
const setupBot = function () {
  bot.on('ready', function (data) {
    // First wins if none is defined
    if (!bot.DISCORD_GUILD) bot.DISCORD_GUILD = data.d.guilds[0].id
    // Allow usage of text name or id
    bot.my_guild = data.d.guilds.filter(function (guild) {
      if (guild.name === bot.DISCORD_GUILD || guild.id === bot.DISCORD_GUILD) return true
    })
    if (bot.my_guild.length > 0) bot.my_guild = bot.my_guild[0]
    else {
      console.log(`I was unable to join ${bot.DISCORD_GUILD}, falling back to first`)
      bot.my_guild = data.d.guilds[0]
    }
    console.log(`Connected as "${hailing_frequency}" to "${bot.my_guild.name}"`)
    for (const i in bot.my_guild.channels) {
      const chan = bot.my_guild.channels[i]
      if (chan.name === 'general' && chan.type === 'text') bot.my_general_channel = chan
      if (chan.name === bot.DISCORD_TEXT_CHANNEL && chan.type === 'text') bot.my_text_channel = chan
      else if (chan.name === bot.DISCORD_VOICE_CHANNEL && chan.type === 'voice') bot.my_voice_channel = chan
    }
    onReady()
  })
}

const onReady = function () {
// Cron Jobby bit

  schedule.scheduleJob('xkcd', '0 0 0 * *', function () {
    modules['xkcd'].onMessage(bot, false, false, '131193711743729664', false, false)
  })
// Bot tells us who it is in the test channel
  bot.sendMessage({
    to: '131193711743729664',
    message: 'Hello My Name is ' + hailing_frequency
  })
// Other actions
  bot.on('message', onMessage)
  bot.on('presence', function (name, id, status, game) {
    if (game) {
      return bot.sendMessage({
        to: bot.my_general_channel.id,
        message: `${name} has begun playing ${game}!`
      })
    }
  })
  bot.joinVoiceChannel(bot.my_voice_channel.id)
}

const onMessage = function (user, userID, channelID, message, rawEvent) {
// To get it working, Needs to be solved

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
  if (message.substr(0, hailing_frequency.length) !== hailing_frequency) return undefined
  // Help text for "!bot"
  if (message === hailing_frequency || message === hailing_frequency + '--help' || message === hailing_frequency + 'help' || message === hailing_frequency + 'commands') {
    return bot.sendMessage({
      to: channelID,
      message: [
        'Here are the things I can do for you master:',
        ' ',
        'ping                    - say pong',
        'giphy <term>            - post a damn giph',
        '(╯°□°）╯︵ ┻━┻          - will flip all table back upright',
        'yomama                  - tell a yo mama joke',
        'xkcd                    - get todays xkcd comic',
        'fortune                 - get a random fortune message',
        'game                    - set bots game title',
        'roll                    - roll some dice! (try roll 2d10)',
        'who is the scrub        - Finds the scrub',
        'decide thing1 or thing2 - pick randomly between the two',
        'remind me at 00:00 01/12 thing   - Reminds you of something at the given time',
        'meme <memeName> "topText" "bottomText" - generates an image macro with the specified attributes',
        'urban <term)             - return the urban dictionary page for a term or use random for the lols',
        'youtube <term>           - return youtube search for term'
      ].join('\n')
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
    if (module.onMessage) module.onMessage(bot, user, userID, channelID, trimmed, rawEvent, dependencies)
  }
}

initialize()
