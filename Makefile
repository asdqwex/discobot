# SETTINGS:

ifeq (${CIRCLE_BRANCH},master)
	CIRCLE_BRANCH := latest
endif
ifeq (${CIRCLE_BRANCH},)
	CIRCLE_BRANCH := dev
endif
TAG=${CIRCLE_BRANCH}
REPO=discobot
ORG=asdqwex

DOCKER_CMD := ${DOCKER_CMD}
ifeq (${DOCKER_CMD},)
	DOCKER_CMD := docker
endif
build:
	${DOCKER_CMD} build -t ${ORG}/${REPO}:${TAG} .
pull:
	${DOCKER_CMD} pull ${ORG}/${REPO}:${TAG}
push:
	${DOCKER_CMD} push ${ORG}/${REPO}:${TAG}
clean:
	${DOCKER_CMD} rmi ${ORG}/${REPO}:${TAG}

npm:
	./node_modules/.bin/gulp clean
	./node_modules/.bin/gulp
	npm publish

.PHONY: build pull push clean npm
