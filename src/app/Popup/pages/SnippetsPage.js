/** @jsx jsx */
import React from 'react';
import { jsx, css } from '@emotion/react';
import { useStore } from '../../store';

function SnippetsPage() {
  const snippets = useStore(state => state.snippets.snippets);
  const addSnippet = useStore(state => state.snippets.addSnippet);

  const [snippetName, setSnippetName] = React.useState('');
  const [snippetCSS, setSnippetCSS] = React.useState('');

  const handleSubmit = e => {
    e.preventDefault();
    console.log(snippetName)
    console.log(snippetCSS)
    let snippetObj = {
      id: Math.floor(Math.random() * 10000),
      name: snippetName,
      css: snippetCSS,
      enabled: true
    };
    console.log(snippetObj)
    addSnippet(snippetObj);
  }

  return (
    <div id="Snippets-Page">
      <p>What are snippets? You can add your own CSS code here!</p>
      <div>
        {snippets.map(snippet => (
          <button 
            key={snippet.id} 
            id={snippet.id}
            style={
              snippet.enabled ? {background: 'green'} : {background: 'red'}
            }
          >
            {snippet.name}
          </button>
        ))}
      </div>
      <div 
        id="snippet-details" 
        css={css`
          border: 1px solid tomato;
          padding: 10px;
          margin-top: 40px;
        `}
      >
        <form onSubmit={handleSubmit}>
          <input 
            type='text'
            placeholder='Snippet name'
            name='name'
            value={snippetName}
            onChange={e => setSnippetName(e.target.value)}
          />
          <input 
            type='text'
            placeholder='CSS'
            name='css'
            value={snippetCSS}
            onChange={e => setSnippetCSS(e.target.value)}
          />
          <input type='submit' />
        </form>
        {/* <textarea 
          placeholder='CSS'
        /> */}
        {/* <button>Save</button> */}
      </div>
    </div>
  )
}

export default SnippetsPage;