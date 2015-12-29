var XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;
var DiscordClient = require('discord.io');

var fs = require('fs');
var array = fs.readFileSync('.secrets').toString().split("\n");

var bot = new DiscordClient({
    email: array[0],
    password: array[1],
    autorun: true
});

bot.on('ready', function() {
    console.log('connected');
    console.log('joining channel');
    bot.joinVoiceChannel("123201770355687424", function() {
        bot.on('message', function(user, userID, channelID, message, rawEvent) {
            if (message === "ping") {
                bot.sendMessage({
                    to: channelID,
                    message: "pong"
                });
            } else if (message === "robot slave speak") {
                bot.sendMessage({
                    to: channelID,
                    message: "Here are the things I can do for you master: \n\nping - say pong\ngiphy <term> - post a damn giph\nwhere is azire - play random cody clip"
                });
            } else if (message.substring(0,5) === "giphy") {
                gipher = message.slice(6);
                theUrl = "http://api.giphy.com/v1/gifs/random?api_key=dc6zaTOxFJmzC&tag="+gipher;
                var xmlHttp = new XMLHttpRequest();
                xmlHttp.open( "GET", theUrl, false );
                xmlHttp.send( null );
                out = JSON.parse(xmlHttp.responseText);
                bot.sendMessage({
                    to: channelID,
                    message: out.data.url
                });
            } else if (message.substring(0,14) == 'where is azire') {
                clipList = fs.readdirSync('./Azire');
                var item = clipList[Math.floor(Math.random()*clipList.length)];
                item ='./Azire/'+item
                bot.getAudioContext({ channel: "123201770355687424", stereo: true}, function(stream) {
                console.log('play audio file', item);
                        stream.playAudioFile(item); 
                });
            }
        });
    });
});
