#!/bin/sh
git rev-parse --verify HEAD >/dev/null || exit 1
git update-index -q --ignore-submodules --refresh
err=0

echo='echo'
if [ "$1" == '-q' ]; then
  echo='true'
fi

if ! git diff-index --cached --quiet --ignore-submodules HEAD --
then
    $echo >&2 "You have changes to be committed."
    err=1
fi

if ! git diff-files --quiet --ignore-submodules
then
    if [ $err = 0 ]
    then
        $echo >&2 "You have changes not staged for commit."
    else
        $echo >&2 "Additionally, you have changes not staged for commit."
    fi
    err=1
fi

if git ls-files --other --directory --exclude-standard --no-empty-directory | grep -q .
then
    if [ $err = 0 ]
    then
        $echo >&2 "You have untracked files."
    else
        $echo >&2 "Additionally, you have untracked files."
    fi
    err=1
fi

if [ $err = 1 ]
then
    exit 1
fi
