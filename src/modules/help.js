'use strict'

module.exports = {
  names: ['help', 'commands'],
  data: [
    'Here are the things I can do for you master:',
    '\n',
    'ping                    - say pong',
    'giphy <term>            - post a damn giph',
    '(╯°□°）╯︵ ┻━┻          - will flip all table back upright',
    'yomama                  - tell a yo mama joke',
    'xkcd                    - get todays xkcd comic',
    'fortune                 - get a random fortune message',
    'game                    - set bots game title',
    'goodshit                - Good shit.',
    'roll                    - roll some dice! (try roll 2d10)',
    'who is the scrub        - Finds the scrub',
    'decide thing1 or thing2 - pick randomly between the two',
    'remind me at 00:00 01/12 thing   - Reminds you of something at the given time',
    'meme <memeName> "topText" "bottomText" - generates an image macro with the specified attributes',
    'urban <term>             - return the urban dictionary page for a term or use random for the lols',
    'youtube <term>           - return youtube search for term',
    '8ball <question>   - answer question with random result',
    'lol status         - return status of league servers',
    'say <phrase>	- utilize TTS to speak phrase',
    'coin		- flips a coin',
    'cat    - gets you a picture of a cat',
    '\n'
  ],
  onMessage: function (bot, user, userID, channelID, message, rawEvent) {
    bot.sendMessage({
      to: channelID,
      message: this.data.join('\n')
    })
  }
}
