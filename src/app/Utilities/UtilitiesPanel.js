/** @jsx jsx */
import React from 'react';
import { jsx, css } from '@emotion/react';

import SleepTimerPanelButton from './SleepTimer/SleepTimerPanelButton';
import StyledPanelDiv from "../QuickAccessPanel/components/StyledPanelDiv";


function UtilitiesPanel() {

  return (
    <StyledPanelDiv>
      <h3 css={css`padding: 2px 5px; color: var(--themesong-secondary-text-color);`}>Utilities</h3>
      <div css={css`display: flex; justify-content: start; align-items: center;`}>
        <SleepTimerPanelButton />
      </div>
    </StyledPanelDiv>
  )
}

export default UtilitiesPanel;