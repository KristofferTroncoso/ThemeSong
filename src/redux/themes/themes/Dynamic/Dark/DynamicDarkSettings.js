/** @jsx jsx */
import React from 'react';
import { jsx, css } from '@emotion/react';

import { useSelector, useDispatch } from 'react-redux';
import { changeThemes } from '../../../themesSlice';

import { styled } from '@mui/material/styles';
import Slider from '@mui/material/Slider';

import PlayBar from '../../../../../assets/font-icons/PlayBar.svg';
import TopBar from '../../../../../assets/font-icons/TopBar.svg';
import PlayPage from '../../../../../assets/font-icons/PlayPage.svg';
import Body from '../../../../../assets/font-icons/Body.svg';
import OpacityIcon from '@mui/icons-material/Opacity';

const StyledSlider = styled(Slider)`
  width: 200px;
  color: #0215bd;

  .MuiSlider-thumb {
    color: #444;
    border: 1px solid #eee;
    width: 12px;
    height: 12px;
  }

  .MuiSlider-thumb::after {
    width: 1px;
    height: 1px;
  }

  .MuiSlider-rail {
    opacity: 0.6;
  }
`;

function DynamicDarkSettings() {
  const dispatch = useDispatch();

  const themes = useSelector(state => state.themes.themes);
  const dynamicPrefs = useSelector(state => state.themes.themes.find(theme => (theme.themeId === "themeId:6")).userPrefs);
  const dynamicDarkPrefs = useSelector(state => state.themes.themes.find(theme => (theme.themeId === "themeId:6")).userPrefs.darkPrefs);

  function handleChange(e) {
    let darkPrefs = {...dynamicDarkPrefs, [e.target.name]: e.target.value};
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
    <div 
      className="DynamicThemeDark" 
      css={css`
        background: #222; 
        padding: 5px; 
        border-radius: 2px;
        color: #ddd;
        
        .MuiSlider-root {
          padding: 0;
        }
      `}
    >
      <form onSubmit={handleSave}>
        <div style={{display: 'flex', justifyContent: 'space-between', height: '21px', alignContent: 'center', alignItems: 'center'}}>
          <label htmlFor="lightnessSettingNavBar">TopBar:</label>
            <div style={{display: 'flex', alignContent: 'center', alignItems: 'center'}}>
              <img src={TopBar} alt="svg" style={{height: '12px', width: '12px', marginRight: '8px'}} />
              <StyledSlider name="lightnessSettingNavBar" value={dynamicDarkPrefs.lightnessSettingNavBar} onChange={handleChange} step={1} min={0} max={30} />
              <input type="number" min="0" max="30" name="lightnessSettingNavBar" value={dynamicDarkPrefs.lightnessSettingNavBar} onChange={handleChange} style={{width: '40px', backgroundColor: 'inherit', border: 0, color: 'white', marginLeft: '8px'}} />
            </div>
        </div>
        <div style={{display: 'flex', justifyContent: 'space-between', height: '21px', alignContent: 'center', alignItems: 'center'}}>
          <label htmlFor="lightnessSettingPlayPage">PlayPage:</label>
          <div style={{display: 'flex', alignContent: 'center', alignItems: 'center'}}>
            <img src={PlayPage} alt="svg" style={{height: '12px', width: '12px', marginRight: '8px'}} />
            <StyledSlider name="lightnessSettingPlayPage" value={dynamicDarkPrefs.lightnessSettingPlayPage} onChange={handleChange} step={1} min={0} max={30} />
            <input type="number" min="0" max="30" name="lightnessSettingPlayPage" value={dynamicDarkPrefs.lightnessSettingPlayPage} onChange={handleChange} style={{width: '40px', backgroundColor: 'inherit', border: 0, color: 'white', marginLeft: '8px'}} />
          </div>
        </div>
        <div style={{display: 'flex', justifyContent: 'space-between', height: '21px', alignContent: 'center', alignItems: 'center'}}>
          <label htmlFor="lightnessSettingPlayerBar">PlayBar:</label>
          <div style={{display: 'flex', alignContent: 'center', alignItems: 'center'}}>
            <img src={PlayBar} alt="svg" style={{height: '12px', width: '12px', marginRight: '8px'}} />
            <StyledSlider name="lightnessSettingPlayerBar" value={dynamicDarkPrefs.lightnessSettingPlayerBar} onChange={handleChange} step={1} min={0} max={30} />
            <input type="number" min="0" max="30" name="lightnessSettingPlayerBar" value={dynamicDarkPrefs.lightnessSettingPlayerBar} onChange={handleChange} style={{width: '40px', backgroundColor: 'inherit', border: 0, color: 'white', marginLeft: '8px'}} />
          </div>
        </div>
        <div style={{display: 'flex', justifyContent: 'space-between', height: '21px', alignContent: 'center', alignItems: 'center'}}>
          <label htmlFor="lightnessSettingBody">Body:</label>
          <div style={{display: 'flex', alignContent: 'center', alignItems: 'center'}}>
            <img src={Body} alt="svg" style={{height: '12px', width: '12px', marginRight: '8px'}} />
            <StyledSlider name="lightnessSettingBody" value={dynamicDarkPrefs.lightnessSettingBody} onChange={handleChange} step={1} min={0} max={30} />
            <input type="number" min="0" max="30" name="lightnessSettingBody" value={dynamicDarkPrefs.lightnessSettingBody} onChange={handleChange} style={{width: '40px', backgroundColor: 'inherit', border: 0, color: 'white', marginLeft: '8px'}} />
          </div>
        </div>
        <div style={{display: 'flex', justifyContent: 'space-between', height: '21px', alignContent: 'center', alignItems: 'center'}}>
          <label htmlFor="saturationSetting">Saturation:</label>
          <div style={{display: 'flex', alignContent: 'center', alignItems: 'center'}}>
            <OpacityIcon sx={{height: '16px', width: '16px', marginRight: '6px'}} />
            <StyledSlider name="saturationSetting" value={dynamicDarkPrefs.saturationSetting} onChange={handleChange} step={0.1} min={0.5} max={1} />
            <input type="number" min="0.5" max="1" name="saturationSetting" value={dynamicDarkPrefs.saturationSetting} step="0.1" onChange={handleChange} style={{width: '40px', backgroundColor: 'inherit', border: 0, color: 'white', marginLeft: '8px'}} />
          </div>
        </div>
      </form>
    </div>
  );
};

export default DynamicDarkSettings;
