/** @jsx jsx */
import React from 'react';
import { jsx, css } from '@emotion/react';

import { useSelector } from 'react-redux';

import PanelButton from './PanelButton';
import DataObjectIcon from '@mui/icons-material/DataObject';
import SnoozeIcon from '@mui/icons-material/Snooze';


function UtilitiesPanel() {
  const reduxStore = useSelector(state => state);

  function handleTimerClick() {
    setTimeout(() => {
      document.getElementById("play-pause-button").click()
    }, 10000)
  }

  return (
    <div css={{marginBottom: '10px'}}>
      <h3 css={css`padding: 2px 5px; color: var(--ts-secondary-text-color);`}>Tools</h3>
      <div css={css`display: flex; justify-content: start; align-items: center;`}>
        <PanelButton onClick={e => console.log(reduxStore)} title="log store"><DataObjectIcon fontSize='large' /></PanelButton>
        <PanelButton onClick={handleTimerClick} title="Timer"><SnoozeIcon css={css`font-size: 28px;`} /></PanelButton>
      </div>
    </div>
  )
}

export default UtilitiesPanel;