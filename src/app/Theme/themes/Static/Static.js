import React from 'react';
import StaticDark from './Dark/StaticDark';
import StaticLight from './Light/StaticLight';
import StaticSystem from './System/StaticSystem';
import { menubar, root } from '../selectors';
import { useStore } from '../../../store';

function Static() {
  const appearanceSetting = useStore(state => (
    state.theme.themes.find(theme => (theme.themeId === "themeId:7")).userPrefs.appearanceSetting
  ));

  function processColors(prefs) {
    console.log('static processing colors')
    
    const { hue, saturationSetting, lightnessSettingNavBar, lightnessSettingPlayPage, lightnessSettingBody, lightnessSettingPlayerBar } = prefs;
  
    const navBarColor = `hsl(${hue}, ${saturationSetting}%, ${lightnessSettingNavBar}%)`;
    const playPageColor = `hsl(${hue}, ${saturationSetting}%, ${lightnessSettingPlayPage}%)`;
    const bodyColor = `hsl(${hue}, ${saturationSetting}%, ${lightnessSettingBody}%)`;
    const playerBarColor = `hsl(${hue}, ${saturationSetting}%, ${lightnessSettingPlayerBar}%)`;
    const playPageAvToggleColor = `hsl(${hue}, ${saturationSetting}%, ${21 + (lightnessSettingPlayPage / 25) * 14}%)`;
    const accentColorLight14 = `hsl(${hue}, ${saturationSetting}%, 14%)`;
  
    menubar.content = navBarColor;
    root.style.setProperty("--ts-topnav-color", navBarColor);
    root.style.setProperty("--ts-mainbg-color", bodyColor);
    root.style.setProperty("--ts-playpagebg-color", playPageColor);
    root.style.setProperty("--ts-playbar-color", playerBarColor);
    root.style.setProperty("--ts-playpageavtoggle-color", playPageAvToggleColor);
    root.style.setProperty("--ts-accent-color-light-14", accentColorLight14);
  }

  function returnVariant() {
    switch (appearanceSetting) {
      case "dark":
        return <StaticDark processColors={processColors} />
      case "light":
        return <StaticLight processColors={processColors} />
      case "system":
        return <StaticSystem processColors={processColors} />
      default:
        return <StaticDark processColors={processColors} />
    }
  }

  return (
    <div id="Static">
      {returnVariant()}
    </div>
  )
}

export default Static;