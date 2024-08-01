#!/bin/sh

set -ex

cd "$(dirname "${0}")"

hut pages publish -d ashie.srht.site --not-found /404.html site.tar.gz

rsync -av --delete -e ssh public/ www:/var/www/blog/
