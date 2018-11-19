#! /usr/bin/sh

export JEKYLL_VERSION=3.8

docker rm -f jekyll
docker run --rm \
  --name jekyll \
  --volume="$PWD:/srv/jekyll" \
  -it jekyll/jekyll:$JEKYLL_VERSION \
  jekyll build
