# -*- indent-tabs-mode: nil; js-indent-level: 2 -*-
# This Source Code Form is subject to the terms of the Mozilla Public
# License, v. 2.0. If a copy of the MPL was not distributed with this
# file, You can obtain one at http://mozilla.org/MPL/2.0/.

// XXX Toolkit-specific preferences should be moved into toolkit.js

#filter substitution

#
# SYNTAX HINTS:
#
#  - Dashes are delimiters; use underscores instead.
#  - The first character after a period must be alphabetic.
#  - Computed values (e.g. 50 * 1024) don't work.
#

#ifdef XP_UNIX
#ifndef XP_MACOSX
#define UNIX_BUT_NOT_MAC
#endif
#endif

pref("browser.chromeURL","chrome://browser/content/");
pref("browser.hiddenWindowChromeURL", "chrome://browser/content/hiddenWindow.xul");

// Enables some extra Extension System Logging (can reduce performance)
pref("extensions.logging.enabled", false);

// Disables strict compatibility, making addons compatible-by-default.
pref("extensions.strictCompatibility", false);

// Specifies a minimum maxVersion an addon needs to say it's compatible with
// for it to be compatible by default.
pref("extensions.minCompatibleAppVersion", "4.0");
// Temporary preference to forcibly make themes more safe with Australis even if
// extensions.checkCompatibility=false has been set.
pref("extensions.checkCompatibility.temporaryThemeOverride_minAppVersion", "29.0a1");

pref("xpinstall.customConfirmationUI", true);
pref("extensions.webextPermissionPrompts", true);
pref("extensions.webextOptionalPermissionPrompts", true);

// Preferences for AMO integration
pref("extensions.getAddons.cache.enabled", true);
pref("extensions.getAddons.maxResults", 15);
pref("extensions.getAddons.get.url", "https://services.addons.mozilla.org/%LOCALE%/firefox/api/%API_VERSION%/search/guid:%IDS%?src=firefox&appOS=%OS%&appVersion=%VERSION%");
pref("extensions.getAddons.getWithPerformance.url", "https://services.addons.mozilla.org/%LOCALE%/firefox/api/%API_VERSION%/search/guid:%IDS%?src=firefox&appOS=%OS%&appVersion=%VERSION%&tMain=%TIME_MAIN%&tFirstPaint=%TIME_FIRST_PAINT%&tSessionRestored=%TIME_SESSION_RESTORED%");
pref("extensions.getAddons.search.browseURL", "https://addons.mozilla.org/%LOCALE%/firefox/search?q=%TERMS%&platform=%OS%&appver=%VERSION%");
pref("extensions.getAddons.search.url", "https://services.addons.mozilla.org/%LOCALE%/firefox/api/%API_VERSION%/search/%TERMS%/all/%MAX_RESULTS%/%OS%/%VERSION%/%COMPATIBILITY_MODE%?src=firefox");
pref("extensions.webservice.discoverURL", "https://discovery.addons.mozilla.org/%LOCALE%/firefox/discovery/pane/%VERSION%/%OS%/%COMPATIBILITY_MODE%");
pref("extensions.getAddons.recommended.url", "https://services.addons.mozilla.org/%LOCALE%/%APP%/api/%API_VERSION%/list/recommended/all/%MAX_RESULTS%/%OS%/%VERSION%?src=firefox");
pref("extensions.getAddons.link.url", "https://addons.mozilla.org/%LOCALE%/firefox/");
pref("extensions.getAddons.themes.browseURL", "https://addons.mozilla.org/%LOCALE%/firefox/themes/?src=firefox");

pref("extensions.update.autoUpdateDefault", true);

pref("extensions.hotfix.id", "firefox-hotfix@mozilla.org");
pref("extensions.hotfix.cert.checkAttributes", true);
pref("extensions.hotfix.certs.1.sha1Fingerprint", "91:53:98:0C:C1:86:DF:47:8F:35:22:9E:11:C9:A7:31:04:49:A1:AA");
pref("extensions.hotfix.certs.2.sha1Fingerprint", "39:E7:2B:7A:5B:CF:37:78:F9:5D:4A:E0:53:2D:2F:3D:68:53:C5:60");

// Check AUS for system add-on updates.
pref("extensions.systemAddon.update.url", "https://aus5.mozilla.org/update/3/SystemAddons/%VERSION%/%BUILD_ID%/%BUILD_TARGET%/%LOCALE%/%CHANNEL%/%OS_VERSION%/%DISTRIBUTION%/%DISTRIBUTION_VERSION%/update.xml");

// Disable add-ons that are not installed by the user in all scopes by default.
// See the SCOPE constants in AddonManager.jsm for values to use here.
pref("extensions.autoDisableScopes", 15);
// Scopes to scan for changes at startup.
pref("extensions.startupScanScopes", 0);

// This is where the profiler WebExtension API will look for breakpad symbols.
// NOTE: deliberately http right now since https://symbols.mozilla.org is not supported.
pref("extensions.geckoProfiler.symbols.url", "http://symbols.mozilla.org/");
pref("extensions.geckoProfiler.acceptedExtensionIds", "geckoprofiler@mozilla.com,quantum-foxfooding@mozilla.com");
#if defined(XP_LINUX) || defined (XP_MACOSX)
pref("extensions.geckoProfiler.getSymbolRules", "localBreakpad,remoteBreakpad,nm");
#else // defined(XP_WIN)
pref("extensions.geckoProfiler.getSymbolRules", "localBreakpad,remoteBreakpad");
#endif


// Add-on content security policies.
pref("extensions.webextensions.base-content-security-policy", "script-src 'self' https://* moz-extension: blob: filesystem: 'unsafe-eval' 'unsafe-inline'; object-src 'self' https://* moz-extension: blob: filesystem:;");
pref("extensions.webextensions.default-content-security-policy", "script-src 'self'; object-src 'self';");

#ifdef XP_WIN
pref("extensions.webextensions.remote", true);
#endif

// Extensions that should not be flagged as legacy in about:addons
pref("extensions.legacy.exceptions", "{972ce4c6-7e08-4474-a285-3208198ce6fd},testpilot@cliqz.com,@testpilot-containers,jid1-NeEaf3sAHdKHPA@jetpack,@activity-streams,pulse@mozilla.com,@testpilot-addon,@min-vid,tabcentertest1@mozilla.com,snoozetabs@mozilla.com,speaktome@mozilla.com,hoverpad@mozilla.com");

// Require signed add-ons by default
pref("xpinstall.signatures.required", true);
pref("xpinstall.signatures.devInfoURL", "https://wiki.mozilla.org/Addons/Extension_Signing");

// Dictionary download preference
pref("browser.dictionaries.download.url", "https://addons.mozilla.org/%LOCALE%/firefox/dictionaries/");

// At startup, should we check to see if the installation
// date is older than some threshold
pref("app.update.checkInstallTime", true);

// The number of days a binary is permitted to be old without checking is defined in
// firefox-branding.js (app.update.checkInstallTime.days)

// The minimum delay in seconds for the timer to fire between the notification
// of each consumer of the timer manager.
// minimum=30 seconds, default=120 seconds, and maximum=300 seconds
pref("app.update.timerMinimumDelay", 120);

// The minimum delay in milliseconds for the first firing after startup of the timer
// to notify consumers of the timer manager.
// minimum=10 seconds, default=30 seconds, and maximum=120 seconds
pref("app.update.timerFirstInterval", 30000);

// App-specific update preferences

// The interval to check for updates (app.update.interval) is defined in
// firefox-branding.js

// Alternative windowtype for an application update user interface window. When
// a window with this windowtype is open the application update service won't
// open the normal application update user interface window.
pref("app.update.altwindowtype", "Browser:About");

// Enables some extra Application Update Logging (can reduce performance)
pref("app.update.log", false);

// The number of general background check failures to allow before notifying the
// user of the failure. User initiated update checks always notify the user of
// the failure.
pref("app.update.backgroundMaxErrors", 10);

// Whether or not app updates are enabled
pref("app.update.enabled", true);

// Whether or not to use the doorhanger application update UI.
pref("app.update.doorhanger", true);

// Ids of the links to the "What's new" update documentation
pref("app.update.link.updateAvailableWhatsNew", "update-available-whats-new");
pref("app.update.link.updateManualWhatsNew", "update-manual-whats-new");

// How many times we should let downloads fail before prompting the user to
// download a fresh installer.
pref("app.update.download.promptMaxAttempts", 2);

// How many times we should let an elevation prompt fail before prompting the user to
// download a fresh installer.
pref("app.update.elevation.promptMaxAttempts", 2);

// If set to true, the Update Service will automatically download updates when
// app updates are enabled per the app.update.enabled preference and if the user
// can apply updates.
pref("app.update.auto", true);

// If set to true, the Update Service will present no UI for any event.
pref("app.update.silent", false);

// app.update.badgeWaitTime is in branding section

// If set to true, the Update Service will apply updates in the background
// when it finishes downloading them.
#ifdef XP_WIN
pref("app.update.staging.enabled", false);
#else
pref("app.update.staging.enabled", true);
#endif

// Update service URL:
pref("app.update.url", "https://aus5.mozilla.org/update/6/%PRODUCT%/%VERSION%/%BUILD_ID%/%BUILD_TARGET%/%LOCALE%/%CHANNEL%/%OS_VERSION%/%SYSTEM_CAPABILITIES%/%DISTRIBUTION%/%DISTRIBUTION_VERSION%/update.xml");
// app.update.url.manual is in branding section
// app.update.url.details is in branding section

// app.update.interval is in branding section
// app.update.promptWaitTime is in branding section

// Show the Update Checking/Ready UI when the user was idle for x seconds
pref("app.update.idletime", 60);

// Whether or not to attempt using the service for updates.
#ifdef MOZ_MAINTENANCE_SERVICE
pref("app.update.service.enabled", true);
#endif

// Symmetric (can be overridden by individual extensions) update preferences.
// e.g.
//  extensions.{GUID}.update.enabled
//  extensions.{GUID}.update.url
//  .. etc ..
//
pref("extensions.update.enabled", true);
pref("extensions.update.url", "https://versioncheck.addons.mozilla.org/update/VersionCheck.php?reqVersion=%REQ_VERSION%&id=%ITEM_ID%&version=%ITEM_VERSION%&maxAppVersion=%ITEM_MAXAPPVERSION%&status=%ITEM_STATUS%&appID=%APP_ID%&appVersion=%APP_VERSION%&appOS=%APP_OS%&appABI=%APP_ABI%&locale=%APP_LOCALE%&currentAppVersion=%CURRENT_APP_VERSION%&updateType=%UPDATE_TYPE%&compatMode=%COMPATIBILITY_MODE%");
pref("extensions.update.background.url", "https://versioncheck-bg.addons.mozilla.org/update/VersionCheck.php?reqVersion=%REQ_VERSION%&id=%ITEM_ID%&version=%ITEM_VERSION%&maxAppVersion=%ITEM_MAXAPPVERSION%&status=%ITEM_STATUS%&appID=%APP_ID%&appVersion=%APP_VERSION%&appOS=%APP_OS%&appABI=%APP_ABI%&locale=%APP_LOCALE%&currentAppVersion=%CURRENT_APP_VERSION%&updateType=%UPDATE_TYPE%&compatMode=%COMPATIBILITY_MODE%");
pref("extensions.update.interval", 86400);  // Check for updates to Extensions and
                                            // Themes every day
