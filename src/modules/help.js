'use strict'

module.exports = {
  names: ['help', 'commands'],
  onMessage: function (bot, user, userID, channelID, message, rawEvent) {
    bot.sendMessage({
      to: channelID,
      message: [
        'Here are the things I can do for you master:',
        '\n',
        'ping				             - say pong',
        'giphy <term>		         - post a damn giph',
        '(╯°□°）╯︵ ┻━┻	         - will flip all table back upright',
        'yomama				           - tell a yo mama joke',
        'xkcd				             - get todays xkcd comic',
        'fortune			           - get a random fortune message',
        'game                    - set bots game title',
        'goodshit                - Good shit.',
        'roll                    - roll some dice! (try roll 2d10)',
        'who is the scrub        - Finds the scrub',
        'decide thing1 or thing2 - pick randomly between the two',
        'remind me at 00:00 01/12 thing   - Reminds you of something at the given time',
        'meme <memeName> "topText" "bottomText" - generates an image macro with the specified attributes',
        'urban <term>             - return the urban dictionary page for a term or use random for the lols',
        'youtube <term>           - return youtube search for term',
        '\n'
      ].join('\n')
    })
  }
}
