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


Note that `DISCORD_GUILD`, `DISCORD_VOICE_CHANNEL` and `DISCORD_TEXT_CHANNEL` can be either names or IDs

## Bot Commands

Use `!bot help` to get a list of commands, or take a peek at the `/src/modules/` directory

## [Development](DEV.md)

This is a truly open project!

Pull requests will be merged and we will happily give out contributor access to those who contribute!

Also if you contribute 50 lines of code or more you will recieve a free T-shirt!

![yes boiz](http://i.imgur.com/5F36IbQ.jpg "Sweet sweet T-shirts")
![yes boiz](http://i.imgur.com/1MOyG1K.jpg "Sweet sweet T-shirts")


