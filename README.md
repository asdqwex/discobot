# discobot [![Stories in Ready](https://badge.waffle.io/asdqwex/discobot.svg?label=ready&title=Ready)](http://waffle.io/asdqwex/discobot) [![Circle CI](https://circleci.com/gh/asdqwex/discobot.svg?style=svg)](https://circleci.com/gh/asdqwex/discobot) [![js-standard-style](https://img.shields.io/badge/code%20style-standard-brightgreen.svg)](http://standardjs.com/)

# Manual steps
### OSX:
`brew install ffmpeg`
### Windows:
I have no idea, someone figure this out.

# to build
docker build -t discobot .

# to run
docker run -e "DISCORD_EMAIL=discord@email.com" -e "DISCORD_PASSWORD=some_password" -it discobot