// Non-symmetric (not shared by extensions) extension-specific [update] preferences
pref("extensions.dss.switchPending", false);    // Non-dynamic switch pending after next
                                                // restart.

pref("extensions.{972ce4c6-7e08-4474-a285-3208198ce6fd}.name", "chrome://browser/locale/browser.properties");
pref("extensions.{972ce4c6-7e08-4474-a285-3208198ce6fd}.description", "chrome://browser/locale/browser.properties");

pref("extensions.webextensions.themes.enabled", true);
pref("extensions.webextensions.themes.icons.buttons", "back,forward,reload,stop,bookmark_star,bookmark_menu,downloads,home,app_menu,cut,copy,paste,new_window,new_private_window,save_page,print,history,full_screen,find,options,addons,developer,synced_tabs,open_file,sidebars,share_page,subscribe,text_encoding,email_link,forget,pocket");

pref("lightweightThemes.update.enabled", true);
pref("lightweightThemes.getMoreURL", "https://addons.mozilla.org/%LOCALE%/firefox/themes");
pref("lightweightThemes.recommendedThemes", "[{\"id\":\"recommended-1\",\"homepageURL\":\"https://addons.mozilla.org/firefox/addon/a-web-browser-renaissance/\",\"headerURL\":\"resource:///chrome/browser/content/browser/defaultthemes/1.header.jpg\",\"textcolor\":\"#000000\",\"accentcolor\":\"#f2d9b1\",\"iconURL\":\"resource:///chrome/browser/content/browser/defaultthemes/1.icon.jpg\",\"previewURL\":\"resource:///chrome/browser/content/browser/defaultthemes/1.preview.jpg\",\"author\":\"Sean.Martell\",\"version\":\"0\"},{\"id\":\"recommended-2\",\"homepageURL\":\"https://addons.mozilla.org/firefox/addon/space-fantasy/\",\"headerURL\":\"resource:///chrome/browser/content/browser/defaultthemes/2.header.jpg\",\"textcolor\":\"#ffffff\",\"accentcolor\":\"#d9d9d9\",\"iconURL\":\"resource:///chrome/browser/content/browser/defaultthemes/2.icon.jpg\",\"previewURL\":\"resource:///chrome/browser/content/browser/defaultthemes/2.preview.jpg\",\"author\":\"fx5800p\",\"version\":\"1.0\"},{\"id\":\"recommended-4\",\"homepageURL\":\"https://addons.mozilla.org/firefox/addon/pastel-gradient/\",\"headerURL\":\"resource:///chrome/browser/content/browser/defaultthemes/4.header.png\",\"textcolor\":\"#000000\",\"accentcolor\":\"#000000\",\"iconURL\":\"resource:///chrome/browser/content/browser/defaultthemes/4.icon.png\",\"previewURL\":\"resource:///chrome/browser/content/browser/defaultthemes/4.preview.png\",\"author\":\"darrinhenein\",\"version\":\"1.0\"}]");

#if defined(MOZ_WIDEVINE_EME)
pref("browser.eme.ui.enabled", true);
#else
pref("browser.eme.ui.enabled", false);
#endif

// UI tour experience.
pref("browser.uitour.enabled", true);
pref("browser.uitour.loglevel", "Error");
pref("browser.uitour.requireSecure", true);
pref("browser.uitour.themeOrigin", "https://addons.mozilla.org/%LOCALE%/firefox/themes/");
pref("browser.uitour.url", "https://www.mozilla.org/%LOCALE%/firefox/%VERSION%/tour/");
// How long to show a Hearbeat survey (two hours, in seconds)
pref("browser.uitour.surveyDuration", 7200);

pref("browser.customizemode.tip0.shown", false);
pref("browser.customizemode.tip0.learnMoreUrl", "https://support.mozilla.org/1/firefox/%VERSION%/%OS%/%LOCALE%/customize");

pref("keyword.enabled", true);
pref("browser.fixup.domainwhitelist.localhost", true);

pref("general.useragent.locale", "@AB_CD@");
pref("general.skins.selectedSkin", "classic/1.0");

pref("general.smoothScroll", true);
#ifdef UNIX_BUT_NOT_MAC
pref("general.autoScroll", false);
#else
pref("general.autoScroll", true);
#endif

pref("browser.stopReloadAnimation.enabled", true);

// UI density of the browser chrome. This mostly affects toolbarbutton
// and urlbar spacing. The possible values are 0=normal, 1=compact, 2=touch.
pref("browser.uidensity", 0);
// Whether Firefox will automatically override the uidensity to "touch"
// while the user is in a touch environment (such as Windows tablet mode).
#ifdef MOZ_PHOTON_THEME
pref("browser.touchmode.auto", true);
#else
pref("browser.touchmode.auto", false);
#endif

// At startup, check if we're the default browser and prompt user if not.
pref("browser.shell.checkDefaultBrowser", true);
pref("browser.shell.shortcutFavicons",true);
pref("browser.shell.mostRecentDateSetAsDefault", "");
pref("browser.shell.skipDefaultBrowserCheckOnFirstRun", true);
pref("browser.shell.didSkipDefaultBrowserCheckOnFirstRun", false);
pref("browser.shell.defaultBrowserCheckCount", 0);
pref("browser.defaultbrowser.notificationbar", false);

// 0 = blank, 1 = home (browser.startup.homepage), 2 = last visited page, 3 = resume previous browser session
// The behavior of option 3 is detailed at: http://wiki.mozilla.org/Session_Restore
pref("browser.startup.page",                1);
pref("browser.startup.homepage",            "chrome://branding/locale/browserconfig.properties");
// Whether we should skip the homepage when opening the first-run page
pref("browser.startup.firstrunSkipsHomepage", true);

pref("browser.slowStartup.notificationDisabled", false);
pref("browser.slowStartup.timeThreshold", 30000);
pref("browser.slowStartup.maxSamples", 5);

// This url, if changed, MUST continue to point to an https url. Pulling arbitrary content to inject into
// this page over http opens us up to a man-in-the-middle attack that we'd rather not face. If you are a downstream
// repackager of this code using an alternate snippet url, please keep your users safe
pref("browser.aboutHomeSnippets.updateUrl", "https://snippets.cdn.mozilla.net/%STARTPAGE_VERSION%/%NAME%/%VERSION%/%APPBUILDID%/%BUILD_TARGET%/%LOCALE%/%CHANNEL%/%OS_VERSION%/%DISTRIBUTION%/%DISTRIBUTION_VERSION%/");

pref("browser.enable_automatic_image_resizing", true);
pref("browser.casting.enabled", false);
pref("browser.chrome.site_icons", true);
pref("browser.chrome.favicons", true);
// browser.warnOnQuit == false will override all other possible prompts when quitting or restarting
pref("browser.warnOnQuit", true);
// browser.showQuitWarning specifically controls the quit warning dialog. We
// might still show the window closing dialog with showQuitWarning == false.
pref("browser.showQuitWarning", false);
pref("browser.fullscreen.autohide", true);
pref("browser.overlink-delay", 80);

#ifdef UNIX_BUT_NOT_MAC
pref("browser.urlbar.clickSelectsAll", false);
#else
pref("browser.urlbar.clickSelectsAll", true);
#endif
#ifdef UNIX_BUT_NOT_MAC
pref("browser.urlbar.doubleClickSelectsAll", true);
#else
pref("browser.urlbar.doubleClickSelectsAll", false);
#endif

// Control autoFill behavior
pref("browser.urlbar.autoFill", true);
pref("browser.urlbar.autoFill.typed", true);
pref("browser.urlbar.speculativeConnect.enabled", true);

// 0: Match anywhere (e.g., middle of words)
// 1: Match on word boundaries and then try matching anywhere
// 2: Match only on word boundaries (e.g., after / or .)
// 3: Match at the beginning of the url or title
pref("browser.urlbar.matchBehavior", 1);
pref("browser.urlbar.filter.javascript", true);

// the maximum number of results to show in autocomplete when doing richResults
pref("browser.urlbar.maxRichResults", 10);
// The amount of time (ms) to wait after the user has stopped typing
// before starting to perform autocomplete.  50 is the default set in
// autocomplete.xml.
pref("browser.urlbar.delay", 50);

// The default behavior for the urlbar can be configured to use any combination
// of the match filters with each additional filter adding more results (union).
pref("browser.urlbar.suggest.history",              true);
pref("browser.urlbar.suggest.bookmark",             true);
pref("browser.urlbar.suggest.openpage",             true);
pref("browser.urlbar.suggest.searches",             true);
pref("browser.urlbar.userMadeSearchSuggestionsChoice", false);
// The suggestion opt-in notification will be shown on 4 different days.
pref("browser.urlbar.daysBeforeHidingSuggestionsPrompt", 4);
pref("browser.urlbar.lastSuggestionsPromptDate", 20160601);
// The suggestion opt-out hint will be hidden after being shown 4 times.
pref("browser.urlbar.timesBeforeHidingSuggestionsHint", 4);

// Limit the number of characters sent to the current search engine to fetch
// suggestions.
pref("browser.urlbar.maxCharsForSearchSuggestions", 20);

// Restrictions to current suggestions can also be applied (intersection).
// Typed suggestion works only if history is set to true.
pref("browser.urlbar.suggest.history.onlyTyped",    false);

pref("browser.urlbar.formatting.enabled", true);
pref("browser.urlbar.trimURLs", true);

pref("browser.urlbar.oneOffSearches", true);

// If changed to true, copying the entire URL from the location bar will put the
// human readable (percent-decoded) URL on the clipboard.
pref("browser.urlbar.decodeURLsOnCopy", false);

pref("browser.altClickSave", false);

// Enable logging downloads operations to the Console.
pref("browser.download.loglevel", "Error");

// Number of milliseconds to wait for the http headers (and thus
// the Content-Disposition filename) before giving up and falling back to
// picking a filename without that info in hand so that the user sees some
// feedback from their action.
pref("browser.download.saveLinkAsFilenameTimeout", 4000);

pref("browser.download.useDownloadDir", true);
pref("browser.download.folderList", 1);
pref("browser.download.manager.addToRecentDocs", true);
pref("browser.download.manager.resumeOnWakeDelay", 10000);

// This allows disabling the animated notifications shown by
// the Downloads Indicator when a download starts or completes.
pref("browser.download.animateNotifications", true);

// This records whether or not the panel has been shown at least once.
pref("browser.download.panel.shown", false);

#ifndef XP_MACOSX
pref("browser.helperApps.deleteTempFileOnExit", true);
#endif

