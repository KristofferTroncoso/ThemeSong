/** @jsx jsx */
import React from 'react';
import { jsx, css } from '@emotion/react';
import { useSelector, useDispatch } from 'react-redux';

import { changeThemes } from '../../../../../redux/themes/themesSlice';

import DarkModeIcon from '@mui/icons-material/DarkMode';
import LightModeIcon from '@mui/icons-material/LightMode';
import Brightness4Icon from '@mui/icons-material/Brightness4';

function DarkModePanel() {
  const dispatch = useDispatch();

  const themes = useSelector(state => state.themes.themes);
  const activeTheme = useSelector(state => state.themes.activeTheme);
  const activeThemeInfo = useSelector(state => state.themes.themes.find(theme => theme.themeId === activeTheme));
  const activeThemeUserPrefs = useSelector(state => state.themes.themes.find(theme => theme.themeId === activeTheme).userPrefs);

  function handleDarkLightChange(value) {
    let newActiveThemeUserPrefs = {...activeThemeUserPrefs, darkLightSetting: value};
    let newThemesArr = themes.map(theme => (
      theme.themeId === activeTheme
      ? theme = {...theme, userPrefs: newActiveThemeUserPrefs}
      : theme
    ));
    console.log(newThemesArr)
    dispatch(changeThemes(newThemesArr));
    chrome.storage.local.set({themes: newThemesArr}, () => console.log('chrome.storage.local.set({themes}'));
  }

  if (activeTheme === "themeId:0") {
    return <div></div>
  } else {
    return (
      <div css={css`margin-bottom: 10px;`}>
        <h3 css={css`padding: 2px 5px; color: var(--ts-primary-text-color);`}>{activeThemeInfo.name} Theme - Appearance</h3>
        <div css={css`display: flex; justify-content: start; align-items: center;`}>
          <button
            css={css`
              height: 45px;
              min-width: 45px;
              width: 60px;
              margin: 5px 4px 5px 5px;
              background: ${activeThemeUserPrefs.darkLightSetting ===  "dark" ? 'rgba(255,255,255,0.8)' : 'rgba(0,0,0,0.4)'};
              color: ${activeThemeUserPrefs.darkLightSetting ===  "dark" ? '#1565e6' : 'white'};
              border: 0;
              border-radius: 8px 0 0 8px;
              :hover {
                background-color: ${activeThemeUserPrefs.darkLightSetting !==  "dark"  && 'rgba(255,255,255,0.4)'};
              }
            `}
            disabled={activeThemeUserPrefs.darkLightSetting ===  "dark"}
            onClick={e => handleDarkLightChange("dark")}
          >
            <DarkModeIcon fontSize='large' />
          </button>
          <button
            css={css`
              height: 45px;
              min-width: 45px;
              width: 60px;
              margin: 0;
              background: ${activeThemeUserPrefs.darkLightSetting ===  "light" ? 'rgba(255,255,255,0.8)' : 'rgba(0,0,0,0.4)'};
              color: ${activeThemeUserPrefs.darkLightSetting ===  "light" ? '#1565e6' : 'white'};
              border: 0;
              :hover {
                background-color: ${activeThemeUserPrefs.darkLightSetting !==  "light"  && 'rgba(255,255,255,0.4)'};
              }
            `}
            disabled={activeThemeUserPrefs.darkLightSetting ===  "light"}
            onClick={e => handleDarkLightChange("light")}
          >
            <LightModeIcon fontSize='large' />
          </button>
          <button
            css={css`
              height: 45px;
              min-width: 45px;
              width: 60px;
              margin: 5px 5px 5px 4px;
              background: ${activeThemeUserPrefs.darkLightSetting ===  "system"  ? 'rgba(255,255,255,0.8)' : 'rgba(0,0,0,0.4)'};
              color: ${activeThemeUserPrefs.darkLightSetting ===  "system" ? '#1565e6' : 'white'};
              border: 0;
              border-radius: 0 8px 8px 0;
              :hover {
                background-color: ${activeThemeUserPrefs.darkLightSetting !==  "system"  && 'rgba(255,255,255,0.4)'};
              }
            `}
            disabled={activeThemeUserPrefs.darkLightSetting ===  "system"}
            onClick={e => handleDarkLightChange("system")}
          >
            <Brightness4Icon fontSize='large' />
          </button>
        </div>
      </div>
    )
  }
}

export default DarkModePanel;