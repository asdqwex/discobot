'use strict'
import Flipper from 'imgflipper'
module.exports = {
  names: ['meme'],
  onMessage: function (bot, user, userID, channelID, message, rawEvent) {
    const imgParts = message.split('"')
    const memeType = imgParts[0].split(' ')[1]
    const memeList = {
      '10guy': 101440,
      'allthethings': 61533,
      'amitheonly': 259680,
      'awkward': 13757816,
      'blb': 61585,
      'brace': 61546,
      'collegeliberal': 74914,
      'confession': 100955,
      'doge': 8072285,
      'dontyousquidward': 101511,
      'drevil': 40945639,
      'ermahgerd': 101462,
      'firstday': 71851,
      'firstworld': 61539,
      'flanders': 23111215,
      'fry': 61520,
      'gnomechild': 32782815,
      'grandma': 61556,
      'grumpycat': 405658,
      'homophobic': 473432,
      'illhaveyouknow': 326093,
      'keanu': 61583,
      'kermit': 16464531,
      'leocheers': 5496396,
      'morganfreeman': 6301560,
      'morpheus': 100947,
      'mostinteresting': 61532,
      'notime': 442575,
      'onedoesnot': 61579,
      'raptor': 61516,
      'satisfied': 23909796,
      'scumbagsteve': 61522,
      'skeptical': 101288,
      'sohot': 21604248,
      'spiderman': 1366993,
      'success': 61544,
      'sushi': 11512189,
      'toodamnhigh': 61580,
      'unhelpful': 100957,
      'veiny': 53274851,
      'wonka': 61582,
      'wouldbegreat': 563423,
      'wtf': 412211,
      'yoda': 54811264,
      'yodawg': 101716,
      'yuno': 61527
    }
    const imgFlip = new Flipper('discobot1', 'discobotpass123')
    const memeTopText = imgParts[1] ? imgParts[1] : ''
    const memeBottomText = imgParts[3] ? imgParts[3] : ''
    imgFlip.generateMeme(
      memeList[memeType], memeTopText,
      memeBottomText,
      (err, image) => {
        if (err) {
          console.log(err)
          return
        }
        bot.sendMessage({
          to: channelID,
          message: image
        })
      })
  }
}
