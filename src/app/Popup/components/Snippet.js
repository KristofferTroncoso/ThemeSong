/** @jsx jsx */
import React from 'react';
import { Switch, Modal } from '@mui/material';
import { jsx, css } from '@emotion/react';
import { useStore } from '../../store';
import EditIcon from '@mui/icons-material/Edit';
import EditSnippetModal from './EditSnippetModal';

function Snippet({snippet}) {
  const snippets = useStore(state => state.snippets.snippets);
  const toggleSnippet = useStore(state => state.snippets.toggleSnippet);

  React.useEffect(() => {
    chrome.storage.local.set({snippets}, () => console.log('chrome.storage.local.set({snippets}'));
  }, [snippets]);

  const handleToggle = snippetId => {
    toggleSnippet(snippetId)
  };

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);

  return (
    <div>
      <div 
        key={snippet.id} 
        id={snippet.id}
        css={css`
          margin: 10px;
          border: 0;
          border-radius: 10px;
          padding: 5px 10px;
          background-color: #333;
          display: flex;
          justify-content: space-between;
          align-items: center;
        `}
      >
        <Switch
          checked={snippet.enabled}
          onChange={e => handleToggle(snippet.id)}
          inputProps={{ 'aria-label': 'controlled' }}
        />
        <span css={css`margin: 10px; font-size: 14px;`}>{snippet.name}</span>
        <div>
          <button 
            onClick={handleOpen}
            css={css`
              background-color: #222;
              color: #fff;
              border: 1px solid #444;
              border-radius: 5px;
              padding-top: 3px;
              :hover {
                color: #000;
                background-color: #fff;
              }
            `}
          >
            <EditIcon fontSize='small'/>
          </button>
        </div>
      </div>
      <EditSnippetModal snippet={snippet} open={open} setOpen={setOpen} />
    </div>
  )
}

export default Snippet;