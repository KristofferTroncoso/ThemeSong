/** @jsx jsx */
import React from 'react';
import { jsx, css } from '@emotion/react';

import { useStore } from '../../store';

import PanelButton from './PanelButton';
import DataObjectIcon from '@mui/icons-material/DataObject';
import SnoozeIcon from '@mui/icons-material/Snooze';

// import { toggleRemoveDislikeButton, changeRemoveDislikeButton } from '../../Test/testSlice';

function UtilitiesPanel() {
  const store = useStore()

  function handleTimerClick() {
    setTimeout(() => {
      document.getElementById("play-pause-button").click()
    }, 10000)
  }

  return (
    <div css={{marginBottom: '10px'}}>
      <h3 css={css`padding: 2px 5px; color: var(--ts-secondary-text-color);`}>Tools</h3>
      <div css={css`display: flex; justify-content: start; align-items: center;`}>
        <PanelButton onClick={handleTimerClick} title="Timer"><SnoozeIcon css={css`font-size: 28px;`} /></PanelButton>
        <PanelButton onClick={e => console.log(store)} title="Log Store"><DataObjectIcon css={css`font-size: 28px;`} /></PanelButton>
      </div>
    </div>
  )
}

export default UtilitiesPanel;