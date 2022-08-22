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
      <div css={{marginBottom: '10px'}}>
        <h2 css={css`padding: 2px 5px; color: var(--ts-primary-text-color);`}>{activeThemeInfo.name} Theme - Appearance</h2>
        <button
          css={css`
            height: 45px;
            min-width: 45px;
            width: 60px;
            margin: 5px 0 5px 5px;
            background: ${activeThemeUserPrefs.darkLightSetting ===  "dark" ? 'rgba(255,255,255,0.8)' : 'rgba(0,0,0,0.4)'};
            color: ${activeThemeUserPrefs.darkLightSetting ===  "dark" ? '#1565e6' : 'white'};
            border: 0;
            border-right: 1px solid rgba(255, 255, 255, 0.3);
            border-radius: 8px 0 0 8px;
            :hover {
              background-color: rgba(255, 255, 255, 0.4);
            }
          `}
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
              background-color: rgba(255, 255, 255, 0.4);
            }
          `}
          onClick={e => handleDarkLightChange("light")}
        >
          <LightModeIcon fontSize='large' />
        </button>
        <button
          css={css`
            height: 45px;
            min-width: 45px;
            width: 60px;
            margin: 5px 5px 5px 0;
            background: ${activeThemeUserPrefs.darkLightSetting ===  "system"  ? 'rgba(255,255,255,0.8)' : 'rgba(0,0,0,0.4)'};
            color: ${activeThemeUserPrefs.darkLightSetting ===  "system" ? '#1565e6' : 'white'};
            border: 0;
            border-left: 1px solid rgba(255, 255, 255, 0.3);
            border-radius: 0 8px 8px 0;
            :hover {
              background-color: rgba(255, 255, 255, 0.4);
            }
          `}
          onClick={e => handleDarkLightChange("system")}
        >
          <Brightness4Icon fontSize='large' />
        </button>
      </div>
    )
  }
}

export default DarkModePanel;