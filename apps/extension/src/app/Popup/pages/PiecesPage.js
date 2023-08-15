import { useEffect } from "react";
import { Switch } from "@mui/material";
import { css } from "@emotion/react";
import { useStore } from "/src/app/store";

function PiecesPage() {
  const pieces = useStore((state) => state.pieces.pieces);
  const piecesPrefs = useStore((state) => state.pieces.piecesPrefs);
  const togglePiece = useStore((state) => state.pieces.togglePiece);

  useEffect(() => {
    chrome.storage.local.set({ piecesPrefs }, () => console.log("chrome.storage.local.set({piecesPrefs}"));
  }, [piecesPrefs]);

  const handleToggle = (pieceId) => {
    togglePiece(pieceId);
  };

  return (
    <div id="Pieces-Page">
      <div id="Pieces-container">
        {pieces.map((piece) => (
          <div
            key={piece.id}
            id={piece.id}
            css={css`
              margin: 10px;
              border: 0;
              border-radius: 10px;
              padding: 3px 10px;
              background-color: #333;
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
              checked={piecesPrefs[piece.id]}
              onChange={(e) => handleToggle(piece.id)}
              inputProps={{ "aria-label": "controlled" }}
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default PiecesPage;
