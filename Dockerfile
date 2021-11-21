FROM node:14

RUN apt-get update && apt-get install -y --no-install-recommends git zip unzip curl

RUN node -v &&\
	npm -v &&\
	yarn -v

EXPOSE 3000
