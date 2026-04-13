![ThemeSong icon](/assets/icon-128.png)

# ThemeSong Browser Extension

Chrome and Firefox Extension for YouTube Music™

Dynamic themes, visualizers, and utilities for YouTube Music™ (https://music.youtube.com)

## Last.fm scrobbling

ThemeSong can scrobble tracks you play on YouTube Music to your Last.fm account.

### Build setup

The Last.fm integration needs an API key and shared secret. The repo does not commit these — you supply them via a gitignored file before building.

1. Register an API app at https://www.last.fm/api/account/create. Callback URL can be left blank.
2. Copy the example credentials file:
   ```
   cp src/app/Lastfm/secrets.lastfm.example.js src/app/Lastfm/secrets.lastfm.js
   ```
3. Paste your API key and shared secret into `secrets.lastfm.js`.
4. Build normally (`pnpm build` or `pnpm start`).

### Security note

A Last.fm API secret shipped in a browser extension can be extracted from the installed bundle by anyone — this is inherent to client-side code and true of every Last.fm-scrobbling extension on the stores. If the shared secret ever leaks or the key is abused, revoke it at https://www.last.fm/api/accounts and reissue. Published builds should use a dedicated API key owned by the extension maintainer.
