'use strict'

import fs from 'fs'
// We'll use a little json file for now... Where is our production server?!
const dbfile = '_quotes_db.json'

// Allows quotes to be stored and retrieved via `!bot quote`
class QuoteDB {
  constructor () {
    let initialQuotes = {}
    if (fs.existsSync(dbfile)) initialQuotes = JSON.parse(fs.readFileSync(dbfile))
    this.quotes = initialQuotes
  }
  set (author, quote) {
    if (!author) {
      author = 'anon'
      quote = author
    }
    this.quotes[author] = quote
    this.save()
  }
  // Todo: Maybe fuzzy match across all quotes?
  random () {
    const keys = Object.keys(this.quotes)
    const author = keys[Math.floor(Math.random() * keys.length)]
    return {
      author, quote: this.quotes[author]
    }
  }
  save () {
    fs.writeFile(dbfile, JSON.stringify(this.quotes))
  }
}

const quoteDB = new QuoteDB()

module.exports = {
  QuoteDB,
  names: ['quote'],
  onMessage: function (bot, user, userID, channelID, message, rawEvent) {
    const messages = message.split(' ')
    messages.shift()
    if (messages.length === 0) {
      const quote = quoteDB.random()
      bot.sendMessage({
        to: channelID,
        message: `"${quote.quote}" _- ${quote.author}_`
      })
    } else {
      let author = false
      if (messages.length > 1) author = messages[1]
      quoteDB.set(author, messages[0])
    }
    bot.sendMessage({
      to: channelID,
      message: 'pong, mother fucker'
    })
  }
}
