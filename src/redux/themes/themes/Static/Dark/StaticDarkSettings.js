/** @jsx jsx */
import React from 'react';
import { jsx, css } from '@emotion/react';

import { useSelector, useDispatch } from 'react-redux';
import { changeThemes } from '../../../themesSlice';

import { HuePicker } from 'react-color';

import { styled } from '@mui/material/styles';
import Slider from '@mui/material/Slider';

import PlayBar from '../../../../../assets/font-icons/PlayBar.svg';
import TopBar from '../../../../../assets/font-icons/TopBar.svg';
import PlayPage from '../../../../../assets/font-icons/PlayPage.svg';
import Body from '../../../../../assets/font-icons/Body.svg';
import OpacityIcon from '@mui/icons-material/Opacity';

const StyledSlider = styled(Slider)`
  width: 180px;
  color: #1928a8;

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
`;

function StaticDarkSettings() {
  const dispatch = useDispatch();

  const themes = useSelector(state => state.themes.themes);
  const staticPrefs = useSelector(state => state.themes.themes.find(theme => (theme.themeId === "themeId:7")).userPrefs);
  const staticDarkPrefs = useSelector(state => state.themes.themes.find(theme => (theme.themeId === "themeId:7")).userPrefs.darkPrefs);

  function handleChange(e) {
    let darkPrefs = {...staticDarkPrefs, [e.target.name]: e.target.value};
    let staticUserPrefs = {...staticPrefs, darkPrefs}
    let newThemesArr = themes.map(theme => (
      theme.themeId === "themeId:7"
      ? theme = {...theme, userPrefs: staticUserPrefs}
      : theme
    ));
    console.log(newThemesArr);
    dispatch(changeThemes(newThemesArr));
    chrome.storage.local.set({themes: newThemesArr}, () => console.log('chrome.storage.local.set({themes}'));
  }

  function handleSave(e) {
    e.preventDefault();
  }

  const [reactColor, setReactColor] = React.useState({ h: staticDarkPrefs.hue, s: 80, l: .40 });

  function handleHueChange(color, e) {
    setReactColor(color);
  }

  function handleOnHueChangeComplete(color, e) {
    console.log(color.hsl.h);
    let hue = Math.floor(color.hsl.h);

    let darkPrefs = {...staticDarkPrefs, hue};
    let staticUserPrefs = {...staticPrefs, darkPrefs}
    let newThemesArr = themes.map(theme => (
      theme.themeId === "themeId:7"
      ? theme = {...theme, userPrefs: staticUserPrefs}
      : theme
    ));
    console.log(newThemesArr);
    dispatch(changeThemes(newThemesArr));
    chrome.storage.local.set({themes: newThemesArr}, () => console.log('chrome.storage.local.set({themes}'));
  }

  return (
    <div className="StaticDarkTheme" css={css`background: #222; padding: 5px; border-radius: 2px;`}>
      <form onSubmit={handleSave}>
        <div 
          css={css`
            height: 25px;
            display: flex;
            justify-content: space-between;
            align-content: center;
            align-items: center;
            .hue-horizontal div div {
              height: 15px !important;
              width: 15px !important;
              border: 1px solid #555 !important;
              transform: translate(-9px, -2px) !important;
            }
          `}
        >
          <p>Hue:</p>
          <HuePicker width="240px" height="12px" color={reactColor} onChange={handleHueChange} onChangeComplete={handleOnHueChangeComplete} />
        </div>
        <div style={{display: 'flex', justifyContent: 'space-between', height: '21px'}}>
          <label htmlFor="lightnessSettingNavBar">TopBar:</label>
          <div style={{display: 'flex', alignContent: 'center', alignItems: 'center'}}>
            <img src={TopBar} alt="svg" style={{height: '12px', width: '12px', marginRight: '8px'}} />
            <StyledSlider name="lightnessSettingNavBar" value={staticDarkPrefs.lightnessSettingNavBar} onChange={handleChange} step={1} min={0} max={36} />
            <input type="number" min="0" max="36" name="lightnessSettingNavBar" value={staticDarkPrefs.lightnessSettingNavBar} onChange={handleChange} style={{width: '40px', backgroundColor: 'inherit', border: 0, borderBottom: '1px solid black', color: 'white', marginLeft: '8px'}} />
          </div>
        </div>
        <div style={{display: 'flex', justifyContent: 'space-between', height: '21px'}}>
          <label htmlFor="lightnessSettingPlayPage">PlayPage:</label>
          <div style={{display: 'flex', alignContent: 'center', alignItems: 'center'}}>
            <img src={PlayPage} alt="svg" style={{height: '12px', width: '12px', marginRight: '8px'}} />
            <StyledSlider name="lightnessSettingPlayPage" value={staticDarkPrefs.lightnessSettingPlayPage} onChange={handleChange} step={1} min={0} max={36} />
            <input type="number" min="0" max="36" name="lightnessSettingPlayPage" value={staticDarkPrefs.lightnessSettingPlayPage} onChange={handleChange} style={{width: '40px', backgroundColor: 'inherit', border: 0, borderBottom: '1px solid black', color: 'white', marginLeft: '8px'}} />
          </div>
        </div>
        <div style={{display: 'flex', justifyContent: 'space-between', height: '21px'}}>
          <label htmlFor="lightnessSettingPlayerBar">PlayBar:</label>
          <div style={{display: 'flex', alignContent: 'center', alignItems: 'center'}}>
            <img src={PlayBar} alt="svg" style={{height: '12px', width: '12px', marginRight: '8px'}} />
            <StyledSlider name="lightnessSettingPlayerBar" value={staticDarkPrefs.lightnessSettingPlayerBar} onChange={handleChange} step={1} min={0} max={36} />
            <input type="number" min="0" max="36" name="lightnessSettingPlayerBar" value={staticDarkPrefs.lightnessSettingPlayerBar} onChange={handleChange} style={{width: '40px', backgroundColor: 'inherit', border: 0, borderBottom: '1px solid black', color: 'white', marginLeft: '8px'}} />
          </div>
        </div>
        <div style={{display: 'flex', justifyContent: 'space-between', height: '21px'}}>
          <label htmlFor="lightnessSettingBody">Body:</label>
          <div style={{display: 'flex', alignContent: 'center', alignItems: 'center'}}>
            <img src={Body} alt="svg" style={{height: '12px', width: '12px', marginRight: '8px'}} />
            <StyledSlider name="lightnessSettingBody" value={staticDarkPrefs.lightnessSettingBody} onChange={handleChange} step={1} min={0} max={36} />
            <input type="number" min="0" max="36" name="lightnessSettingBody" value={staticDarkPrefs.lightnessSettingBody} onChange={handleChange} style={{width: '40px', backgroundColor: 'inherit', border: 0, borderBottom: '1px solid black', color: 'white', marginLeft: '8px'}} />
          </div>
        </div>
        <div style={{display: 'flex', justifyContent: 'space-between', height: '21px'}}>
          <label htmlFor="saturationSetting">Saturation:</label>
          <div style={{display: 'flex', alignContent: 'center', alignItems: 'center'}}>
            <OpacityIcon sx={{height: '16px', width: '16px', marginRight: '6px'}} />
            <StyledSlider name="saturationSetting" value={staticDarkPrefs.saturationSetting} onChange={handleChange} step={5} min={0} max={100} />
            <input type="number" min="0" max="100" name="saturationSetting" value={staticDarkPrefs.saturationSetting} step="5" onChange={handleChange}  style={{width: '40px', backgroundColor: 'inherit', border: 0, borderBottom: '1px solid black', color: 'white', marginLeft: '8px'}} />
          </div>
        </div>
      </form>
    </div>
  );
};

export default StaticDarkSettings;
