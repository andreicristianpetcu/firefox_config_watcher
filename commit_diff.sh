#!/usr/bin/env bash
[ "`git status -s | wc -l`" -gt "0" ] && git add -A . && git commit --no-gpg-sign -m "Prefs changed at `date`"
