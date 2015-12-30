# discobot
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
