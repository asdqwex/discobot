var XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;
var DiscordClient = require('discord.io');
var bot = new DiscordClient({
    email: "saermon@gmail.com",
    password: "qweasd123",
    autorun: true
});

bot.on('ready', function() {
    console.log(bot.username + " - (" + bot.id + ")");
});

bot.setPresence({
    game: "Serving Humanity since dec 28th, 2105"
})

bot.on('message', function(user, userID, channelID, message, rawEvent) {
    if (message === "ping") {
        bot.sendMessage({
            to: channelID,
            message: "pong"
        });
    } else if (message === "robot slave speak") {
        bot.sendMessage({
            to: channelID,
            message: "Here are the things I can do for you master: \n\nping - say pong\ngiphy <term> - post a damn giph"
        });
    } else if (message.substring(0,5) === "giphy") {
        gipher = message.slice(6);
	console.log(gipher);
	theUrl = "http://api.giphy.com/v1/gifs/random?api_key=dc6zaTOxFJmzC&tag="+gipher;
	var xmlHttp = new XMLHttpRequest();
        xmlHttp.open( "GET", theUrl, false );
        xmlHttp.send( null );
	out = JSON.parse(xmlHttp.responseText);
	bot.sendMessage({
            to: channelID,
            message: out.data.url
        });
    }
});
