#!/usr/bin/env bash
wget https://hg.mozilla.org/mozilla-central/raw-file/tip/modules/libpref/init/all.js -O nightly_libpref.all.js
wget https://hg.mozilla.org/releases/mozilla-aurora/raw-file/tip/modules/libpref/init/all.js -O aurora_libpref.all.js
wget https://hg.mozilla.org/releases/mozilla-beta/raw-file/tip/modules/libpref/init/all.js -O beta_libpref.all.js
wget https://hg.mozilla.org/releases/mozilla-release/raw-file/tip/modules/libpref/init/all.js -O stable_libpref.all.js

wget https://hg.mozilla.org/mozilla-central/raw-file/tip/browser/app/profile/firefox.js -O nightly_profile.all.js
wget https://hg.mozilla.org/releases/mozilla-aurora/raw-file/tip/browser/app/profile/firefox.js -O aurora_profile.all.js
wget https://hg.mozilla.org/releases/mozilla-beta/raw-file/tip/browser/app/profile/firefox.js -O beta_profile.all.js
wget https://hg.mozilla.org/releases/mozilla-release/raw-file/tip/browser/app/profile/firefox.js -O stable_profile.all.js

git status

[ "`git status -s | wc -l`" -gt "0" ] && git add -A . && git commit --no-gpg-sign -m "Prefs changed at `date`"
