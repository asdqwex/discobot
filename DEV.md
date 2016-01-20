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