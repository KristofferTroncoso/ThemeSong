/** @jsx jsx */
import React from 'react';
import { jsx, css } from '@emotion/react';
import { useSelector, useDispatch } from 'react-redux';

import { changeThemes } from '../../../../../redux/themes/themesSlice';

import DarkModeIcon from '@mui/icons-material/DarkMode';
import LightModeIcon from '@mui/icons-material/LightMode';
import { CgDarkMode } from 'react-icons/cg';

import PanelButton from './PanelButton';

function DarkModePanel() {
  const dispatch = useDispatch();

  const themes = useSelector(state => state.themes.themes);
  const activeTheme = useSelector(state => state.themes.activeTheme);
  const activeThemeInfo = useSelector(state => state.themes.themes.find(theme => theme.themeId === activeTheme));
  const activeThemeUserPrefs = useSelector(state => state.themes.themes.find(theme => theme.themeId === activeTheme).userPrefs);

  function handleDarkLightChange(value) {
    if (activeThemeUserPrefs.appearanceSetting !== value) {
      let newActiveThemeUserPrefs = {...activeThemeUserPrefs, appearanceSetting: value};
      let newThemesArr = themes.map(theme => (
        theme.themeId === activeTheme
        ? theme = {...theme, userPrefs: newActiveThemeUserPrefs}
        : theme
      ));
      console.log(newThemesArr)
      dispatch(changeThemes(newThemesArr));
      chrome.storage.local.set({themes: newThemesArr}, () => console.log('chrome.storage.local.set({themes}'));
    } else {
      // i cant just disable="true" the button in the element because the MUI Tooltip requires it to never be disabled
      // i used to have it with this which worked well: disabled={activeThemeUserPrefs.appearanceSetting ===  "dark"}
      console.log('Already active')
    }
  }

  if (activeTheme === "themeId:0") {
    return <div></div>
  } else {
    return (
      <div css={css`margin-bottom: 0;`}>
        <h3 css={css`padding: 2px 5px;`}>{activeThemeInfo.name} Theme - Appearance</h3>
        <div css={css`display: flex; justify-content: start; align-items: center;`}>
          <PanelButton
            title="Dark Mode"
            css={css`
              height: 42px;
              min-width: 45px;
              width: 60px;
              margin: 5px 4px 5px 5px;
              background: ${activeThemeUserPrefs.appearanceSetting ===  "dark" ? 'rgba(255,255,255,0.8)' : 'rgba(0,0,0,0.4)'};
              color: ${activeThemeUserPrefs.appearanceSetting ===  "dark" ? '#1565e6' : 'white'};
              border: 0;
              border-radius: 5px 0 0 8px;
              :hover {
                background-color: ${activeThemeUserPrefs.appearanceSetting !==  "dark"  && 'rgba(255,255,255,0.4)'};
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
              height: 42px;
              min-width: 45px;
              width: 60px;
              margin: 0;
              background: ${activeThemeUserPrefs.appearanceSetting ===  "light" ? 'rgba(255,255,255,0.8)' : 'rgba(0,0,0,0.4)'};
              color: ${activeThemeUserPrefs.appearanceSetting ===  "light" ? '#1565e6' : 'white'};
              border: 0;
              border-radius: 0;
              :hover {
                background-color: ${activeThemeUserPrefs.appearanceSetting !==  "light"  && 'rgba(255,255,255,0.4)'};
                color: #fcad00;
              }
            `}
            onClick={e => handleDarkLightChange("light")}
          >
            <LightModeIcon fontSize='large' />
          </PanelButton>
          <PanelButton
            title="Use Device Setting"
            css={css`
              height: 42px;
              min-width: 45px;
              width: 60px;
              margin: 5px 5px 5px 4px;
              background: ${activeThemeUserPrefs.appearanceSetting ===  "system"  ? 'rgba(255,255,255,0.8)' : 'rgba(0,0,0,0.4)'};
              color: ${activeThemeUserPrefs.appearanceSetting ===  "system" ? '#1565e6' : 'white'};
              border: 0;
              border-radius: 0 5px 8px 0;
              :hover {
                background-color: ${activeThemeUserPrefs.appearanceSetting !==  "system"  && 'rgba(255,255,255,0.4)'};
                color: #02c927;
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