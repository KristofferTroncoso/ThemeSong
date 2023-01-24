/** @jsx jsx */
import React from 'react';
import { jsx, css } from '@emotion/react';
import { useStore } from '../../store';

import PanelButton from '../../QuickAccessPanel/components/PanelButton';
import SnoozeIcon from '@mui/icons-material/Snooze';

function SleepTimerPanelButton() {
  const isActive = useStore(state => state.utilities.sleepTimer.isActive);
  const changeIsDialogOpen = useStore(state => state.utilities.changeIsDialogOpen);

  return (
    <PanelButton 
      onClick={e => changeIsDialogOpen(true)} 
      title="Sleep Timer" 
      hoverColor="#ac13cf"
      bgColor={isActive && '#ac13cf'}
    >
      <SnoozeIcon css={css`font-size: 28px;`} />
    </PanelButton>
  )
}

export default SleepTimerPanelButton;