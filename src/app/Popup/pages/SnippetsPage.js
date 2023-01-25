import { useEffect } from 'react';
import { css } from '@emotion/react';
import { useStore } from '../../store';
import Snippet from '../components/Snippet';
import { v4 as uuid } from 'uuid';

function SnippetsPage() {
  const snippets = useStore(state => state.snippets.snippets);
  const addSnippet = useStore(state => state.snippets.addSnippet);

  useEffect(() => {
    chrome.storage.local.set({snippets}, () => console.log('chrome.storage.local.set({snippets}'));
  }, [snippets]);

  return (
    <div id="Snippets-Page">
      <div id="Snippets-container">
        {snippets.map(snippet => (
          <Snippet key={snippet.id} snippet={snippet} />
        ))}
        <button 
          onClick={e => {
            let newUuid = uuid();
            addSnippet({
              id: newUuid,
              name: `New Snippet ${newUuid.slice(0, 4)}`,
              css: '',
              enabled: true
            })
          }}
          css={css`
            background: #333;
            padding: 10px;
            color: #fff;
            border: 1px solid #444;
            border-radius: 8px;
            margin: 10px;
            :hover {
              background: #fff;
              color: #000;
            }
          `}
        >
          + Add Snippet
        </button>
      </div>
    </div>
  )
}

export default SnippetsPage;