// search engines URL
pref("browser.search.searchEnginesURL",      "https://addons.mozilla.org/%LOCALE%/firefox/search-engines/");

// pointer to the default engine name
pref("browser.search.defaultenginename",      "chrome://browser-region/locale/region.properties");

// Ordering of Search Engines in the Engine list.
pref("browser.search.order.1",                "chrome://browser-region/locale/region.properties");
pref("browser.search.order.2",                "chrome://browser-region/locale/region.properties");
pref("browser.search.order.3",                "chrome://browser-region/locale/region.properties");

// Market-specific search defaults
// This is disabled globally, and then enabled for individual locales
// in firefox-l10n.js (eg. it's enabled for en-US).
pref("browser.search.geoSpecificDefaults", false);
pref("browser.search.geoSpecificDefaults.url", "https://search.services.mozilla.com/1/%APP%/%VERSION%/%CHANNEL%/%LOCALE%/%REGION%/%DISTRIBUTION%/%DISTRIBUTION_VERSION%");

// US specific default (used as a fallback if the geoSpecificDefaults request fails).
pref("browser.search.defaultenginename.US",      "data:text/plain,browser.search.defaultenginename.US=Yahoo");
pref("browser.search.order.US.1",                "data:text/plain,browser.search.order.US.1=Yahoo");
pref("browser.search.order.US.2",                "data:text/plain,browser.search.order.US.2=Google");
pref("browser.search.order.US.3",                "data:text/plain,browser.search.order.US.3=Bing");

// search bar results always open in a new tab
pref("browser.search.openintab", false);

// context menu searches open in the foreground
pref("browser.search.context.loadInBackground", false);

// comma seperated list of of engines to hide in the search panel.
pref("browser.search.hiddenOneOffs", "");

// Mirrors whether the search-container widget is in the navigation toolbar. The
// default value of this preference must match the DEFAULT_AREA_PLACEMENTS of
// UITelemetry.jsm, the navbarPlacements of CustomizableUI.jsm, and the
// position and attributes of the search-container element in browser.xul.
pref("browser.search.widget.inNavBar", true);

#ifndef RELEASE_OR_BETA
pref("browser.search.reset.enabled", true);
#endif

pref("browser.sessionhistory.max_entries", 50);

// Built-in default permissions.
pref("permissions.manager.defaultsUrl", "resource://app/defaults/permissions");

// handle links targeting new windows
// 1=current window/tab, 2=new window, 3=new tab in most recent window
pref("browser.link.open_newwindow", 3);

// handle external links (i.e. links opened from a different application)
// default: use browser.link.open_newwindow
// 1-3: see browser.link.open_newwindow for interpretation
pref("browser.link.open_newwindow.override.external", -1);

// 0: no restrictions - divert everything
// 1: don't divert window.open at all
// 2: don't divert window.open with features
pref("browser.link.open_newwindow.restriction", 2);

// If true, this pref causes windows opened by window.open to be forced into new
// tabs (rather than potentially opening separate windows, depending on
// window.open arguments) when the browser is in fullscreen mode.
// We set this differently on Mac because the fullscreen implementation there is
// different.
#ifdef XP_MACOSX
pref("browser.link.open_newwindow.disabled_in_fullscreen", true);
#else
pref("browser.link.open_newwindow.disabled_in_fullscreen", false);
#endif

#ifdef NIGHTLY_BUILD
pref("browser.photon.structure.enabled", true);
#else
pref("browser.photon.structure.enabled", false);
#endif

// Tabbed browser
pref("browser.tabs.closeWindowWithLastTab", true);
pref("browser.tabs.insertRelatedAfterCurrent", true);
pref("browser.tabs.warnOnClose", true);
pref("browser.tabs.warnOnCloseOtherTabs", true);
pref("browser.tabs.warnOnOpen", true);
pref("browser.tabs.maxOpenBeforeWarn", 15);
pref("browser.tabs.loadInBackground", true);
pref("browser.tabs.opentabfor.middleclick", true);
pref("browser.tabs.loadDivertedInBackground", false);
pref("browser.tabs.loadBookmarksInBackground", false);
pref("browser.tabs.tabClipWidth", 140);
#ifdef UNIX_BUT_NOT_MAC
pref("browser.tabs.drawInTitlebar", false);
#else
pref("browser.tabs.drawInTitlebar", true);
#endif

// false - disable the tabbar session restore button
// true - enable the tabbar session restore button
// To be enabled with shield
pref("browser.tabs.restorebutton", false);

// When tabs opened by links in other tabs via a combination of
// browser.link.open_newwindow being set to 3 and target="_blank" etc are
// closed:
// true   return to the tab that opened this tab (its owner)
// false  return to the adjacent tab (old default)
pref("browser.tabs.selectOwnerOnClose", true);

pref("browser.tabs.showAudioPlayingIcon", true);
// This should match Chromium's audio indicator delay.
pref("browser.tabs.delayHidingAudioPlayingIconMS", 3000);

pref("browser.ctrlTab.previews", false);

// By default, do not export HTML at shutdown.
// If true, at shutdown the bookmarks in your menu and toolbar will
// be exported as HTML to the bookmarks.html file.
pref("browser.bookmarks.autoExportHTML",          false);

// The maximum number of daily bookmark backups to
// keep in {PROFILEDIR}/bookmarkbackups. Special values:
// -1: unlimited
//  0: no backups created (and deletes all existing backups)
pref("browser.bookmarks.max_backups",             15);

pref("browser.bookmarks.showRecentlyBookmarked",  true);

// Scripts & Windows prefs
pref("dom.disable_open_during_load",              true);
pref("javascript.options.showInConsole",          true);
#ifdef DEBUG
pref("general.warnOnAboutConfig",                 false);
#endif

// This is the pref to control the location bar, change this to true to
// force this - this makes the origin of popup windows more obvious to avoid
// spoofing. We would rather not do it by default because it affects UE for web
// applications, but without it there isn't a really good way to prevent chrome
// spoofing, see bug 337344
pref("dom.disable_window_open_feature.location",  true);
// prevent JS from setting status messages
pref("dom.disable_window_status_change",          true);
// allow JS to move and resize existing windows
pref("dom.disable_window_move_resize",            false);
// prevent JS from monkeying with window focus, etc
pref("dom.disable_window_flip",                   true);

// popups.policy 1=allow,2=reject
pref("privacy.popups.policy",               1);
pref("privacy.popups.usecustom",            true);
pref("privacy.popups.showBrowserMessage",   true);

pref("privacy.item.cookies",                false);

pref("privacy.clearOnShutdown.history",     true);
pref("privacy.clearOnShutdown.formdata",    true);
pref("privacy.clearOnShutdown.downloads",   true);
pref("privacy.clearOnShutdown.cookies",     true);
pref("privacy.clearOnShutdown.cache",       true);
pref("privacy.clearOnShutdown.sessions",    true);
pref("privacy.clearOnShutdown.offlineApps", false);
pref("privacy.clearOnShutdown.siteSettings", false);
pref("privacy.clearOnShutdown.openWindows", false);

pref("privacy.cpd.history",                 true);
pref("privacy.cpd.formdata",                true);
pref("privacy.cpd.passwords",               false);
pref("privacy.cpd.downloads",               true);
pref("privacy.cpd.cookies",                 true);
pref("privacy.cpd.cache",                   true);
pref("privacy.cpd.sessions",                true);
pref("privacy.cpd.offlineApps",             false);
pref("privacy.cpd.siteSettings",            false);
pref("privacy.cpd.openWindows",             false);

pref("privacy.history.custom",              false);

// What default should we use for the time span in the sanitizer:
// 0 - Clear everything
// 1 - Last Hour
// 2 - Last 2 Hours
// 3 - Last 4 Hours
// 4 - Today
// 5 - Last 5 minutes
// 6 - Last 24 hours
pref("privacy.sanitize.timeSpan", 1);
pref("privacy.sanitize.sanitizeOnShutdown", false);

pref("privacy.sanitize.migrateFx3Prefs",    false);

pref("privacy.panicButton.enabled",         true);

// Time until temporary permissions expire, in ms
pref("privacy.temporary_permission_expire_time_ms",  3600000);

pref("network.proxy.share_proxy_settings",  false); // use the same proxy settings for all protocols

// simple gestures support
pref("browser.gesture.swipe.left", "Browser:BackOrBackDuplicate");
pref("browser.gesture.swipe.right", "Browser:ForwardOrForwardDuplicate");
pref("browser.gesture.swipe.up", "cmd_scrollTop");
pref("browser.gesture.swipe.down", "cmd_scrollBottom");
#ifdef XP_MACOSX
pref("browser.gesture.pinch.latched", true);
pref("browser.gesture.pinch.threshold", 150);
#else
pref("browser.gesture.pinch.latched", false);
pref("browser.gesture.pinch.threshold", 25);
#endif
#ifdef XP_WIN
// Enabled for touch input display zoom.
pref("browser.gesture.pinch.out", "cmd_fullZoomEnlarge");
pref("browser.gesture.pinch.in", "cmd_fullZoomReduce");
pref("browser.gesture.pinch.out.shift", "cmd_fullZoomReset");
pref("browser.gesture.pinch.in.shift", "cmd_fullZoomReset");
#else
// Disabled by default due to issues with track pad input.
pref("browser.gesture.pinch.out", "");
pref("browser.gesture.pinch.in", "");
pref("browser.gesture.pinch.out.shift", "");
pref("browser.gesture.pinch.in.shift", "");
#endif
pref("browser.gesture.twist.latched", false);
pref("browser.gesture.twist.threshold", 0);
pref("browser.gesture.twist.right", "cmd_gestureRotateRight");
pref("browser.gesture.twist.left", "cmd_gestureRotateLeft");
pref("browser.gesture.twist.end", "cmd_gestureRotateEnd");
pref("browser.gesture.tap", "cmd_fullZoomReset");

pref("browser.snapshots.limit", 0);

// 0: Nothing happens
// 1: Scrolling contents
// 2: Go back or go forward, in your history
// 3: Zoom in or out.
#ifdef XP_MACOSX
// On OS X, if the wheel has one axis only, shift+wheel comes through as a
// horizontal scroll event. Thus, we can't assign anything other than normal
// scrolling to shift+wheel.
pref("mousewheel.with_alt.action", 2);
pref("mousewheel.with_shift.action", 1);
// On MacOS X, control+wheel is typically handled by system and we don't
// receive the event.  So, command key which is the main modifier key for
// acceleration is the best modifier for zoom-in/out.  However, we should keep
// the control key setting for backward compatibility.
pref("mousewheel.with_meta.action", 3); // command key on Mac
// Disable control-/meta-modified horizontal mousewheel events, since
// those are used on Mac as part of modified swipe gestures (e.g.
// Left swipe+Cmd = go back in a new tab).
pref("mousewheel.with_control.action.override_x", 0);
pref("mousewheel.with_meta.action.override_x", 0);
#else
pref("mousewheel.with_alt.action", 1);
pref("mousewheel.with_shift.action", 2);
pref("mousewheel.with_meta.action", 1); // win key on Win, Super/Hyper on Linux
#endif
pref("mousewheel.with_control.action",3);
pref("mousewheel.with_win.action", 1);

