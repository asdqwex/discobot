'use strict'

const imgFlipper = require('imgflipper')

module.exports = {
  names: ['meme'],
  onMessage: function (bot, user, userID, channelID, message, rawEvent) {
	  const imgParts = message.split('"')
		var memeType = imgParts[0].split(' ')[1]
		var memeMessages = imgParts[1] + " " + imgParts[3]
		var memeList = {
			"brace": 61546,
			"mostinteresting": 61532,
			"fry": 61520,
			"onedoesnot": 61579,
			"yuno": 61527,
			"success": 61544,
			"allthethings": 61533,
			"doge": 8072285,
			"drevil": 40945639,
			"skeptical": 101288,
			"notime": 442575,
			"yodawg": 101716,
			"leocheers": 5496396,
			"10guy": 101440,
			"raptor": 61516,
			"blb": 61585,
			"kermit": 16464531,
			"wonka": 61582,
			"wouldbegreat": 563423,
			"grumpycat": 405658,
			"confession": 100955,
			"awkward": 13757816,
			"keanu": 61583,
			"scumbagsteve": 61522,
			"firstworld": 61539,
			"wtf": 412211,
			"ermahgerd": 101462,
			"morpheus": 100947,
			"collegeliberal": 74914,
			"amitheonly": 259680,
			"grandma": 61556,
			"toodamnhigh": 61580,
			"dontyousquidward": 101511,
			"illhaveyouknow": 326093,
			"satisfied": 23909796,
			"unhelpful": 100957,
			"firstday": 71851,
			"spiderman": 1366993,
			"homophobic": 473432,
			"gnomechild": 32782815,
			"morganfreeman": 6301560,
			"sohot": 21604248,
			"yoda": 54811264,
			"sushi": 11512189,
			"veiny": 53274851,
			"flanders": 23111215
	  }
		var imgFlip = new imgFlipper("discobot1", "discobotpass123")
		imgFlip.generateMeme(memeList[memeType], imgParts[1]?imgParts[1]:"", imgParts[3]?imgParts[3]:"", function(err, image){
			bot.sendMessage({
				to: channelID,
				message: image
			})
		})

  }
}
