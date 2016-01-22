'use strict'

var schedule = require('node-schedule')

module.exports = {
  names: ['remind me', 'reminder'],
  onMessage: function (bot, user, userID, channelID, message, rawEvent) {
    var parts = message.split(' ')
    parts.splice(0, 2)
    var verb = parts.splice(0, 1).join()
    if (verb === 'at') {
      var t = parts.splice(0, 1).join()
      var day = parts.splice(0, 1).join()
      var reminder = parts.join(' ')
      var time_arr = t.split(':')
      var day_arr = day.split('/')
      var year = day_arr[2]
      var month = day_arr[1]
      month = month -= 1
      var aDay = day_arr[0]
      var hour = time_arr[0]
      var minute = time_arr[1]
      var date = new Date(year, month, aDay, hour, minute, 0)
      var name = reminder
      schedule.scheduleJob(name, date, function () {
        bot.sendMessage({
          to: channelID,
          message: '@' + user + ' This is your reminder: ' + reminder
        })
      })
    } else if (verb === 'list') {
      var msg_data = []
      for (var job in schedule.scheduledJobs) {
        if (schedule.scheduledJobs[job] != null) {
          msg_data.push(schedule.scheduledJobs[job].name)
        }
      }
      bot.sendMessage({
        to: channelID,
        message: msg_data
      })
    } else if (verb === 'remove') {
      if (schedule.scheduledJobs[parts]) {
        schedule.scheduledJobs[parts].cancel()
      } else {
        bot.sendMessage({
          to: channelID,
          message: 'invalid job'
        })
      }
    } else {
      bot.sendMessage({
        to: channelID,
        message: 'invalid reminder'
      })
    }
  }
}
