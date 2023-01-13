/** @jsx jsx */
import React from 'react';
import { jsx, css } from '@emotion/react';

import { useStore } from '../../store';

import StyledPanelDiv from "./StyledPanelDiv";

function UpdatePanel() {
  const changeShowUpdateNote = useStore(state => state.extension.changeShowUpdateNote);

  return (
    <StyledPanelDiv css={css`background-color: #d95600;`}>
      <h2 css={css`padding: 0 2px; color: var(--themesong-primary-text-color);`}><u>ThemeSong Update / Notes</u></h2>
      <div css={css`color: var(--themesong-primary-text-color); padding: 2px; font-size: 13px; max-width: 280px;`}>
        <p><b>v0.4.6 Bug fixes (Jan 14, 2023)</b></p>
        <p>* Visualizer-Circles Palette and Accent now properly change on each song.</p>
        <p>* Other minor styling fixes.</p>
      </div>
      <button
        css={css`
          margin-top: 5px;
          width: 100px;
          padding: 4px;
          background-color: orange;
          border: 1px solid black;
          border-radius: 3px;
          
          :hover {
            background-color: white;
          }
        `}
        onClick={e => {
          console.log('hi');
          changeShowUpdateNote(false);
          chrome.storage.local.set({showUpdateNote: false}, () => console.log('chrome.storage.local.set({showUpdateNote}'))
        }}
      >
        ok
      </button>
    </StyledPanelDiv>
  )
}

export default UpdatePanel;