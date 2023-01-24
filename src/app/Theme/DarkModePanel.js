/** @jsx jsx */
import React from 'react';
import { jsx, css } from '@emotion/react';
import { useStore } from '../store';

import DarkModeIcon from '@mui/icons-material/DarkMode';
import LightModeIcon from '@mui/icons-material/LightMode';
import { CgDarkMode } from 'react-icons/cg';

import PanelButton from '../QuickAccessPanel/components/PanelButton';

function DarkModePanel() {
  const themePrefs = useStore(state => state.theme.themePrefs);
  const activeTheme = useStore(state => state.theme.activeTheme);
  // const activeThemeInfo = useStore(state => state.theme.themes.find(theme => theme.themeId === activeTheme));
  const activeThemeUserPrefs = useStore(state => state.theme.themePrefs.find(theme => theme.themeId === activeTheme));
  const changeThemePrefs = useStore(state => state.theme.changeThemePrefs);

  function handleDarkLightChange(value) {
    if (activeThemeUserPrefs.appearanceSetting !== value) {
      let newActiveThemeUserPrefs = {...activeThemeUserPrefs, appearanceSetting: value};
      let newThemePrefsArr = themePrefs.map(themePrefs => 
        themePrefs.themeId === activeTheme
      ? newActiveThemeUserPrefs
      : themePrefs);
      changeThemePrefs(newThemePrefsArr);
      chrome.storage.local.set({themePrefs: newThemePrefsArr}, () => console.log('chrome.storage.local.set({themePrefs}'));
    } else {
      // i cant just disable="true" the button in the element because the MUI Tooltip requires it to never be disabled
      // i used to have it with this which worked well: disabled={activeThemeUserPrefs.appearanceSetting ===  "dark"}
      console.log('Already active')
    }
  }

  if (!(activeTheme === "themeId:6" || activeTheme === "themeId:7")) {
    return (
      <div>
        <h3 css={css`padding: 2px 5px; color: var(--themesong-base-40-color, rgba(255,255,255,0.2));`}>Appearance</h3>
        <div
          css={css`
            background-color: rgba(0,0,0,0.15);
            width: 190px;
            height: 34px;
            margin: 3px;
            border-radius: 7px;
          `}
        />
      </div>
    )
  } else {
    return (
      <div css={css`margin-bottom: 0;`}>
        <h3 css={css`padding: 2px 5px;`}>Appearance</h3>
        <div css={css`display: flex; justify-content: start; align-items: center;`}>
          <PanelButton
            title="Dark Mode"
            css={css`
              height: 38px;
              min-width: 45px;
              width: 60px;
              margin: 0 2px;
              background: ${activeThemeUserPrefs.appearanceSetting ===  "dark" && 'rgba(255,255,255,0.8)'};
              color: ${activeThemeUserPrefs.appearanceSetting ===  "dark" && '#9d00ff'};
              border: 0;
              border-radius: 5px 0 0 5px;
              :hover {
                color: #9d00ff;
              }
            `}
            onClick={e => handleDarkLightChange("dark")}
          >
            <DarkModeIcon fontSize='large' />
          </PanelButton>
          <PanelButton
            title="Light Mode"
            css={css`
              height: 38px;
              min-width: 45px;
              width: 60px;
              margin: 0 2px;
              background: ${activeThemeUserPrefs.appearanceSetting ===  "light" && 'rgba(255,255,255,0.8)'};
              color: ${activeThemeUserPrefs.appearanceSetting ===  "light" && '#de9800'};
              border: 0;
              border-radius: 0;
              :hover {
                color: #fcad00;
              }
            `}
            onClick={e => handleDarkLightChange("light")}
          >
            <LightModeIcon css={css`font-size: 26px;`} />
          </PanelButton>
          <PanelButton
            title="Use Device Setting"
            css={css`
              height: 38px;
              min-width: 45px;
              width: 60px;
              margin: 0 2px;
              background: ${activeThemeUserPrefs.appearanceSetting ===  "system"  && 'rgba(255,255,255,0.8)'};
              color: ${activeThemeUserPrefs.appearanceSetting ===  "system" && '#009961'};
              border: 0;
              border-radius: 0 5px 5px 0;
              :hover {
                color: #009961;
              }
            `}
            onClick={e => handleDarkLightChange("system")}
          >
            <CgDarkMode size={24} />
          </PanelButton>
        </div>
      </div>
    )
  }
}

export default DarkModePanel;