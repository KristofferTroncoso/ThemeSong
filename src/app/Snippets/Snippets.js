import React from 'react';
import { useStore } from '../store';

function Snippets() {
  const snippets = useStore(state => state.snippets.snippets);

  return (
    <div id="ThemeSong-Snippets">
      {snippets.map(snippet => (
        <style key={snippet.id} id={snippet.id}>{snippet.css}</style>
      ))}
    </div>
  )
}

export default Snippets;