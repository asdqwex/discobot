# SETTINGS:

ifeq (${CIRCLE_BRANCH},)
	CIRCLE_BRANCH := latest
endif
TAG=${CIRCLE_BRANCH}
REPO=discobot
ORG=erulabs

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

.PHONY: build pull push clean
