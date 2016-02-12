<p align="center">
  <a href="https://github.com/asdqwex/discobot">
    <img height="236" width="157" src="https://i.imgur.com/qtffWzX.png">
  </a>
</p>

# Discobot
**A chat bot for [Discord](discordapp.com)**

[![Build Status](https://img.shields.io/circleci/project/asdqwex/discobot/master.svg?style=flat-square)](https://circleci.com/gh/asdqwex/discobot) [![npm version](https://img.shields.io/npm/v/discobot.svg?style=flat-square)](https://www.npmjs.com/package/discobot) [![Code Climate](https://img.shields.io/codeclimate/github/asdqwex/discobot.svg?style=flat-square)](https://codeclimate.com/github/asdqwex/discobot) [![Dependency Status](https://img.shields.io/david/asdqwex/discobot.svg?style=flat-square)](https://david-dm.org/asdqwex/discobot) [![devDependency Status](https://img.shields.io/david/dev/asdqwex/discobot.svg?style=flat-square)](https://david-dm.org/asdqwex/discobot#info=devDependencies) [![npm downloads](https://img.shields.io/npm/dm/discobot.svg?style=flat-square)](https://www.npmjs.com/package/discobot) [![js-standard-style](https://img.shields.io/badge/code%20style-standard-brightgreen.svg?style=flat-square)](https://github.com/asdqwex/discobot) [![Stories in Ready](https://badge.waffle.io/asdqwex/discobot.png?label=ready&title=Ready)](https://waffle.io/asdqwex/discobot)

## Usage:
 - Install: `npm install -g discobot`
 - Use: `DISCORD_EMAIL=foo DISCORD_PASSWORD=bar discobot`

Use `HAILING` + `BOT_NAME` + `COMMAND` to talk to your bot

Example: `!bot help`

## Configuration

Discobot will read these config variable in from a .config file that is json formatted. So you can create a file that looks like the following with your configuration options in it.

    {
        "RIOT_API_KEY": "xxx",
        "GOOGLE_CSE_ID": "xxx",
        "IMGFLIP_USER": "xxx",
        "IMGFLIP_PASSWORD": "!xxx",
        ... etc
    }

You can also pass config variables in on the cli when running the bot like so:

 `HAILING='!' BOT_NAME='' DISCORD_EMAIL=xxx DISCORD_PASSWORD=xxx DISCORD_VOICE_CHANNEL=General discobot`

 List of Configuration options:

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
|`IMGFLIP_USER`| - | - |
|`IMGFLIP_PASSWORD`| - | - |
|`GOOGLE_KEY`| - | - |
|`GOOGLE_CSE_ID`| - | - |
|`RIOT_API_KEY`| - | - |
|`TEST_CHANNEL`| - | - |


Note that `DISCORD_GUILD`, `DISCORD_VOICE_CHANNEL` and `DISCORD_TEXT_CHANNEL` can be either names or IDs

## [Bot Commands](MODS.md)

Use `!bot help` to get a list of commands, or take a peek at the `/src/modules/` directory

## [Development](DEV.md)

This is a truly open project!

Pull requests will be merged and we will happily give out contributor access to those who contribute!

We have prizes for anyone that contributes code!

|  Lines Contributed | Prize                     |                                                                                          |
|--------------------|---------------------------|------------------------------------------------------------------------------------------|
|               50   | Discobot Sticker          | ![](http://i.imgur.com/9lnhBPp.jpg =50x50)                                             |
|               100  | Discobot T-Shirt          | ![](http://i.imgur.com/5F36IbQ.jpg =50x50) ![](http://i.imgur.com/1MOyG1K.jpg =50x50)|


