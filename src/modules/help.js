'use strict'

module.exports = {
  names: ['help', 'commands'],
  onMessage: function (bot, user, userID, channelID, message, rawEvent) {
    bot.sendMessage({
      to: channelID,
      message: [
        'Here are the things I can do for you master:',
        '\n',
        'ping				     - say pong',
        'giphy <term>		 - post a damn giph',
        '(╯°□°）╯︵ ┻━┻	 - will flip all table back upright',
        'yomama				   - tell a yo mama joke',
        'xkcd				     - get todays xkcd comic',
        'fortune			   - get a random fortune message',
        'game            - set bots game title',
        '\n'
      ].join('\n')
    })
  }
}
