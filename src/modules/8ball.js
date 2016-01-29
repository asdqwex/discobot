'use strict'

var eightBallArray = [ 'It is certain', 'It is decidedly so', 'Without a doubt', 'Yes, definitely', 'You may rely on it', 'As I see it, yes', 'Most likely', 'Outlook good', 'Yes', 'Signs point to yes', 'Reply hazy try again', 'Ask again later', 'Better not tell you now', 'Cannot predict now', 'Concentrate and ask again', 'Do nOt count on it', 'My reply is no', 'My sources say no', 'Outlook not so good', 'Very doubtful' ]

module.exports = {
  names: ['8ball'],
  onMessage: function (bot, user, userID, channelID, message, rawEvent, {random}) {
    const eightBallReply = random.pick(eightBallArray)
    bot.sendMessage({
      to: channelID,
      message: `${eightBallReply}`
    })
  }
}
