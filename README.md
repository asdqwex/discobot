# Discobot

[![Build Status](https://img.shields.io/circleci/project/asdqwex/discobot/master.svg?style=flat-square)](https://circleci.com/gh/asdqwex/discobot) [![npm version](https://img.shields.io/npm/v/discobot.svg?style=flat-square)](https://www.npmjs.com/package/discobot) [![Code Climate](https://img.shields.io/codeclimate/github/asdqwex/discobot.svg?style=flat-square)](https://codeclimate.com/github/asdqwex/discobot) [![Dependency Status](https://img.shields.io/david/asdqwex/discobot.svg?style=flat-square)](https://david-dm.org/asdqwex/discobot) [![devDependency Status](https://img.shields.io/david/dev/asdqwex/discobot.svg?style=flat-square)](https://david-dm.org/asdqwex/discobot#info=devDependencies)

[![npm downloads](https://img.shields.io/npm/dm/discobot.svg?style=flat-square)](https://www.npmjs.com/package/discobot) [![js-standard-style](https://img.shields.io/badge/code%20style-standard-brightgreen.svg?style=flat-square)](https://github.com/asdqwex/discobot)

Discobot is a bot for [Discord](discordapp.com) built with JavaScript!

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
|`NO_HAILING`| false | - |

Note that `DISCORD_GUILD`, `DISCORD_VOICE_CHANNEL` and `DISCORD_TEXT_CHANNEL` can be either names or IDs

If you've cloned the project, you can follow the development instructions below:

### In discord:
Use `HAILING` + `BOT_NAME` to talk to your bot, so `!bot` by default.

# Development:
Run `npm install` to get setup, then:

`BOT_NAME=my_bot DISCORD_EMAIL=some_email DISCORD_PASSWORD=some_pass npm run dev`

You can now edit the code and the bot will automatically restart and reconnect on file-save. You can also use `npm start` instead of `npm run dev` if you'd just like to test your current build.

To play audio locally, you'll need to install ffmpeg:
#### OSX:
`brew install ffmpeg`
#### Windows:
Install FFMPEG from http://ffmpeg.zeranoe.com/builds/ (the very first column - x32 and x64)
#### Linux
Typically the package is called `ffmpeg` - `libav-tools` will also work.

# Docker:
`docker run -e "DISCORD_EMAIL=discord@email.com" -e "DISCORD_PASSWORD=some_password" -it erulabs/discobot`