pref("browser.xul.error_pages.enabled", true);
pref("browser.xul.error_pages.expert_bad_cert", false);

// Enable captive portal detection.
pref("network.captive-portal-service.enabled", true);

// If true, network link events will change the value of navigator.onLine
pref("network.manage-offline-status", true);

// We want to make sure mail URLs are handled externally...
pref("network.protocol-handler.external.mailto", true); // for mail
pref("network.protocol-handler.external.news", true);   // for news
pref("network.protocol-handler.external.snews", true);  // for secure news
pref("network.protocol-handler.external.nntp", true);   // also news
#ifdef XP_WIN
pref("network.protocol-handler.external.ms-windows-store", true);
#endif

// ...without warning dialogs
pref("network.protocol-handler.warn-external.mailto", false);
pref("network.protocol-handler.warn-external.news", false);
pref("network.protocol-handler.warn-external.snews", false);
pref("network.protocol-handler.warn-external.nntp", false);
#ifdef XP_WIN
pref("network.protocol-handler.warn-external.ms-windows-store", false);
#endif

// By default, all protocol handlers are exposed.  This means that
// the browser will respond to openURL commands for all URL types.
// It will also try to open link clicks inside the browser before
// failing over to the system handlers.
pref("network.protocol-handler.expose-all", true);
pref("network.protocol-handler.expose.mailto", false);
pref("network.protocol-handler.expose.news", false);
pref("network.protocol-handler.expose.snews", false);
pref("network.protocol-handler.expose.nntp", false);

pref("accessibility.typeaheadfind", false);
pref("accessibility.typeaheadfind.timeout", 5000);
pref("accessibility.typeaheadfind.linksonly", false);
pref("accessibility.typeaheadfind.flashBar", 1);

// Tracks when accessibility is loaded into the previous session.
pref("accessibility.loadedInLastSession", false);

pref("plugins.click_to_play", true);
pref("plugins.testmode", false);

// Should plugins that are hidden show the infobar UI?
pref("plugins.show_infobar", false);

// Should dismissing the hidden plugin infobar suppress it permanently?
pref("plugins.remember_infobar_dismissal", true);

pref("plugin.default.state", 1);

// Plugins bundled in XPIs are enabled by default.
pref("plugin.defaultXpi.state", 2);

// Java is Click-to-Activate by default on all channels.
pref("plugin.state.java", 1);

// Flash is Click-to-Activate by default on Nightly.
// On other channels, it will be controlled by a
// rollout system addon.
#ifdef NIGHTLY_BUILD
pref("plugin.state.flash", 1);
#else
pref("plugin.state.flash", 2);
#endif

// Enables the download and use of the flash blocklists.
pref("plugins.flashBlock.enabled", true);

// Prefer HTML5 video over Flash content, and don't
// load plugin instances with no src declared.
// These prefs are documented in details on all.js.
// With the "follow-ctp" setting, this will only
// apply to users that have plugin.state.flash = 1.
pref("plugins.favorfallback.mode", "follow-ctp");
pref("plugins.favorfallback.rules", "nosrc,video");


#ifdef XP_WIN
pref("browser.preferences.instantApply", false);
#else
pref("browser.preferences.instantApply", true);
#endif

// Toggling Search bar on and off in about:preferences
pref("browser.preferences.search", true);

// Use the new in-content about:preferences in Nightly only for now
pref("browser.preferences.useOldOrganization", false);

// Once the Storage Management is completed.
// (The Storage Management-related prefs are browser.storageManager.* )
// The Offline(Appcache) Group section in about:preferences will be hidden.
// And the task to clear appcache will be done by Storage Management.
#if defined(NIGHTLY_BUILD)
pref("browser.preferences.offlineGroup.enabled", false);
#else
pref("browser.preferences.offlineGroup.enabled", true);
#endif

pref("browser.preferences.defaultPerformanceSettings.enabled", true);

pref("browser.download.show_plugins_in_list", true);
pref("browser.download.hide_plugins_without_extensions", true);

// Backspace and Shift+Backspace behavior
// 0 goes Back/Forward
// 1 act like PgUp/PgDown
// 2 and other values, nothing
#ifdef UNIX_BUT_NOT_MAC
pref("browser.backspace_action", 2);
#else
pref("browser.backspace_action", 0);
#endif

// this will automatically enable inline spellchecking (if it is available) for
// editable elements in HTML
// 0 = spellcheck nothing
// 1 = check multi-line controls [default]
// 2 = check multi/single line controls
pref("layout.spellcheckDefault", 1);

pref("browser.send_pings", false);

/* initial web feed readers list */
pref("browser.contentHandlers.types.0.title", "chrome://browser-region/locale/region.properties");
pref("browser.contentHandlers.types.0.uri", "chrome://browser-region/locale/region.properties");
pref("browser.contentHandlers.types.0.type", "application/vnd.mozilla.maybe.feed");
pref("browser.contentHandlers.types.1.title", "chrome://browser-region/locale/region.properties");
pref("browser.contentHandlers.types.1.uri", "chrome://browser-region/locale/region.properties");
pref("browser.contentHandlers.types.1.type", "application/vnd.mozilla.maybe.feed");
pref("browser.contentHandlers.types.2.title", "chrome://browser-region/locale/region.properties");
pref("browser.contentHandlers.types.2.uri", "chrome://browser-region/locale/region.properties");
pref("browser.contentHandlers.types.2.type", "application/vnd.mozilla.maybe.feed");
pref("browser.contentHandlers.types.3.title", "chrome://browser-region/locale/region.properties");
pref("browser.contentHandlers.types.3.uri", "chrome://browser-region/locale/region.properties");
pref("browser.contentHandlers.types.3.type", "application/vnd.mozilla.maybe.feed");
pref("browser.contentHandlers.types.4.title", "chrome://browser-region/locale/region.properties");
pref("browser.contentHandlers.types.4.uri", "chrome://browser-region/locale/region.properties");
pref("browser.contentHandlers.types.4.type", "application/vnd.mozilla.maybe.feed");
pref("browser.contentHandlers.types.5.title", "chrome://browser-region/locale/region.properties");
pref("browser.contentHandlers.types.5.uri", "chrome://browser-region/locale/region.properties");
pref("browser.contentHandlers.types.5.type", "application/vnd.mozilla.maybe.feed");

pref("browser.feeds.handler", "ask");
pref("browser.videoFeeds.handler", "ask");
pref("browser.audioFeeds.handler", "ask");

// At startup, if the handler service notices that the version number in the
// region.properties file is newer than the version number in the handler
// service datastore, it will add any new handlers it finds in the prefs (as
// seeded by this file) to its datastore.
pref("gecko.handlerService.defaultHandlersVersion", "chrome://browser-region/locale/region.properties");

// The default set of web-based protocol handlers shown in the application
// selection dialog for webcal: ; I've arbitrarily picked 4 default handlers
// per protocol, but if some locale wants more than that (or defaults for some
// protocol not currently listed here), we should go ahead and add those.

// webcal
pref("gecko.handlerService.schemes.webcal.0.name", "chrome://browser-region/locale/region.properties");
pref("gecko.handlerService.schemes.webcal.0.uriTemplate", "chrome://browser-region/locale/region.properties");
pref("gecko.handlerService.schemes.webcal.1.name", "chrome://browser-region/locale/region.properties");
pref("gecko.handlerService.schemes.webcal.1.uriTemplate", "chrome://browser-region/locale/region.properties");
pref("gecko.handlerService.schemes.webcal.2.name", "chrome://browser-region/locale/region.properties");
pref("gecko.handlerService.schemes.webcal.2.uriTemplate", "chrome://browser-region/locale/region.properties");
pref("gecko.handlerService.schemes.webcal.3.name", "chrome://browser-region/locale/region.properties");
pref("gecko.handlerService.schemes.webcal.3.uriTemplate", "chrome://browser-region/locale/region.properties");

// mailto
pref("gecko.handlerService.schemes.mailto.0.name", "chrome://browser-region/locale/region.properties");
pref("gecko.handlerService.schemes.mailto.0.uriTemplate", "chrome://browser-region/locale/region.properties");
pref("gecko.handlerService.schemes.mailto.1.name", "chrome://browser-region/locale/region.properties");
pref("gecko.handlerService.schemes.mailto.1.uriTemplate", "chrome://browser-region/locale/region.properties");
pref("gecko.handlerService.schemes.mailto.2.name", "chrome://browser-region/locale/region.properties");
pref("gecko.handlerService.schemes.mailto.2.uriTemplate", "chrome://browser-region/locale/region.properties");
pref("gecko.handlerService.schemes.mailto.3.name", "chrome://browser-region/locale/region.properties");
pref("gecko.handlerService.schemes.mailto.3.uriTemplate", "chrome://browser-region/locale/region.properties");

// irc
pref("gecko.handlerService.schemes.irc.0.name", "chrome://browser-region/locale/region.properties");
pref("gecko.handlerService.schemes.irc.0.uriTemplate", "chrome://browser-region/locale/region.properties");
pref("gecko.handlerService.schemes.irc.1.name", "chrome://browser-region/locale/region.properties");
pref("gecko.handlerService.schemes.irc.1.uriTemplate", "chrome://browser-region/locale/region.properties");
pref("gecko.handlerService.schemes.irc.2.name", "chrome://browser-region/locale/region.properties");
pref("gecko.handlerService.schemes.irc.2.uriTemplate", "chrome://browser-region/locale/region.properties");
pref("gecko.handlerService.schemes.irc.3.name", "chrome://browser-region/locale/region.properties");
pref("gecko.handlerService.schemes.irc.3.uriTemplate", "chrome://browser-region/locale/region.properties");

// ircs
pref("gecko.handlerService.schemes.ircs.0.name", "chrome://browser-region/locale/region.properties");
pref("gecko.handlerService.schemes.ircs.0.uriTemplate", "chrome://browser-region/locale/region.properties");
pref("gecko.handlerService.schemes.ircs.1.name", "chrome://browser-region/locale/region.properties");
pref("gecko.handlerService.schemes.ircs.1.uriTemplate", "chrome://browser-region/locale/region.properties");
pref("gecko.handlerService.schemes.ircs.2.name", "chrome://browser-region/locale/region.properties");
pref("gecko.handlerService.schemes.ircs.2.uriTemplate", "chrome://browser-region/locale/region.properties");
pref("gecko.handlerService.schemes.ircs.3.name", "chrome://browser-region/locale/region.properties");
pref("gecko.handlerService.schemes.ircs.3.uriTemplate", "chrome://browser-region/locale/region.properties");

pref("browser.geolocation.warning.infoURL", "https://www.mozilla.org/%LOCALE%/firefox/geolocation/");

