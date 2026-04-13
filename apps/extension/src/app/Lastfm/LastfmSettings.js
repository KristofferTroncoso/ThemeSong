import { useState } from "react";
import { css } from "@emotion/react";
import { useStore } from "/src/app/store";

function LastfmSettings() {
  const prefs = useStore((state) => state.lastfm.prefs);
  const setEnabled = useStore((state) => state.lastfm.setEnabled);
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState(null);

  const isConnected = !!prefs.sessionKey;

  function handleConnect() {
    setBusy(true);
    setError(null);
    chrome.runtime.sendMessage({ type: "lastfm:connect" }, (response) => {
      setBusy(false);
      if (chrome.runtime.lastError) {
        setError(chrome.runtime.lastError.message);
        return;
      }
      if (!response?.ok) setError(response?.error || "Connection failed");
    });
  }

  function handleDisconnect() {
    setBusy(true);
    setError(null);
    chrome.runtime.sendMessage({ type: "lastfm:disconnect" }, () => {
      setBusy(false);
    });
  }

  return (
    <div
      css={css`
        padding: 10px;
        margin-top: 15px;
        border-top: 1px solid rgba(255, 255, 255, 0.1);
      `}
    >
      <h2
        css={css`
          font-size: 16px;
          margin-bottom: 10px;
        `}
      >
        Last.fm scrobbling
      </h2>

      {isConnected ? (
        <div>
          <div
            css={css`
              font-size: 13px;
              margin-bottom: 8px;
            `}
          >
            Connected as <strong>{prefs.username}</strong>
          </div>
          <label
            css={css`
              display: flex;
              align-items: center;
              gap: 6px;
              font-size: 13px;
              margin-bottom: 8px;
            `}
          >
            <input
              type="checkbox"
              checked={prefs.enabled}
              onChange={(e) => setEnabled(e.target.checked)}
            />
            Scrobbling enabled
          </label>
          <button
            onClick={handleDisconnect}
            disabled={busy}
            css={css`
              background: #444;
              color: white;
              border: 1px solid #222;
              border-radius: 2px;
              padding: 4px 10px;
              cursor: pointer;
            `}
          >
            Disconnect
          </button>
        </div>
      ) : (
        <div>
          <div
            css={css`
              font-size: 13px;
              margin-bottom: 8px;
            `}
          >
            Connect your Last.fm account to scrobble tracks you play on YouTube Music.
          </div>
          <button
            onClick={handleConnect}
            disabled={busy}
            css={css`
              background: #d51007;
              color: white;
              border: 1px solid #800;
              border-radius: 2px;
              padding: 4px 12px;
              cursor: pointer;
            `}
          >
            {busy ? "Waiting for authorization…" : "Connect to Last.fm"}
          </button>
          {busy && (
            <div
              css={css`
                font-size: 11px;
                margin-top: 6px;
                color: #aaa;
              `}
            >
              A new tab opened — authorize there, then come back. This can take up to 2 minutes.
            </div>
          )}
        </div>
      )}

      {error && (
        <div
          css={css`
            color: #ff6b6b;
            font-size: 12px;
            margin-top: 8px;
          `}
        >
          {error}
        </div>
      )}
    </div>
  );
}

export default LastfmSettings;
