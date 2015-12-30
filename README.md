# discobot [![Stories in Ready](https://badge.waffle.io/asdqwex/discobot.svg?label=ready&title=Ready)](http://waffle.io/asdqwex/discobot) [![Circle CI](https://circleci.com/gh/asdqwex/discobot.svg?style=svg)](https://circleci.com/gh/asdqwex/discobot)
bot 4 discord

# Manual steps
### OSX:
`brew install ffmpeg`

Create a .secrets file with the following format

    email@domain.com
    password

# to build
docker build -t discobot .

# to run
docker run -it --rm --name running-discobot discobot
