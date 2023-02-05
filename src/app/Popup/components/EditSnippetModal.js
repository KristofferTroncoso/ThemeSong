import { useState, useEffect } from "react";
import { Modal } from "@mui/material";
import { css } from "@emotion/react";
import { useStore } from "/src/app/store";

function EditSnippetModal({ snippet, open, setOpen }) {
  const snippets = useStore((state) => state.snippets.snippets);
  const addSnippet = useStore((state) => state.snippets.addSnippet);
  const deleteSnippet = useStore((state) => state.snippets.deleteSnippet);
  const editSnippet = useStore((state) => state.snippets.editSnippet);

  const [snippetName, setSnippetName] = useState(snippet.name);
  const [snippetCSS, setSnippetCSS] = useState(snippet.css);

  useEffect(() => {
    chrome.storage.local.set({ snippets }, () =>
      console.log("chrome.storage.local.set({snippets}")
    );
  }, [snippets]);

  const handleSave = (e) => {
    console.log(snippetName);
    console.log(snippetCSS);
    let snippetObj = {
      id: snippet.id,
      name: snippetName,
      css: snippetCSS,
      enabled: snippet.enabled,
    };
    console.log(snippetObj);
    editSnippet(snippetObj);
    handleClose();
  };

  const handleDelete = (snippetId) => {
    deleteSnippet(snippetId);
  };

  // const [open, setOpen] = React.useState(false);
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
          Snippet Name
        </p>
        <input
          type="text"
          placeholder="Snippet name"
          name="name"
          value={snippetName}
          onChange={(e) => setSnippetName(e.target.value)}
          maxLength="50"
          css={css`
            width: 96%;
            background-color: #111;
            color: #fff;
            border: 2px solid #555;
            margin: 5px 0;
            font-size: 14px;
            padding: 5px;
            border-radius: 4px;
          `}
        />
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
        <button
          onClick={(e) => handleDelete(snippet.id)}
          css={css`
            background-color: red;
            color: #fff;
            border: 0;
            padding: 5px 10px;
            border-radius: 4px;
            margin: 5px;
          `}
        >
          Delete
        </button>
      </div>
    </Modal>
  );
}

export default EditSnippetModal;
