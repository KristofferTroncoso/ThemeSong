/** @jsx jsx */
import React from 'react';
import { jsx, css } from '@emotion/react';

import { useStore } from '../../store';

import StyledPanelDiv from "./StyledPanelDiv";
import PanelButton from './PanelButton';
import DataObjectIcon from '@mui/icons-material/DataObject';
import SnoozeIcon from '@mui/icons-material/Snooze';

function UtilitiesPanel() {
  const store = useStore()

  function handleTimerClick() {
    const minutes = 0.2;

    setTimeout(() => {
      if (document.getElementById("play-pause-button").title === "Pause") {
        document.getElementById("play-pause-button").click()
      }
    }, minutes * 60000)
  }

  return (
    <StyledPanelDiv>
      <h3 css={css`padding: 2px 5px; color: var(--themesong-secondary-text-color);`}>Utilities</h3>
      <div css={css`display: flex; justify-content: start; align-items: center;`}>
        <PanelButton 
          onClick={handleTimerClick} 
          title="Timer" 
          hoverColor="#008c7e"
        >
          <SnoozeIcon css={css`font-size: 28px;`} />
        </PanelButton>
        <PanelButton 
          onClick={e => console.log(store)} 
          title="Log Store" 
          hoverColor="#008c7e"
        >
          <DataObjectIcon css={css`font-size: 28px;`} />
        </PanelButton>
      </div>
    </StyledPanelDiv>
  )
}

export default UtilitiesPanel;