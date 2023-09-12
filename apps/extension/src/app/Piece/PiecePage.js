import { Switch } from "@mui/material";
import { css } from "@emotion/react";
import { useStore } from "/src/app/store";
import { QapIconAltSettings } from "./pieces/QapIconAlt";
import { UserSnippetSettings } from "./pieces/UserSnippet";
import { LyricsSizeSettings } from "./pieces/LyricsSize";

function PiecePage() {
  const [pieces, piecePrefs, togglePiece] = useStore((state) => [
    state.piece.pieces,
    state.piece.prefs,
    state.piece.togglePiece,
  ]);

  return (
    <div id="Piece-Page">
      <div id="Piece-container">
        {pieces.map((piece) => (
          <div
            key={piece.id}
            id={piece.id}
            css={css`
              margin: 5px;
              border: 0;
              border-radius: 10px;
              padding: 8px;
              background-color: #222;
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
                {piece.name}
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
