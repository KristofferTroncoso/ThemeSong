import { useStore } from "/src/app/store";
import { useState } from "react";
import { Modal } from "@mui/material";
import { css } from "@emotion/react";
import EditIcon from "@mui/icons-material/Edit";

function UserSnippet() {
  const userSnippetPrefs = useStore((state) => state.piece.prefs["2a606045-80f3-4aee-93de-cf3cd39d2920"]);

  return <style id="UserSnippet">{userSnippetPrefs.css}</style>;
}

export function UserSnippetSettings() {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);

  return (
    <div>
      <div>
        <button
          onClick={handleOpen}
          css={css`
            background-color: #222;
            color: #fff;
            border: 1px solid #444;
            border-radius: 5px;
            padding: 6px 8px 3px;
            :hover {
              color: #000;
              background-color: #fff;
            }
          `}
        >
          <EditIcon
            css={css`
              font-size: 16px;
            `}
          />
        </button>
      </div>
      <EditSnippetModal open={open} setOpen={setOpen} />
    </div>
  );
}

export function EditSnippetModal({ open, setOpen }) {
  const userSnippetPrefs = useStore((state) => state.piece.prefs["2a606045-80f3-4aee-93de-cf3cd39d2920"]);
  const setPiecePrefs = useStore((state) => state.piece.setPiecePrefs);

  const [snippetCSS, setSnippetCSS] = useState(userSnippetPrefs.css);

  const handleSave = (e) => {
    setPiecePrefs("2a606045-80f3-4aee-93de-cf3cd39d2920", { ...userSnippetPrefs, enabled: true, css: snippetCSS });
    handleClose();
  };

  const handleClose = () => setOpen(false);

  return (
    <Modal open={open} onClose={handleClose}>
      <div
        id="snippet-form-container"
        css={css`
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          border: 1px solid #555;
          border-radius: 6px;
          padding: 10px;
          height: 380px;
          width: 320px;
          background-color: #222;
        `}
      >
        <div
          css={css`
            text-align: right;
          `}
        >
          <button
            onClick={handleClose}
            css={css`
              background-color: #111;
              color: #fff;
              border: 1px solid #555;
              border-radius: 2px;
              padding: 3px 10px;
              :hover {
                background-color: #fff;
                color: #000;
              }
            `}
          >
            x
          </button>
        </div>

        <p
          css={css`
            color: #999;
          `}
        >
          Snippet CSS
        </p>
        <textarea
          placeholder={`/* insert CSS (e.g.) */
body {
  background-color: tomato;
}`}
          name="css"
          value={snippetCSS}
          onChange={(e) => setSnippetCSS(e.target.value)}
          css={css`
            background-color: #111;
            color: #fff;
            width: 96%;
            height: 220px;
            border: 2px solid #555;
            border-radius: 4px;
            padding: 5px;
          `}
        />
        <button
          onClick={handleSave}
          css={css`
            background-color: dodgerblue;
            color: #fff;
            border: 0;
            padding: 5px 10px;
            border-radius: 4px;
            margin: 5px;
          `}
        >
          Save
        </button>
      </div>
    </Modal>
  );
}

export default UserSnippet;
