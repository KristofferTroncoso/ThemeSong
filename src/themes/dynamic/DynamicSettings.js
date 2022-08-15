/** @jsx jsx */
import React from 'react';
import { jsx, css } from '@emotion/react';
import DynamicDarkSettings from './DynamicDarkSettings';
import DynamicLightSettings from './DynamicLightSettings';

import { useSelector, useDispatch } from 'react-redux';
import { changeThemes } from '../../redux/themes/themesSlice';

export function DynamicSettings() {

  const dispatch = useDispatch();

  const themes = useSelector(state => state.themes.themes);
  const dynamicUserPrefs = useSelector(state => state.themes.themes.find(theme => (theme.themeId === "themeId:6")).userPrefs);

  function handleDarkLightChange(e) {
    let newDynamicUserPrefs = {...dynamicUserPrefs, [e.target.name]: e.target.value};
    let newThemesArr = themes.map(theme => 
    theme.themeId === "themeId:6"
    ? theme = {...theme, userPrefs: newDynamicUserPrefs}
    : theme);
    dispatch(changeThemes(newThemesArr));
  }

  function returnSettingSliders() {
    switch (dynamicUserPrefs.darkLightSetting) {
      case "dark":
        return <DynamicDarkSettings />
      case "light":
        return <DynamicLightSettings />
      case "system":
        return <div><DynamicDarkSettings /><DynamicLightSettings /></div>
      default:
        return <DynamicLightSettings />
    }
  }

  return (
    <div>
      <h2 style={{color: '#ff4f61'}}>Active Theme: Dynamic</h2>
      <p style={{margin: '5px 0 0'}}>Colors change dynamically based on album art. Play any song to get started.</p>
      <p style={{marginBottom: '10px'}}>Adjust brightness and saturation below.</p>
      <form onSubmit={e => e.preventDefault()} css={css`margin-bottom: 8px; text-align: right;`}>
        <label htmlFor="darkLightSetting" css={css`margin-right: 8px;`}>Dark / Light Mode:</label>
        <select 
          id="darkLightSetting" 
          name="darkLightSetting" 
          value={dynamicUserPrefs.darkLightSetting} 
          onChange={handleDarkLightChange}
          css={css`
            background-color: #555;
            color: white;
            border: 1px solid #888;
            border-radius: 2px;
            outline: 0;
          `}
        >
          <option value="dark">Dark</option>
          <option value="light">Light</option>
          <option value="system">Use Device Setting</option>
        </select>
      </form>
      {returnSettingSliders()}
    </div>
  )
}

export default DynamicSettings;