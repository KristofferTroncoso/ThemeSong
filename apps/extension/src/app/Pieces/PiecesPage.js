import { Switch } from "@mui/material";
import { css } from "@emotion/react";
import { useStore } from "/src/app/store";

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
              padding: 1px 10px;
              background-color: #222;
              display: flex;
              justify-content: space-between;
              align-items: center;
            `}
          >
            <span
              css={css`
                margin: 10px;
                font-size: 14px;
              `}
            >
              {piece.name}
            </span>
            <Switch
              checked={piecesPrefs[piece.id].enabled}
              onChange={(e) => togglePiece(piece.id)}
              inputProps={{ "aria-label": "controlled" }}
              size="small"
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default PiecesPage;