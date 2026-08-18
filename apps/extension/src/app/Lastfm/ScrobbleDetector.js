import { useEffect, useRef } from "react";
import { useStore } from "/src/app/store";
import { parseTrack } from "./parseTrack";

const MIN_TRACK_LENGTH_S = 30;
const MIN_PLAYED_S = 240;
const MIN_PLAYED_FRACTION = 0.5;
const MAX_TIMEUPDATE_DELTA_S = 2;

function ScrobbleDetector() {
  const metadata = useStore((state) => state.media.metadata);
  const enabled = useStore((state) => state.lastfm.prefs.enabled);
  const sessionKey = useStore((state) => state.lastfm.prefs.sessionKey);
  const stateRef = useRef(null);

  useEffect(() => {
    if (!enabled || !sessionKey) return;
    const video = document.querySelector("video");
    if (!video) return;

    const parsed = parseTrack(metadata);
    if (!parsed) {
      console.log("[lastfm] skipping track — could not parse artist/title", metadata);
      stateRef.current = null;
      return;
    }

    const trackKey = `${parsed.artist}|${parsed.title}`;
    const isNewTrack = !stateRef.current || stateRef.current.trackKey !== trackKey;

    if (isNewTrack) {
      stateRef.current = {
        trackKey,
        artist: parsed.artist,
        title: parsed.title,
        album: parsed.album,
        duration: video.duration || 0,
        startedAt: Math.floor(Date.now() / 1000),
        playedSeconds: 0,
        lastTimeUpdate: video.currentTime,
        scrobbled: false,
        nowPlayingSent: false,
      };
      console.log("[lastfm] new track detected:", parsed);
    }

    function handleTimeUpdate() {
      const s = stateRef.current;
      if (!s) return;

      if (!s.duration && video.duration) s.duration = video.duration;

      if (!s.nowPlayingSent && s.duration > 0 && !video.paused) {
        s.nowPlayingSent = true;
        console.log("[lastfm] sending nowPlaying:", s.artist, "-", s.title);
        chrome.runtime.sendMessage(
          {
            type: "lastfm:nowPlaying",
            payload: { artist: s.artist, track: s.title, album: s.album, duration: s.duration },
          },
          (res) => console.log("[lastfm] nowPlaying response:", res)
        );
      }

      const now = video.currentTime;
      const delta = now - s.lastTimeUpdate;
      s.lastTimeUpdate = now;

      if (!video.paused && delta > 0 && delta < MAX_TIMEUPDATE_DELTA_S) {
        s.playedSeconds += delta;
      }

      if (s.scrobbled) return;
      if (s.duration <= MIN_TRACK_LENGTH_S) return;

      const crossedHalfway = s.playedSeconds >= s.duration * MIN_PLAYED_FRACTION;
      const crossedFourMin = s.playedSeconds >= MIN_PLAYED_S;

      if (crossedHalfway || crossedFourMin) {
        s.scrobbled = true;
        console.log(
          "[lastfm] threshold reached, scrobbling:",
          s.artist,
          "-",
          s.title,
          `(${s.playedSeconds.toFixed(1)}s / ${s.duration.toFixed(1)}s)`
        );
        chrome.runtime.sendMessage(
          {
            type: "lastfm:scrobble",
            payload: {
              artist: s.artist,
              track: s.title,
              album: s.album,
              timestamp: s.startedAt,
              duration: s.duration,
            },
          },
          (res) => console.log("[lastfm] scrobble response:", res)
        );
      }
    }

    video.addEventListener("timeupdate", handleTimeUpdate);
    return () => video.removeEventListener("timeupdate", handleTimeUpdate);
  }, [metadata, enabled, sessionKey]);

  return null;
}

export default ScrobbleDetector;
