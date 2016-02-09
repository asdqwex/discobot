'use strict'

module.exports = {
  names: ['cat'],
  onMessage: function (bot, user, userID, channelID, message, rawEvent) {
    var term = 'cat'
    var google = require('googleapis')
    var customsearch = google.customsearch('v1')

    // You can get a custom search engine id at
    // https://www.google.com/cse/create/new
    const CX = process.env.GOOGLE_CSE_ID
    const API_KEY = process.env.GOOGLE_KEY
    const SEARCH = term

    customsearch.cse.list({ cx: CX, q: SEARCH, auth: API_KEY, searchType: 'image', num: 10 }, function (err, resp) {
      if (err) {
        console.log('An error occured', err)
        return
      }
      // Got the response from custom search
      console.log('Result: ' + resp.searchInformation.formattedTotalResults)
      if (resp.items && resp.items.length > 0) {
        var msg = resp.items[Math.floor(Math.random() * resp.items.length)].link
        bot.sendMessage({
          to: channelID,
          message: msg
        })
      }
    })
  }
}
