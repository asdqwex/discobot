'use strict'

import { LOG } from './../logger.js'

if (!process.env.GOOGLE_KEY) {
  LOG.info('Missing Google api key, this module will not be loaded.')
} else {
  const search = require('youtube-search')
  const opts = {
    maxResults: 50,
    key: process.env.GOOGLE_KEY
  }
  module.exports = {
    names: ['youtube'],
    onMessage: function (bot, user, userID, channelID, message, rawEvent) {
      var term = message.split(' ').splice(1).join()
      search(term, opts, function (err, results) {
        if (err) return LOG.error(err)
        var vid = results[Math.floor(Math.random() * results.length)].link
        bot.sendMessage({
          to: channelID,
          message: vid
        })
      })
    }
  }
}
