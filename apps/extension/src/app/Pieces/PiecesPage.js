import { Switch } from "@mui/material";
import { css } from "@emotion/react";
import { useStore } from "/src/app/store";
import { QapIconAltSettings } from "./pieces/QapIconAlt";
import { UserSnippetSettings } from "./pieces/UserSnippet";

function PiecesPage() {
  const [pieces, piecesPrefs, togglePiece] = useStore((state) => [
    state.pieces.pieces,
    state.pieces.prefs,
    state.pieces.togglePiece,
  ]);

  return (
    <div id="Pieces-Page">
      <div id="Pieces-container">
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
                checked={piecesPrefs[piece.id].enabled}
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
                }[piece.id]
              }
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default PiecesPage;
