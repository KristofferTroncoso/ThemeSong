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
        <p><b>v0.4.5 Visualizer Fix (Dec 15, 2022)</b></p>
        <p>Visualizers finally animating for everyone? If they didn't before, please refresh and try again.</p>
        <p>Thanks to the people who reviewed and helped track this bug down!</p>
        <p><b>v0.4.4 New Theme: "Ditto"!</b></p>
        <p>YouTube Music Mobile and Apple Music clones.</p>
        <p>Click on the ThemeSong icon on your browser toolbar to check it out!</p>
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