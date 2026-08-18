import { md5 } from "./md5";
import { LASTFM_API_KEY, LASTFM_SHARED_SECRET } from "./secrets.lastfm";

const API_ROOT = "https://ws.audioscrobbler.com/2.0/";
export const AUTH_URL = (token) =>
  `https://www.last.fm/api/auth/?api_key=${LASTFM_API_KEY}&token=${token}`;

function signParams(params) {
  const keys = Object.keys(params).sort();
  let concat = "";
  for (const k of keys) concat += k + params[k];
  concat += LASTFM_SHARED_SECRET;
  return md5(concat);
}

async function callGet(method, extraParams = {}) {
  const params = {
    method,
    api_key: LASTFM_API_KEY,
    format: "json",
    ...extraParams,
  };
  const qs = new URLSearchParams(params).toString();
  const res = await fetch(`${API_ROOT}?${qs}`);
  const data = await res.json();
  if (data.error) throw new Error(`Last.fm ${method} error ${data.error}: ${data.message}`);
  return data;
}

async function callSignedPost(method, extraParams, sessionKey) {
  const params = {
    method,
    api_key: LASTFM_API_KEY,
    ...extraParams,
  };
  if (sessionKey) params.sk = sessionKey;
  const toSign = { ...params };
  params.api_sig = signParams(toSign);
  params.format = "json";

  const body = new URLSearchParams(params).toString();
  const res = await fetch(API_ROOT, {
    method: "POST",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body,
  });
  const data = await res.json();
  if (data.error) throw new Error(`Last.fm ${method} error ${data.error}: ${data.message}`);
  return data;
}

export async function getToken() {
  const params = { method: "auth.getToken", api_key: LASTFM_API_KEY };
  const sig = signParams(params);
  const qs = new URLSearchParams({ ...params, api_sig: sig, format: "json" }).toString();
  const res = await fetch(`${API_ROOT}?${qs}`);
  const data = await res.json();
  if (data.error) throw new Error(`Last.fm auth.getToken error ${data.error}: ${data.message}`);
  return data.token;
}

export async function getSession(token) {
  const params = { method: "auth.getSession", api_key: LASTFM_API_KEY, token };
  const sig = signParams(params);
  const qs = new URLSearchParams({ ...params, api_sig: sig, format: "json" }).toString();
  const res = await fetch(`${API_ROOT}?${qs}`);
  const data = await res.json();
  if (data.error) {
    const err = new Error(`Last.fm auth.getSession error ${data.error}: ${data.message}`);
    err.code = data.error;
    throw err;
  }
  return { sessionKey: data.session.key, username: data.session.name };
}

export async function updateNowPlaying({ artist, track, album, duration }, sessionKey) {
  const params = { artist, track };
  if (album) params.album = album;
  if (duration) params.duration = String(Math.round(duration));
  return callSignedPost("track.updateNowPlaying", params, sessionKey);
}

export async function scrobble({ artist, track, album, timestamp, duration }, sessionKey) {
  const params = {
    artist,
    track,
    timestamp: String(timestamp),
  };
  if (album) params.album = album;
  if (duration) params.duration = String(Math.round(duration));
  return callSignedPost("track.scrobble", params, sessionKey);
}
