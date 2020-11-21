#!/usr/bin/env bash 

cd `dirname $0`

find . -type d | grep -v .git | while read l ; do git add "$l" ; done
find . -type f | grep -v .git | while read l ; do git add "$l" ; done

git commit -am "changed   "
git push