pref("browser.EULA.version", 3);
pref("browser.rights.version", 3);
pref("browser.rights.3.shown", false);

#ifdef DEBUG
// Don't show the about:rights notification in debug builds.
pref("browser.rights.override", true);
#endif

pref("browser.sessionstore.resume_from_crash", true);
pref("browser.sessionstore.resume_session_once", false);

// Minimal interval between two save operations in milliseconds (while the user is active).
pref("browser.sessionstore.interval", 15000); // 15 seconds

// Minimal interval between two save operations in milliseconds (while the user is idle).
pref("browser.sessionstore.interval.idle", 3600000); // 1h

// Time (ms) before we assume that the user is idle and that we don't need to
// collect/save the session quite as often.
pref("browser.sessionstore.idleDelay", 180000); // 3 minutes

// on which sites to save text data, POSTDATA and cookies
// 0 = everywhere, 1 = unencrypted sites, 2 = nowhere
pref("browser.sessionstore.privacy_level", 0);
// how many tabs can be reopened (per window)
pref("browser.sessionstore.max_tabs_undo", 10);
// how many windows can be reopened (per session) - on non-OS X platforms this
// pref may be ignored when dealing with pop-up windows to ensure proper startup
pref("browser.sessionstore.max_windows_undo", 3);
// number of crashes that can occur before the about:sessionrestore page is displayed
// (this pref has no effect if more than 6 hours have passed since the last crash)
pref("browser.sessionstore.max_resumed_crashes", 1);
// number of back button session history entries to restore (-1 = all of them)
pref("browser.sessionstore.max_serialize_back", 10);
// number of forward button session history entries to restore (-1 = all of them)
pref("browser.sessionstore.max_serialize_forward", -1);
// restore_on_demand overrides MAX_CONCURRENT_TAB_RESTORES (sessionstore constant)
// and restore_hidden_tabs. When true, tabs will not be restored until they are
// focused (also applies to tabs that aren't visible). When false, the values
// for MAX_CONCURRENT_TAB_RESTORES and restore_hidden_tabs are respected.
// Selected tabs are always restored regardless of this pref.
pref("browser.sessionstore.restore_on_demand", true);
// Whether to automatically restore hidden tabs (i.e., tabs in other tab groups) or not
pref("browser.sessionstore.restore_hidden_tabs", false);
// If restore_on_demand is set, pinned tabs are restored on startup by default.
// When set to true, this pref overrides that behavior, and pinned tabs will only
// be restored when they are focused.
pref("browser.sessionstore.restore_pinned_tabs_on_demand", false);
// The version at which we performed the latest upgrade backup
pref("browser.sessionstore.upgradeBackup.latestBuildID", "");
// How many upgrade backups should be kept
pref("browser.sessionstore.upgradeBackup.maxUpgradeBackups", 3);
// End-users should not run sessionstore in debug mode
pref("browser.sessionstore.debug", false);
// Causes SessionStore to ignore non-final update messages from
// browser tabs that were not caused by a flush from the parent.
// This is a testing flag and should not be used by end-users.
pref("browser.sessionstore.debug.no_auto_updates", false);
// Forget closed windows/tabs after two weeks
pref("browser.sessionstore.cleanup.forget_closed_after", 1209600000);
// Maximum number of bytes of DOMSessionStorage data we collect per origin.
pref("browser.sessionstore.dom_storage_limit", 2048);

// allow META refresh by default
pref("accessibility.blockautorefresh", false);

// Whether useAsyncTransactions is enabled or not.
// Currently we only enable them for nightly.
#ifdef NIGHTLY_BUILD
pref("browser.places.useAsyncTransactions", true);
#else
pref("browser.places.useAsyncTransactions", false);
#endif

// Whether history is enabled or not.
pref("places.history.enabled", true);

// the (maximum) number of the recent visits to sample
// when calculating frecency
pref("places.frecency.numVisits", 10);

// buckets (in days) for frecency calculation
pref("places.frecency.firstBucketCutoff", 4);
pref("places.frecency.secondBucketCutoff", 14);
pref("places.frecency.thirdBucketCutoff", 31);
pref("places.frecency.fourthBucketCutoff", 90);

// weights for buckets for frecency calculations
pref("places.frecency.firstBucketWeight", 100);
pref("places.frecency.secondBucketWeight", 70);
pref("places.frecency.thirdBucketWeight", 50);
pref("places.frecency.fourthBucketWeight", 30);
pref("places.frecency.defaultBucketWeight", 10);

// bonus (in percent) for visit transition types for frecency calculations
pref("places.frecency.embedVisitBonus", 0);
pref("places.frecency.framedLinkVisitBonus", 0);
pref("places.frecency.linkVisitBonus", 100);
pref("places.frecency.typedVisitBonus", 2000);
// The bookmarks bonus is always added on top of any other bonus, including
// the redirect source and the typed ones.
pref("places.frecency.bookmarkVisitBonus", 75);
// The redirect source bonus overwrites any transition bonus.
// 0 would hide these pages, instead we want them low ranked.  Thus we use
// linkVisitBonus - bookmarkVisitBonus, so that a bookmarked source is in par
// with a common link.
pref("places.frecency.redirectSourceVisitBonus", 25);
pref("places.frecency.downloadVisitBonus", 0);
// The perm/temp redirects here relate to redirect targets, not sources.
pref("places.frecency.permRedirectVisitBonus", 50);
pref("places.frecency.tempRedirectVisitBonus", 40);
pref("places.frecency.reloadVisitBonus", 0);
pref("places.frecency.defaultVisitBonus", 0);

// bonus (in percent) for place types for frecency calculations
pref("places.frecency.unvisitedBookmarkBonus", 140);
pref("places.frecency.unvisitedTypedBonus", 200);

// Controls behavior of the "Add Exception" dialog launched from SSL error pages
// 0 - don't pre-populate anything
// 1 - pre-populate site URL, but don't fetch certificate
// 2 - pre-populate site URL and pre-fetch certificate
pref("browser.ssl_override_behavior", 2);

// True if the user should be prompted when a web application supports
// offline apps.
pref("browser.offline-apps.notify", true);

// if true, use full page zoom instead of text zoom
pref("browser.zoom.full", true);

// Whether or not to save and restore zoom levels on a per-site basis.
pref("browser.zoom.siteSpecific", true);

// Whether or not to update background tabs to the current zoom level.
pref("browser.zoom.updateBackgroundTabs", true);

// The breakpad report server to link to in about:crashes
pref("breakpad.reportURL", "https://crash-stats.mozilla.com/report/index/");

// URL for "Learn More" for DataCollection
pref("toolkit.datacollection.infoURL",
     "https://www.mozilla.org/legal/privacy/firefox.html");

// URL for "Learn More" for Crash Reporter
pref("toolkit.crashreporter.infoURL",
     "https://www.mozilla.org/legal/privacy/firefox.html#crash-reporter");

// base URL for web-based support pages
pref("app.support.baseURL", "https://support.mozilla.org/1/firefox/%VERSION%/%OS%/%LOCALE%/");

// a11y conflicts with e10s support page
pref("app.support.e10sAccessibilityUrl", "https://support.mozilla.org/1/firefox/%VERSION%/%OS%/%LOCALE%/accessibility-ppt");

// base url for web-based feedback pages
#ifdef MOZ_DEV_EDITION
pref("app.feedback.baseURL", "https://input.mozilla.org/%LOCALE%/feedback/firefoxdev/%VERSION%/");
#else
pref("app.feedback.baseURL", "https://input.mozilla.org/%LOCALE%/feedback/%APP%/%VERSION%/");
#endif

// base URL for web-based marketing pages
pref("app.productInfo.baseURL", "https://www.mozilla.org/firefox/features/");

// Name of alternate about: page for certificate errors (when undefined, defaults to about:neterror)
pref("security.alternate_certificate_error_page", "certerror");

// Whether to start the private browsing mode at application startup
pref("browser.privatebrowsing.autostart", false);

// Don't try to alter this pref, it'll be reset the next time you use the
// bookmarking dialog
pref("browser.bookmarks.editDialog.firstEditField", "namePicker");

pref("dom.ipc.plugins.flash.disable-protected-mode", false);

// Feature-disable the protected-mode auto-flip
pref("browser.flash-protected-mode-flip.enable", false);

// Whether we've already flipped protected mode automatically
pref("browser.flash-protected-mode-flip.done", false);

pref("dom.ipc.shims.enabledWarnings", false);

#if defined(XP_WIN) && defined(MOZ_SANDBOX)
// Controls whether and how the Windows NPAPI plugin process is sandboxed.
// To get a different setting for a particular plugin replace "default", with
// the plugin's nice file name, see: nsPluginTag::GetNiceFileName.
// On windows these levels are:
// 0 - no sandbox
// 1 - sandbox with USER_NON_ADMIN access token level
// 2 - a more strict sandbox, which might cause functionality issues. This now
//     includes running at low integrity.
// 3 - the strongest settings we seem to be able to use without breaking
//     everything, but will probably cause some functionality restrictions
pref("dom.ipc.plugins.sandbox-level.default", 0);
#if defined(_AMD64_)
// The lines in PluginModuleParent.cpp should be changed in line with this.
pref("dom.ipc.plugins.sandbox-level.flash", 2);
#else
pref("dom.ipc.plugins.sandbox-level.flash", 0);
#endif

#if defined(MOZ_CONTENT_SANDBOX)
// This controls the strength of the Windows content process sandbox for testing
// purposes. This will require a restart.
// On windows these levels are:
// See - security/sandbox/win/src/sandboxbroker/sandboxBroker.cpp
// SetSecurityLevelForContentProcess() for what the different settings mean.
pref("security.sandbox.content.level", 3);

// This controls the depth of stack trace that is logged when Windows sandbox
// logging is turned on.  This is only currently available for the content
// process because the only other sandbox (for GMP) has too strict a policy to
// allow stack tracing.  This does not require a restart to take effect.
pref("security.sandbox.windows.log.stackTraceDepth", 0);
#endif

// This controls the strength of the Windows GPU process sandbox.  Changes
// will require restart.
// For information on what the level number means, see
// SetSecurityLevelForGPUProcess() in
// security/sandbox/win/src/sandboxbroker/sandboxBroker.cpp
pref("security.sandbox.gpu.level", 0);
#endif

#if defined(XP_MACOSX) && defined(MOZ_SANDBOX) && defined(MOZ_CONTENT_SANDBOX)
// This pref is discussed in bug 1083344, the naming is inspired from its
// Windows counterpart, but on Mac it's an integer which means:
// 0 -> "no sandbox" (nightly only)
// 1 -> "preliminary content sandboxing enabled: write access to
//       home directory is prevented"
// 2 -> "preliminary content sandboxing enabled with profile protection:
//       write access to home directory is prevented, read and write access
//       to ~/Library and profile directories are prevented (excluding
//       $PROFILE/{extensions,chrome})"
// 3 -> "no global read/write access, read access permitted to
//       $PROFILE/{extensions,chrome}"
// This setting is read when the content process is started. On Mac the content
// process is killed when all windows are closed, so a change will take effect
// when the 1st window is opened.
pref("security.sandbox.content.level", 3);
#endif

