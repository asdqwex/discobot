# discobot [![npm version](https://badge.fury.io/js/discobot.svg)](https://badge.fury.io/js/discobot) [![Docker Repository on Quay](https://quay.io/repository/erulabs/discobot/status "Docker Repository on Quay")](https://quay.io/repository/erulabs/discobot) [![Stories in Ready](https://badge.waffle.io/asdqwex/discobot.svg?label=ready&title=Ready)](http://waffle.io/asdqwex/discobot) [![Circle CI](https://circleci.com/gh/asdqwex/discobot.svg?style=svg)](https://circleci.com/gh/asdqwex/discobot)

[![js-standard-style](https://cdn.rawgit.com/feross/standard/master/badge.svg)](https://github.com/feross/standard)
[![NPM](https://nodei.co/npm/discobot.png)](https://nodei.co/npm/discobot/)

# Usage:
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

### In discord:
Use `HAILING` + `BOT_NAME` to talk to your bot, so `!bot` by default.

# Development:
Run `npm install` to get setup, then:
`BOT_NAME=my_bot DISCORD_EMAIL=some_email DISCORD_PASSWORD=some_pass gulp watch`

You can now edit the code and the bot will automatically restart and reconnect on file-save

### OSX:
`brew install ffmpeg`
### Windows:
Install FFMPEG from http://ffmpeg.zeranoe.com/builds/ (the very first column - x32 and x64)

# Docker:
## to build
`docker build -t discobot .`
## to run
`docker run -e "DISCORD_EMAIL=discord@email.com" -e "DISCORD_PASSWORD=some_password" -it discobot`
