# Running:
Run `npm install` to get setup, then:

`BOT_NAME=my_bot DISCORD_EMAIL=some_email DISCORD_PASSWORD=some_pass npm run dev`

You can now edit the code and the bot will automatically restart and reconnect on file-save. You can also use `npm start` instead of `npm run dev` if you'd just like to test your current build.

# Prerequisities
To play audio locally, you'll need to install ffmpeg:
#### OSX:
`brew install ffmpeg`
#### Windows:
Install FFMPEG from http://ffmpeg.zeranoe.com/builds/ (the very first column - x32 and x64)
#### Linux
Typically the package is called `ffmpeg` - `libav-tools` will also work.

# Workflow
1. Create a branch
2. Write code, remember to update help module, index.js help message and BOT_COMMANDS.md when applicable
3. Commit changes to branch, please uses fixes and closes when applicable
4. Push branch
5. Submit PR
6. Wait for tests to pass
7. Merge