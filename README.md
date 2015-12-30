# discobot [![Stories in Ready](https://badge.waffle.io/asdqwex/discobot.svg?label=ready&title=Ready)](http://waffle.io/asdqwex/discobot)
Delete asdqwex/discobot
Deleting a project will remove all of its data from waffle.io and unregister its webhooks to GitHub. Deleting a project will not affect any data in the GitHub repos that are connected to it.

Enter "asdqwex/discobot" to confirm delete
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
