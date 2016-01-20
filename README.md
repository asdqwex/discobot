# Discobot

[![Build Status](https://img.shields.io/circleci/project/asdqwex/discobot/master.svg?style=flat-square)](https://circleci.com/gh/asdqwex/discobot) [![npm version](https://img.shields.io/npm/v/discobot.svg?style=flat-square)](https://www.npmjs.com/package/discobot) [![Code Climate](https://img.shields.io/codeclimate/github/asdqwex/discobot.svg?style=flat-square)](https://codeclimate.com/github/asdqwex/discobot) [![Dependency Status](https://img.shields.io/david/asdqwex/discobot.svg?style=flat-square)](https://david-dm.org/asdqwex/discobot) [![devDependency Status](https://img.shields.io/david/dev/asdqwex/discobot.svg?style=flat-square)](https://david-dm.org/asdqwex/discobot#info=devDependencies)

[![npm downloads](https://img.shields.io/npm/dm/discobot.svg?style=flat-square)](https://www.npmjs.com/package/discobot) [![js-standard-style](https://img.shields.io/badge/code%20style-standard-brightgreen.svg?style=flat-square)](https://github.com/asdqwex/discobot)

Discobot is a chat bot for [Discord](discordapp.com) built with JavaScript using [Discord.io](https://github.com/izy521/discord.io)!

# Usage:
 - Install: `npm install -g discobot`
 - Use: `DISCORD_EMAIL=foo DISCORD_PASSWORD=bar discobot`

We also publish a docker image for each new version so if you prefer to run Discobot as a container please see: [Discobot in Dovker](DOCKER.md)

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

### In discord:
Use `HAILING` + `BOT_NAME` to talk to your bot, so `!bot` by default.

You can find a list of all supported bot commands here: [Bot Commands](BOT_COMMANDS.md)

### Contributing

This is a truly open project! Pull requests will be merged and we will happily give out contributor access to those who contribute!

Please see our Git Workflow Doc here: [Discobot Git Workflow](WORKFLOW.md)