#if defined(XP_LINUX) && defined(MOZ_SANDBOX) && defined(MOZ_CONTENT_SANDBOX)
// This pref is introduced as part of bug 742434, the naming is inspired from
// its Windows/Mac counterpart, but on Linux it's an integer which means:
// 0 -> "no sandbox"
// 1 -> "content sandbox using seccomp-bpf when available"
// 2 -> "seccomp-bpf + write file broker"
// 3 -> "seccomp-bpf + read/write file brokering"
// Content sandboxing on Linux is currently in the stage of
// 'just getting it enabled', which includes a very permissive whitelist. We
// enable seccomp-bpf on nightly to see if everything is running, or if we need
// to whitelist more system calls.
//
// So the purpose of this setting is to allow nightly users to disable the
// sandbox while we fix their problems. This way, they won't have to wait for
// another nightly release which disables seccomp-bpf again.
//
// This setting may not be required anymore once we decide to permanently
// enable the content sandbox.
#ifdef NIGHTLY_BUILD
pref("security.sandbox.content.level", 3);
#else
pref("security.sandbox.content.level", 2);
#endif
pref("security.sandbox.content.write_path_whitelist", "");
pref("security.sandbox.content.read_path_whitelist", "");
pref("security.sandbox.content.syscall_whitelist", "");
#endif

#if defined(XP_MACOSX) || defined(XP_WIN)
#if defined(MOZ_SANDBOX) && defined(MOZ_CONTENT_SANDBOX)
// ID (a UUID when set by gecko) that is used to form the name of a
// sandbox-writable temporary directory to be used by content processes
// when a temporary writable file is required in a level 1 sandbox.
pref("security.sandbox.content.tempDirSuffix", "");
#endif
#endif

#if defined(MOZ_SANDBOX)
// This pref determines if messages relevant to sandbox violations are
// logged.
#if defined(XP_WIN) || defined(XP_MACOSX)
pref("security.sandbox.logging.enabled", false);
#else
pref("security.sandbox.logging.enabled", true);
#endif
#endif

// This pref governs whether we attempt to work around problems caused by
// plugins using OS calls to manipulate the cursor while running out-of-
// process.  These workarounds all involve intercepting (hooking) certain
// OS calls in the plugin process, then arranging to make certain OS calls
// in the browser process.  Eventually plugins will be required to use the
// NPAPI to manipulate the cursor, and these workarounds will be removed.
// See bug 621117.
#ifdef XP_MACOSX
pref("dom.ipc.plugins.nativeCursorSupport", true);
#endif

#ifdef XP_WIN
pref("browser.taskbar.previews.enable", false);
pref("browser.taskbar.previews.max", 20);
pref("browser.taskbar.previews.cachetime", 5);
pref("browser.taskbar.lists.enabled", true);
pref("browser.taskbar.lists.frequent.enabled", true);
pref("browser.taskbar.lists.recent.enabled", false);
pref("browser.taskbar.lists.maxListItemCount", 7);
pref("browser.taskbar.lists.tasks.enabled", true);
pref("browser.taskbar.lists.refreshInSeconds", 120);
#endif

// Preferences to be synced by default
pref("services.sync.prefs.sync.accessibility.blockautorefresh", true);
pref("services.sync.prefs.sync.accessibility.browsewithcaret", true);
pref("services.sync.prefs.sync.accessibility.typeaheadfind", true);
pref("services.sync.prefs.sync.accessibility.typeaheadfind.linksonly", true);
pref("services.sync.prefs.sync.addons.ignoreUserEnabledChanges", true);
// The addons prefs related to repository verification are intentionally
// not synced for security reasons. If a system is compromised, a user
// could weaken the pref locally, install an add-on from an untrusted
// source, and this would propagate automatically to other,
// uncompromised Sync-connected devices.
pref("services.sync.prefs.sync.browser.ctrlTab.previews", true);
pref("services.sync.prefs.sync.browser.download.useDownloadDir", true);
pref("services.sync.prefs.sync.browser.formfill.enable", true);
pref("services.sync.prefs.sync.browser.link.open_newwindow", true);
pref("services.sync.prefs.sync.browser.newtabpage.enabled", true);
pref("services.sync.prefs.sync.browser.newtabpage.enhanced", true);
pref("services.sync.prefs.sync.browser.newtabpage.pinned", true);
pref("services.sync.prefs.sync.browser.offline-apps.notify", true);
pref("services.sync.prefs.sync.browser.safebrowsing.phishing.enabled", true);
pref("services.sync.prefs.sync.browser.safebrowsing.malware.enabled", true);
pref("services.sync.prefs.sync.browser.search.update", true);
pref("services.sync.prefs.sync.browser.sessionstore.restore_on_demand", true);
pref("services.sync.prefs.sync.browser.startup.homepage", true);
pref("services.sync.prefs.sync.browser.startup.page", true);
pref("services.sync.prefs.sync.browser.tabs.loadInBackground", true);
pref("services.sync.prefs.sync.browser.tabs.warnOnClose", true);
pref("services.sync.prefs.sync.browser.tabs.warnOnOpen", true);
pref("services.sync.prefs.sync.browser.urlbar.autocomplete.enabled", true);
pref("services.sync.prefs.sync.browser.urlbar.maxRichResults", true);
pref("services.sync.prefs.sync.browser.urlbar.suggest.bookmark", true);
pref("services.sync.prefs.sync.browser.urlbar.suggest.history", true);
pref("services.sync.prefs.sync.browser.urlbar.suggest.history.onlyTyped", true);
pref("services.sync.prefs.sync.browser.urlbar.suggest.openpage", true);
pref("services.sync.prefs.sync.browser.urlbar.suggest.searches", true);
pref("services.sync.prefs.sync.dom.disable_open_during_load", true);
pref("services.sync.prefs.sync.dom.disable_window_flip", true);
pref("services.sync.prefs.sync.dom.disable_window_move_resize", true);
pref("services.sync.prefs.sync.dom.event.contextmenu.enabled", true);
pref("services.sync.prefs.sync.extensions.personas.current", true);
pref("services.sync.prefs.sync.extensions.update.enabled", true);
pref("services.sync.prefs.sync.intl.accept_languages", true);
pref("services.sync.prefs.sync.layout.spellcheckDefault", true);
pref("services.sync.prefs.sync.lightweightThemes.selectedThemeID", true);
pref("services.sync.prefs.sync.lightweightThemes.usedThemes", true);
pref("services.sync.prefs.sync.network.cookie.cookieBehavior", true);
pref("services.sync.prefs.sync.network.cookie.lifetimePolicy", true);
pref("services.sync.prefs.sync.network.cookie.lifetime.days", true);
pref("services.sync.prefs.sync.network.cookie.thirdparty.sessionOnly", true);
pref("services.sync.prefs.sync.permissions.default.image", true);
pref("services.sync.prefs.sync.pref.advanced.images.disable_button.view_image", true);
pref("services.sync.prefs.sync.pref.advanced.javascript.disable_button.advanced", true);
pref("services.sync.prefs.sync.pref.downloads.disable_button.edit_actions", true);
pref("services.sync.prefs.sync.pref.privacy.disable_button.cookie_exceptions", true);
pref("services.sync.prefs.sync.privacy.clearOnShutdown.cache", true);
pref("services.sync.prefs.sync.privacy.clearOnShutdown.cookies", true);
pref("services.sync.prefs.sync.privacy.clearOnShutdown.downloads", true);
pref("services.sync.prefs.sync.privacy.clearOnShutdown.formdata", true);
pref("services.sync.prefs.sync.privacy.clearOnShutdown.history", true);
pref("services.sync.prefs.sync.privacy.clearOnShutdown.offlineApps", true);
pref("services.sync.prefs.sync.privacy.clearOnShutdown.sessions", true);
pref("services.sync.prefs.sync.privacy.clearOnShutdown.siteSettings", true);
pref("services.sync.prefs.sync.privacy.donottrackheader.enabled", true);
pref("services.sync.prefs.sync.privacy.sanitize.sanitizeOnShutdown", true);
pref("services.sync.prefs.sync.privacy.trackingprotection.enabled", true);
pref("services.sync.prefs.sync.privacy.trackingprotection.pbmode.enabled", true);
pref("services.sync.prefs.sync.security.OCSP.enabled", true);
pref("services.sync.prefs.sync.security.OCSP.require", true);
pref("services.sync.prefs.sync.security.default_personal_cert", true);
pref("services.sync.prefs.sync.security.tls.version.min", true);
pref("services.sync.prefs.sync.security.tls.version.max", true);
pref("services.sync.prefs.sync.services.sync.syncedTabs.showRemoteIcons", true);
pref("services.sync.prefs.sync.signon.rememberSignons", true);
pref("services.sync.prefs.sync.spellchecker.dictionary", true);
pref("services.sync.prefs.sync.xpinstall.whitelist.required", true);

// A preference that controls whether we should show the icon for a remote tab.
// This pref has no UI but exists because some people may be concerned that
// fetching these icons to show remote tabs may leak information about that
// user's tabs and bookmarks. Note this pref is also synced.
pref("services.sync.syncedTabs.showRemoteIcons", true);

// Developer edition preferences
#ifdef MOZ_DEV_EDITION
sticky_pref("lightweightThemes.selectedThemeID", "firefox-compact-dark@mozilla.org");
#else
sticky_pref("lightweightThemes.selectedThemeID", "");
#endif

// Whether the character encoding menu is under the main Firefox button. This
// preference is a string so that localizers can alter it.
pref("browser.menu.showCharacterEncoding", "chrome://browser/locale/browser.properties");

// Allow using tab-modal prompts when possible.
pref("prompts.tab_modal.enabled", true);

// Activates preloading of the new tab url.
pref("browser.newtab.preload", true);

// Remembers if the about:newtab intro has been shown
// NOTE: This preference is unused but was not removed in case
//       this information will be valuable in the future.
pref("browser.newtabpage.introShown", false);

// Toggles the content of 'about:newtab'. Shows the grid when enabled.
pref("browser.newtabpage.enabled", true);

// Toggles the directory tiles content of 'about:newtab'.
sticky_pref("browser.newtabpage.enhanced", true);

// enables Activity Stream inspired layout
pref("browser.newtabpage.compact", false);

// enables showing basic placeholders for missing thumbnails
pref("browser.newtabpage.thumbnailPlaceholder", false);

// number of rows of newtab grid
pref("browser.newtabpage.rows", 3);

// number of columns of newtab grid
pref("browser.newtabpage.columns", 5);

// directory tiles download URL
pref("browser.newtabpage.directory.source", "https://tiles.services.mozilla.com/v3/links/fetch/%LOCALE%/%CHANNEL%");

// activates Activity Stream
#ifdef NIGHTLY_BUILD
pref("browser.newtabpage.activity-stream.enabled", true);
#else
pref("browser.newtabpage.activity-stream.enabled", false);
#endif

