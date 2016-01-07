'use strict'

module.exports = {
  names: '(╯°□°）╯︵ ┻━┻',
  onMessage: function (bot, user, userID, channelID, message, rawEvent) {
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
  }
}
