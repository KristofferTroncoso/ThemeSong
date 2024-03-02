import { Switch } from "@mui/material";
import { css } from "@emotion/react";
import { useStore } from "/src/app/store";
import QapIconAltSettings from "./pieces/QapIconAlt/QapIconAltSettings";
import { UserSnippetSettings } from "./pieces/UserSnippet";
import { LyricsSizeSettings } from "./pieces/LyricsSize";
import useLocalization from "../Extension/Localization/useLocalization";

function PiecePage() {
  const [pieces, piecePrefs, togglePiece] = useStore((state) => [
    state.piece.pieces,
    state.piece.prefs,
    state.piece.togglePiece,
  ]);
  const getMessage = useLocalization();

  return (
    <div
      id="Piece-Page"
      css={css`
        width: 400px;
      `}
    >
      <div id="Piece-container">
        {pieces.map((piece) => (
          <div
            key={piece.id}
            id={piece.id}
            css={css`
              margin: 5px;
              border: 0;
              border-radius: 7px;
              padding: 8px;
              background-color: #181818;
              display: flex;
              justify-content: space-between;
              align-items: center;
            `}
          >
            <div>
              <Switch
                checked={piecePrefs[piece.id].enabled}
                onChange={(e) => togglePiece(piece.id)}
                inputProps={{ "aria-label": "controlled" }}
                size="small"
              />
              <span
                css={css`
                  margin: 10px;
                  font-size: 14px;
                `}
              >
                {
                  {
                    "bf472cf5-689f-4be0-9eef-67c5cc8715e9": getMessage("hideCast"),
                    "a2c1185b-1d9b-4c0f-aef3-8c7887374cc5": getMessage("hideDislike"),
                    "fe8f93d0-45a3-4214-afa5-3e3db4274e1b": getMessage("hideVideoCaptions"),
                    "34637b81-0c1a-4982-b130-0ff9ac232e4d": getMessage("panelAltIcon"),
                    "2a606045-80f3-4aee-93de-cf3cd39d2920": getMessage("userSnippet"),
                    "895e0c50-c0a0-4752-8014-bd4cb5029e9b": getMessage("lyricsFontSize"),
                    "f900c555-d735-439f-b926-d5e407ba25f8": getMessage("hiResSongImage"),
                    "084b2bee-0686-4cc1-be6f-a9a6f87b8ee8": getMessage("centerSongControls"),
                  }[piece.id]
                }
              </span>
            </div>
            <div>
              {
                {
                  "34637b81-0c1a-4982-b130-0ff9ac232e4d": <QapIconAltSettings />,
                  "2a606045-80f3-4aee-93de-cf3cd39d2920": <UserSnippetSettings />,
                  "895e0c50-c0a0-4752-8014-bd4cb5029e9b": <LyricsSizeSettings />,
                }[piece.id]
              }
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default PiecePage;
