/** @jsx jsx */
import React from 'react';
import { jsx, css } from '@emotion/react';

/*
import PlayBar from '../../assets/font-icons/PlayBar.svg';
import TopBar from '../../assets/font-icons/TopBar.svg';
import PlayPage from '../../assets/font-icons/PlayPage.svg';
import Body from '../../assets/font-icons/Body.svg';
import OpacityIcon from '@mui/icons-material/Opacity';
*/

import { useSelector, useDispatch } from 'react-redux';
import { changeThemes } from '../../../themesSlice';

export function DynamicDarkSettings() {
  const dispatch = useDispatch();

  const themes = useSelector(state => state.themes.themes);
  const dynamicPrefs = useSelector(state => state.themes.themes.find(theme => (theme.themeId === "themeId:6")).userPrefs);
  const dynamicDarkPrefs = useSelector(state => state.themes.themes.find(theme => (theme.themeId === "themeId:6")).userPrefs.darkPrefs);

  function handleChange(e) {
    let darkPrefs = {...dynamicDarkPrefs, [e.target.name]: e.target.valueAsNumber};
    let dynamicUserPrefs = {...dynamicPrefs, darkPrefs}
    let newThemesArr = themes.map(theme => (
      theme.themeId === "themeId:6"
      ? theme = {...theme, userPrefs: dynamicUserPrefs}
      : theme
    ));
    console.log(newThemesArr);
    dispatch(changeThemes(newThemesArr));
    chrome.storage.local.set({themes: newThemesArr}, () => console.log('chrome.storage.local.set({themes}'));
  }

  function handleSave(e) {
    e.preventDefault();
  }

  return (
    <div className="DynamicThemeDark" css={css`background: #222; padding: 5px; border-radius: 2px;`}>
      <form onSubmit={handleSave}>
        <div style={{display: 'flex', justifyContent: 'space-between', height: '21px'}}>
          <label htmlFor="lightnessSettingNavBar">TopBar:</label>
          <div style={{display: 'flex', alignContent: 'center', alignItems: 'center'}}>
            {/* <img src={TopBar} alt="svg" style={{height: '14px', width: '14px', marginRight: '8px'}} /> */}
            <input type="range" name="lightnessSettingNavBar" min="0" max="30" value={dynamicDarkPrefs.lightnessSettingNavBar} step="5" onChange={handleChange} style={{width: '180px'}} />
            <input type="number" min="0" max="30" name="lightnessSettingNavBar" value={dynamicDarkPrefs.lightnessSettingNavBar} onChange={handleChange} style={{width: '40px', backgroundColor: 'inherit', border: 0, borderBottom: '1px solid black', color: 'white'}} />
          </div>
        </div>
        <div style={{display: 'flex', justifyContent: 'space-between', height: '21px'}}>
          <label htmlFor="lightnessSettingPlayPage">PlayPage:</label>
          <div style={{display: 'flex', alignContent: 'center', alignItems: 'center'}}>
            {/* <img src={PlayPage} alt="svg" style={{height: '14px', width: '14px', marginRight: '8px'}} /> */}
            <input type="range" name="lightnessSettingPlayPage" min="0" max="30" value={dynamicDarkPrefs.lightnessSettingPlayPage} step="5" onChange={handleChange} style={{width: '180px'}} />
            <input type="number" min="0" max="30" name="lightnessSettingPlayPage" value={dynamicDarkPrefs.lightnessSettingPlayPage} onChange={handleChange} style={{width: '40px', backgroundColor: 'inherit', border: 0, borderBottom: '1px solid black', color: 'white'}} />
          </div>
        </div>
        <div style={{display: 'flex', justifyContent: 'space-between', height: '21px'}}>
          <label htmlFor="lightnessSettingPlayerBar">PlayBar:</label>
          <div style={{display: 'flex', alignContent: 'center', alignItems: 'center'}}>
            {/* <img src={PlayBar} alt="svg" style={{height: '14px', width: '14px', marginRight: '8px'}} /> */}
            <input type="range" name="lightnessSettingPlayerBar" min="0" max="30" value={dynamicDarkPrefs.lightnessSettingPlayerBar} step="5" onChange={handleChange} style={{width: '180px'}} />
            <input type="number" min="0" max="30" name="lightnessSettingPlayerBar" value={dynamicDarkPrefs.lightnessSettingPlayerBar} onChange={handleChange} style={{width: '40px', backgroundColor: 'inherit', border: 0, borderBottom: '1px solid black', color: 'white'}} />
          </div>
        </div>
        <div style={{display: 'flex', justifyContent: 'space-between', height: '21px'}}>
          <label htmlFor="lightnessSettingBody">Body:</label>
          <div style={{display: 'flex', alignContent: 'center', alignItems: 'center'}}>
            {/* <img src={Body} alt="svg" style={{height: '14px', width: '14px', marginRight: '8px'}} /> */}
            <input type="range" name="lightnessSettingBody" min="0" max="30" value={dynamicDarkPrefs.lightnessSettingBody} step="5" onChange={handleChange} style={{width: '180px'}} />
            <input type="number" min="0" max="30" name="lightnessSettingBody" value={dynamicDarkPrefs.lightnessSettingBody} onChange={handleChange} style={{width: '40px', backgroundColor: 'inherit', border: 0, borderBottom: '1px solid black', color: 'white'}} />
          </div>
        </div>
        <div style={{display: 'flex', justifyContent: 'space-between', height: '21px'}}>
          <label htmlFor="saturationSetting">Saturation:</label>
          <div style={{display: 'flex', alignContent: 'center', alignItems: 'center'}}>
            {/* <OpacityIcon sx={{height: '18px', width: '18px', marginRight: '6px'}} /> */}
            <input type="range" name="saturationSetting" min="0.5" max="1" value={dynamicDarkPrefs.saturationSetting} step="0.1" onChange={handleChange} style={{width: '180px'}} />
            <input type="number" min="0.5" max="1" name="saturationSetting" value={dynamicDarkPrefs.saturationSetting} step="0.1" onChange={handleChange} style={{width: '40px', backgroundColor: 'inherit', border: 0, borderBottom: '1px solid black', color: 'white'}} />
          </div>
        </div>
      </form>
    </div>
  );
  
};

export default DynamicDarkSettings;