// Enable the DOM fullscreen API.
pref("full-screen-api.enabled", true);

// Startup Crash Tracking
// number of startup crashes that can occur before starting into safe mode automatically
// (this pref has no effect if more than 6 hours have passed since the last crash)
pref("toolkit.startup.max_resumed_crashes", 3);

// Whether we use pdfium to view content with the pdf mime type.
// Note: if the pref is set to false while Firefox is open, it won't
// take effect until there are no open pdfium tabs.
pref("pdfium.enabled", false);

// Completely disable pdf.js as an option to preview pdfs within firefox.
// Note: if this is not disabled it does not necessarily mean pdf.js is the pdf
// handler just that it is an option.
pref("pdfjs.disabled", false);
// Used by pdf.js to know the first time firefox is run with it installed so it
// can become the default pdf viewer.
pref("pdfjs.firstRun", true);
// The values of preferredAction and alwaysAskBeforeHandling before pdf.js
// became the default.
pref("pdfjs.previousHandler.preferredAction", 0);
pref("pdfjs.previousHandler.alwaysAskBeforeHandling", false);

// The maximum amount of decoded image data we'll willingly keep around (we
// might keep around more than this, but we'll try to get down to this value).
// (This is intentionally on the high side; see bug 746055.)
pref("image.mem.max_decoded_image_kb", 256000);

// Is the sidebar positioned ahead of the content browser
pref("sidebar.position_start", true);

// Activation from inside of share panel is possible if activationPanelEnabled
// is true. Pref'd off for release while usage testing is done through beta.
pref("social.share.activationPanelEnabled", true);
pref("social.shareDirectory", "https://activations.cdn.mozilla.net/sharePanel.html");

// Block insecure active content on https pages
pref("security.mixed_content.block_active_content", true);

// Show degraded UI for http pages with password fields.
pref("security.insecure_password.ui.enabled", true);

// Show in-content login form warning UI for insecure login fields
pref("security.insecure_field_warning.contextual.enabled", true);

// 1 = allow MITM for certificate pinning checks.
pref("security.cert_pinning.enforcement_level", 1);


// Override the Gecko-default value of false for Firefox.
pref("plain_text.wrap_long_lines", true);

// If this turns true, Moz*Gesture events are not called stopPropagation()
// before content.
pref("dom.debug.propagate_gesture_events_through_content", false);

// All the Geolocation preferences are here.
//

// Geolocation preferences for the RELEASE and "later" Beta channels.
// Some of these prefs are specified even though they are redundant; they are
// here for clarity and end-user experiments.
#ifndef EARLY_BETA_OR_EARLIER
pref("geo.wifi.uri", "https://www.googleapis.com/geolocation/v1/geolocate?key=%GOOGLE_API_KEY%");

#ifdef XP_MACOSX
pref("geo.provider.use_corelocation", false);
#endif

#ifdef XP_WIN
pref("geo.provider.ms-windows-location", false);
#endif

#ifdef MOZ_WIDGET_GTK
pref("geo.provider.use_gpsd", false);
#endif

#else

// Geolocation preferences for Nightly/Aurora/Beta.
pref("geo.wifi.uri", "https://location.services.mozilla.com/v1/geolocate?key=%MOZILLA_API_KEY%");

#ifdef XP_MACOSX
pref("geo.provider.use_corelocation", true);
#endif

// The native Windows location provider is only enabled in Nightly and likely to
// be unstable. Set to false if things are really broken.
#if defined(XP_WIN) && defined(NIGHTLY_BUILD)
pref("geo.provider.ms-windows-location", true);
#endif

#if defined(MOZ_WIDGET_GTK) && defined(MOZ_GPSD)
pref("geo.provider.use_gpsd", true);
#endif

#endif

// Necko IPC security checks only needed for app isolation for cookies/cache/etc:
// currently irrelevant for desktop e10s
pref("network.disable.ipc.security", true);

// CustomizableUI debug logging.
pref("browser.uiCustomization.debug", false);

// CustomizableUI state of the browser's user interface
pref("browser.uiCustomization.state", "");

// The remote content URL shown for FxA signup. Must use HTTPS.
pref("identity.fxaccounts.remote.signup.uri", "https://accounts.firefox.com/signup?service=sync&context=fx_desktop_v3");

// The URL where remote content that forces re-authentication for Firefox Accounts
// should be fetched.  Must use HTTPS.
pref("identity.fxaccounts.remote.force_auth.uri", "https://accounts.firefox.com/force_auth?service=sync&context=fx_desktop_v3");

// The remote content URL shown for signin in. Must use HTTPS.
pref("identity.fxaccounts.remote.signin.uri", "https://accounts.firefox.com/signin?service=sync&context=fx_desktop_v3");

// The remote content URL where FxAccountsWebChannel messages originate.
pref("identity.fxaccounts.remote.webchannel.uri", "https://accounts.firefox.com/");

// The value of the context query parameter passed in some fxa requests when config
// discovery is enabled.
pref("identity.fxaccounts.contextParam", "fx_desktop_v3");

// The URL we take the user to when they opt to "manage" their Firefox Account.
// Note that this will always need to be in the same TLD as the
// "identity.fxaccounts.remote.signup.uri" pref.
pref("identity.fxaccounts.settings.uri", "https://accounts.firefox.com/settings?service=sync&context=fx_desktop_v3");

// The URL of the FxA device manager page
pref("identity.fxaccounts.settings.devices.uri", "https://accounts.firefox.com/settings/clients?service=sync&context=fx_desktop_v3");

// The remote URL of the FxA Profile Server
pref("identity.fxaccounts.remote.profile.uri", "https://profile.accounts.firefox.com/v1");

// The remote URL of the FxA OAuth Server
pref("identity.fxaccounts.remote.oauth.uri", "https://oauth.accounts.firefox.com/v1");

// Token server used by the FxA Sync identity.
pref("identity.sync.tokenserver.uri", "https://token.services.mozilla.com/1.0/sync/1.5");

// URLs for promo links to mobile browsers. Note that consumers are expected to
// append a value for utm_campaign.
pref("identity.mobilepromo.android", "https://www.mozilla.org/firefox/android/?utm_source=firefox-browser&utm_medium=firefox-browser&utm_campaign=");
pref("identity.mobilepromo.ios", "https://www.mozilla.org/firefox/ios/?utm_source=firefox-browser&utm_medium=firefox-browser&utm_campaign=");

// Migrate any existing Firefox Account data from the default profile to the
// Developer Edition profile.
#ifdef MOZ_DEV_EDITION
pref("identity.fxaccounts.migrateToDevEdition", true);
#else
pref("identity.fxaccounts.migrateToDevEdition", false);
#endif

// On GTK, we now default to showing the menubar only when alt is pressed:
#ifdef MOZ_WIDGET_GTK
pref("ui.key.menuAccessKeyFocuses", true);
#endif

// Encrypted media extensions.
#ifdef XP_LINUX
// On Linux EME is visible but disabled by default. This is so that the
// "Play DRM content" checkbox in the Firefox UI is unchecked by default.
// DRM requires downloading and installing proprietary binaries, which
// users on an open source operating systems didn't opt into. The first
// time a site using EME is encountered, the user will be prompted to
// enable DRM, whereupon the EME plugin binaries will be downloaded if
// permission is granted.
pref("media.eme.enabled", false);
#else
pref("media.eme.enabled", true);
#endif

#ifdef NIGHTLY_BUILD
pref("media.eme.vp9-in-mp4.enabled", true);
#else
pref("media.eme.vp9-in-mp4.enabled", false);
#endif

// Whether we should run a test-pattern through EME GMPs before assuming they'll
// decode H.264.
pref("media.gmp.trial-create.enabled", true);

// Note: when media.gmp-*.visible is true, provided we're running on a
// supported platform/OS version, the corresponding CDM appears in the
// plugins list, Firefox will download the GMP/CDM if enabled, and our
// UI to re-enable EME prompts the user to re-enable EME if it's disabled
// and script requests EME. If *.visible is false, we won't show the UI
// to enable the CDM if its disabled; it's as if the keysystem is completely
// unsupported.

#ifdef MOZ_WIDEVINE_EME
pref("media.gmp-widevinecdm.visible", true);
pref("media.gmp-widevinecdm.enabled", true);
#endif

// Play with different values of the decay time and get telemetry,
// 0 means to randomize (and persist) the experiment value in users' profiles,
// -1 means no experiment is run and we use the preferred value for frecency (6h)
pref("browser.cache.frecency_experiment", 0);

pref("browser.translation.detectLanguage", false);
pref("browser.translation.neverForLanguages", "");
// Show the translation UI bits, like the info bar, notification icon and preferences.
pref("browser.translation.ui.show", false);
// Allows to define the translation engine. Bing is default, Yandex may optionally switched on.
pref("browser.translation.engine", "bing");

// Telemetry settings.
// Determines if Telemetry pings can be archived locally.
pref("toolkit.telemetry.archive.enabled", true);
// Enables sending the shutdown ping when Firefox shuts down.
pref("toolkit.telemetry.shutdownPingSender.enabled", true);
// Enables sending the shutdown ping using the pingsender from the first session.
pref("toolkit.telemetry.shutdownPingSender.enabledFirstSession", false);
// Enables sending the 'new-profile' ping on new profiles.
pref("toolkit.telemetry.newProfilePing.enabled", true);
// Enables sending 'update' pings on Firefox updates.
pref("toolkit.telemetry.updatePing.enabled", true);

// Telemetry experiments settings.
pref("experiments.enabled", true);
pref("experiments.manifest.fetchIntervalSeconds", 86400);
pref("experiments.manifest.uri", "https://telemetry-experiment.cdn.mozilla.net/manifest/v1/firefox/%VERSION%/%CHANNEL%");
// Whether experiments are supported by the current application profile.
pref("experiments.supported", true);

// Enable GMP support in the addon manager.
pref("media.gmp-provider.enabled", true);

#ifdef NIGHTLY_BUILD
pref("privacy.trackingprotection.ui.enabled", true);
#else
pref("privacy.trackingprotection.ui.enabled", false);
#endif
pref("privacy.trackingprotection.introCount", 0);
pref("privacy.trackingprotection.introURL", "https://www.mozilla.org/%LOCALE%/firefox/%VERSION%/tracking-protection/start/");

// Enable Contextual Identity Containers
#ifdef NIGHTLY_BUILD
pref("privacy.userContext.enabled", true);
pref("privacy.userContext.ui.enabled", true);
pref("privacy.usercontext.about_newtab_segregation.enabled", true);

// 0 disables long press, 1 when clicked, the menu is shown, 2 the menu is shown after X milliseconds.
pref("privacy.userContext.longPressBehavior", 2);
#else
pref("privacy.userContext.enabled", false);
pref("privacy.userContext.ui.enabled", false);
pref("privacy.usercontext.about_newtab_segregation.enabled", false);

