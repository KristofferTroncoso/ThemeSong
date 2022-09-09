/** @jsx jsx */
import { jsx, css } from '@emotion/react';

import SongPanel from './components/SongPanel';
import VisualizerPanel from './components/VisualizerPanel';
import ThemePanel from './components/ThemePanel';
import DarkModePanel from './components/DarkModePanel';
// import UtilitiesPanel from './components/UtilitiesPanel';

import { Tooltip } from '@mui/material';
import HelpIcon from '@mui/icons-material/Help';
import TuneIcon from '@mui/icons-material/Tune';

function PanelPage() {
  return (
    <div
      css={css`
        padding: 6px;
        border: 1px solid rgba(255, 255, 255, 0.1);
        background-color: var(--ts-playbar-color);
        transition: var(--ts-bgcolor-transition);
        color: var(--ts-secondary-text-color);
      `}
    >
      <div css={css`text-align: right;`}>
        <Tooltip title={<p css={css`font-size: 12px;`}>ThemeSong Quick Access Panel</p>}>
          <HelpIcon style={{fontSize: '14px'}} />
        </Tooltip>
      </div>
      <div>
        <SongPanel />
        <VisualizerPanel />
        <ThemePanel />
        <DarkModePanel />
        {/* <UtilitiesPanel /> */}
      </div>
      <div css={css`text-align: right;`}>
        <Tooltip 
          title={
            <p css={css`font-size: 12px;`}>
              Additional settings and options available through the ThemeSong popup icon on your toolbar.
            </p>
          }
        >
          <TuneIcon style={{fontSize: '16px'}} />
        </Tooltip>
      </div>
    </div>
  )
}

export default PanelPage;