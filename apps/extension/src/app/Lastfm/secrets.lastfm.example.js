// Copy this file to `secrets.lastfm.js` and fill in your Last.fm API credentials.
// Register an app at https://www.last.fm/api/account/create to get these values.
// `secrets.lastfm.js` is gitignored (via the repo's `secrets.*.js` pattern).
//
// See SPEC-lastfm-scrobble.md §8 for the threat model — a client-side API
// secret can be extracted from the built bundle. Accepted trade-off.

export const LASTFM_API_KEY = "your-api-key-here";
export const LASTFM_SHARED_SECRET = "your-shared-secret-here";
