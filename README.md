# discobot [![npm version](https://badge.fury.io/js/discobot.svg)](https://badge.fury.io/js/discobot) [![Docker Repository on Quay](https://quay.io/repository/erulabs/discobot/status "Docker Repository on Quay")](https://quay.io/repository/erulabs/discobot) [![Stories in Ready](https://badge.waffle.io/asdqwex/discobot.svg?label=ready&title=Ready)](http://waffle.io/asdqwex/discobot) [![Circle CI](https://circleci.com/gh/asdqwex/discobot.svg?style=svg)](https://circleci.com/gh/asdqwex/discobot)

[![js-standard-style](https://cdn.rawgit.com/feross/standard/master/badge.svg)](https://github.com/feross/standard)
[![NPM](https://nodei.co/npm/discobot.png?downloads=true&downloadRank=true&stars=true)](https://nodei.co/npm/discobot/)

Discobot is a robot for [Discord](discordapp.com)!

This is a truly open project! Pull requests will be merged and we will happily give out contributor access to those who contribute!

# Usage:
 - Install: `npm install -g discobot`
 - Use: `DISCORD_EMAIL=foo DISCORD_PASSWORD=bar discobot`

Discobot's configuration is environment variable only. The available options are:

|environment variable|default|required|
|---|---|---|
|`DISCORD_EMAIL`| - | yes |
|`DISCORD_PASSWORD`| - | yes |
|`DISCORD_GUILD`| Will connect to first guild in accounts roster | - |
|`DISCORD_VOICE_CHANNEL`| Will connect to the General voice channel | - |
|`DISCORD_TEXT_CHANNEL`| Will connect to the general voice chat | - |
|`BOT_NAME`| bot | - |
|`HAILING`| ! | - |

Note that `DISCORD_GUILD`, `DISCORD_VOICE_CHANNEL` and `DISCORD_TEXT_CHANNEL` can be either names or IDs

If you've cloned the project, you can follow the development instructions below:

### In discord:
Use `HAILING` + `BOT_NAME` to talk to your bot, so `!bot` by default.

# Development:
Run `npm install` to get setup, then:

`BOT_NAME=my_bot DISCORD_EMAIL=some_email DISCORD_PASSWORD=some_pass gulp watch`

You can now edit the code and the bot will automatically restart and reconnect on file-save. You can also use `npm start` instead of `gulp watch` if you'd just like to test your current build.

To play audio locally, you'll need to install ffmpeg:
#### OSX:
`brew install ffmpeg`
#### Windows:
Install FFMPEG from http://ffmpeg.zeranoe.com/builds/ (the very first column - x32 and x64)
#### Linux
Typically the package is called `ffmpeg` - `libav-tools` will also work.

# Docker:
`docker run -e "DISCORD_EMAIL=discord@email.com" -e "DISCORD_PASSWORD=some_password" -it erulabs/discobot`
