#!/usr/bin/env bash 

cd `dirname $0`

find . -type d | while read l ; do git add $l ; done
find . -type f | while read l ; do git add $l ; done

git commit -am "changed $(now ) "
git push