// 0 disables long press, 1 when clicked, the menu is shown, 2 the menu is shown after X milliseconds.
pref("privacy.userContext.longPressBehavior", 0);
#endif

// Start the browser in e10s mode
pref("browser.tabs.remote.autostart", false);
pref("browser.tabs.remote.desktopbehavior", true);

#if !defined(RELEASE_OR_BETA) || defined(MOZ_DEV_EDITION)
// At the moment, autostart.2 is used, while autostart.1 is unused.
// We leave it here set to false to reset users' defaults and allow
// us to change everybody to true in the future, when desired.
pref("browser.tabs.remote.autostart.1", false);
pref("browser.tabs.remote.autostart.2", true);
#endif

// For the about:tabcrashed page
pref("browser.tabs.crashReporting.sendReport", true);
pref("browser.tabs.crashReporting.includeURL", false);
pref("browser.tabs.crashReporting.requestEmail", false);
pref("browser.tabs.crashReporting.emailMe", false);
pref("browser.tabs.crashReporting.email", "");

// Enable e10s add-on interposition by default.
pref("extensions.interposition.enabled", true);
pref("extensions.interposition.prefetching", true);

// But don't allow non-MPC extensions by default on Nightly
#if defined(NIGHTLY_BUILD)
pref("extensions.allow-non-mpc-extensions", false);
#endif

// Enable blocking of e10s and e10s-multi for add-on users on beta/release.
#if defined(RELEASE_OR_BETA) && !defined(MOZ_DEV_EDITION)
pref("extensions.e10sBlocksEnabling", true);
pref("extensions.e10sMultiBlocksEnabling", true);
#endif

// How often to check for CPOW timeouts. CPOWs are only timed out by
// the hang monitor.
pref("dom.ipc.cpow.timeout", 500);

// Causes access on unsafe CPOWs from browser code to throw by default.
pref("dom.ipc.cpows.forbid-unsafe-from-browser", true);

// Don't allow add-ons marked as multiprocessCompatible to use CPOWs.
pref("dom.ipc.cpows.forbid-cpows-in-compat-addons", true);

// ...except for these add-ons:
pref("dom.ipc.cpows.allow-cpows-in-compat-addons", "{b9db16a4-6edc-47ec-a1f4-b86292ed211d},firegestures@xuldev.org,{DDC359D1-844A-42a7-9AA1-88A850A938A8},privateTab@infocatcher,mousegesturessuite@lemon_juice.addons.mozilla.org,treestyletab@piro.sakura.ne.jp,cliqz@cliqz.com,{AE93811A-5C9A-4d34-8462-F7B864FC4696},contextsearch2@lwz.addons.mozilla.org,{EF522540-89F5-46b9-B6FE-1829E2B572C6},{677a8f98-fd64-40b0-a883-b8c95d0cbf17},images@wink.su,fx-devtools,url_advisor@kaspersky.com,{d10d0bf8-f5b5-c8b4-a8b2-2b9879e08c5d},{dc572301-7619-498c-a57d-39143191b318},dta@downthemall.net,{86095750-AD15-46d8-BF32-C0789F7E6A32},screenwise-prod@google.com,{91aa5abe-9de4-4347-b7b5-322c38dd9271},secureLogin@blueimp.net,ich@maltegoetz.de,come.back.block.image.from@cat-in-136.blogspot.com,{7b1bf0b6-a1b9-42b0-b75d-252036438bdc},s3crypto@data,{1e0fd655-5aea-4b4c-a583-f76ef1e3af9c},akahuku.fx.sp@toshiakisp.github.io,{aff87fa2-a58e-4edd-b852-0a20203c1e17},{1018e4d6-728f-4b20-ad56-37578a4de76b},rehostimage@engy.us,lazarus@interclue.com,{b2e69492-2358-071a-7056-24ad0c3defb1},flashstopper@byo.co.il,{e4a8a97b-f2ed-450b-b12d-ee082ba24781},jid1-f3mYMbCpz2AZYl@jetpack,{8c550e28-88c9-4764-bb52-aa489cf2efcd},{37fa1426-b82d-11db-8314-0800200c9a66},{ac2cfa60-bc96-11e0-962b-0800200c9a66},igetter@presenta.net,killspinners@byo.co.il,abhere2@moztw.org,{fc6339b8-9581-4fc7-b824-dffcb091fcb7},wampi@wink.su,backtrack@byalexv.co.uk,Gladiator_X@mail.ru,{73a6fe31-595d-460b-a920-fcc0f8843232},{46551EC9-40F0-4e47-8E18-8E5CF550CFB8},acewebextension_unlisted@acestream.org,@screen_maker,yasearch@yandex.ru,sp@avast.com,s3google@translator,igetterextension@presenta.net,{C1A2A613-35F1-4FCF-B27F-2840527B6556},screenwise-testing@google.com,helper-sig@savefrom.net,ImageSaver@Merci.chao,proxtube@abz.agency,wrc@avast.com,{9AA46F4F-4DC7-4c06-97AF-5035170634FE},jid1-CikLKKPVkw6ipw@jetpack,artur.dubovoy@gmail.com,nlgfeb@nlgfeb.ext,{A065A84F-95B6-433A-A0C8-4C040B77CE8A},fdm_ffext@freedownloadmanager.org");

// Enable e10s hang monitoring (slow script checking and plugin hang
// detection).
pref("dom.ipc.processHangMonitor", true);

#ifdef DEBUG
// Don't report hangs in DEBUG builds. They're too slow and often a
// debugger is attached.
pref("dom.ipc.reportProcessHangs", false);
#else
pref("dom.ipc.reportProcessHangs", true);
#endif

// Don't limit how many nodes we care about on desktop:
pref("reader.parse-node-limit", 0);

// On desktop, we want the URLs to be included here for ease of debugging,
// and because (normally) these errors are not persisted anywhere.
pref("reader.errors.includeURLs", true);

pref("view_source.tab", true);

pref("dom.serviceWorkers.enabled", true);
pref("dom.serviceWorkers.openWindow.enabled", true);

// Enable Push API.
pref("dom.push.enabled", true);

// These are the thumbnail width/height set in about:newtab.
// If you change this, ENSURE IT IS THE SAME SIZE SET
// by about:newtab. These values are in CSS pixels.
pref("toolkit.pageThumbs.minWidth", 280);
pref("toolkit.pageThumbs.minHeight", 190);

// Enable speech synthesis
pref("media.webspeech.synth.enabled", true);

pref("browser.esedbreader.loglevel", "Error");

pref("browser.laterrun.enabled", false);

// Disable prelaunch in the same way activity-stream is enabled addressing
// bug 1381804 memory usage until bug 1376895 is fixed.
// Because of frequent crashes on Beta, it is turned off on all channels, see: bug 1363601.
pref("dom.ipc.processPrelaunch.enabled", false);

pref("browser.migrate.automigrate.enabled", false);
// 4 here means the suggestion notification will be automatically
// hidden the 4th day, so it will actually be shown on 3 different days.
pref("browser.migrate.automigrate.daysToOfferUndo", 4);
pref("browser.migrate.automigrate.ui.enabled", true);
pref("browser.migrate.automigrate.inpage.ui.enabled", false);

// See comments in bug 1340115 on how we got to these numbers.
pref("browser.migrate.chrome.history.limit", 2000);
pref("browser.migrate.chrome.history.maxAgeInDays", 180);

// Enable browser frames for use on desktop.  Only exposed to chrome callers.
pref("dom.mozBrowserFramesEnabled", true);

pref("extensions.pocket.enabled", true);

pref("signon.schemeUpgrades", true);

// "Simplify Page" feature in Print Preview. This feature is disabled by default
// in toolkit.
//
// This feature is only enabled on Nightly for Linux until bug 1306295 is fixed.
#ifdef UNIX_BUT_NOT_MAC
#if defined(NIGHTLY_BUILD)
pref("print.use_simplify_page", true);
#endif
#else
pref("print.use_simplify_page", true);
#endif

// Space separated list of URLS that are allowed to send objects (instead of
// only strings) through webchannels. This list is duplicated in mobile/android/app/mobile.js
pref("webchannel.allowObject.urlWhitelist", "https://accounts.firefox.com https://content.cdn.mozilla.net https://input.mozilla.org https://support.mozilla.org https://install.mozilla.org");

// Whether or not the browser should scan for unsubmitted
// crash reports, and then show a notification for submitting
// those reports.
#ifdef EARLY_BETA_OR_EARLIER
pref("browser.crashReports.unsubmittedCheck.enabled", true);
#else
pref("browser.crashReports.unsubmittedCheck.enabled", false);
#endif

// chancesUntilSuppress is how many times we'll show the unsubmitted
// crash report notification across different days and shutdown
// without a user choice before we suppress the notification for
// some number of days.
pref("browser.crashReports.unsubmittedCheck.chancesUntilSuppress", 4);
pref("browser.crashReports.unsubmittedCheck.autoSubmit", false);

// Preferences for the form autofill system extension
// The value of "extensions.formautofill.available" can be "on", "off" and "detect".
// The "detect" means it's enabled if conditions defined in the extension are met.
#ifdef NIGHTLY_BUILD
pref("extensions.formautofill.available", "on");
#else
pref("extensions.formautofill.available", "detect");
#endif
pref("extensions.formautofill.addresses.enabled", true);
pref("extensions.formautofill.creditCards.enabled", true);
pref("extensions.formautofill.firstTimeUse", true);
pref("extensions.formautofill.heuristics.enabled", true);
pref("extensions.formautofill.loglevel", "Warn");

// Whether or not to restore a session with lazy-browser tabs.
pref("browser.sessionstore.restore_tabs_lazily", true);

// Enable safebrowsing v4 tables (suffixed by "-proto") update.
pref("urlclassifier.malwareTable", "goog-malware-proto,goog-unwanted-proto,test-malware-simple,test-unwanted-simple");
pref("urlclassifier.phishTable", "goog-phish-proto,test-phish-simple");

pref("browser.suppress_first_window_animation", true);

// Preferences for Photon onboarding system extension
pref("browser.onboarding.enabled", true);
// Mark this as an upgraded profile so we don't offer the initial new user onboarding tour.
pref("browser.onboarding.tourset-version", 1);
pref("browser.onboarding.hidden", false);
// On the Activity-Stream page, the snippet's position overlaps with our notification.
// So use `browser.onboarding.notification.finished` to let the AS page know
// if our notification is finished and safe to show their snippet.
pref("browser.onboarding.notification.finished", false);
pref("browser.onboarding.notification.mute-duration-on-first-session-ms", 300000); // 5 mins
pref("browser.onboarding.notification.max-life-time-per-tour-ms", 432000000); // 5 days
pref("browser.onboarding.notification.max-prompt-count-per-tour", 8);
pref("browser.onboarding.newtour", "private,addons,customize,search,default,sync");
pref("browser.onboarding.updatetour", "");

// Preference that allows individual users to disable Screenshots.
pref("extensions.screenshots.disabled", false);
