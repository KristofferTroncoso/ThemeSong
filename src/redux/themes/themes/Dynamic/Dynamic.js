import React from 'react';
import { useSelector } from 'react-redux';
import DynamicDark from './Dark/DynamicDark';
import DynamicLight from './Light/DynamicLight';
import DynamicSystem from './System/DynamicSystem';
import { menubar, root } from '../selectors';

function Dynamic() {
  const darkLightSetting = useSelector(state => (
    state.themes.themes.find(theme => (theme.themeId === "themeId:6")).userPrefs.darkLightSetting
  ));

  function processColors(prefs, accentColorArr) {
    console.log('Dynamic Theme: processing colors')

    const {saturationSetting, lightnessSettingNavBar, lightnessSettingPlayPage, lightnessSettingBody, lightnessSettingPlayerBar} = prefs;

    let hue = (accentColorArr[0] * 360).toFixed();
    let saturation = (accentColorArr[1] * 100 * saturationSetting).toFixed();
    let light = (accentColorArr[2] * 100).toFixed();

    let pickedVibrantColor = `hsl(${hue}, ${saturation}%, ${light}%)`;
    let pickedVibrantColorLight50 = `hsl(${hue}, ${saturation}%, 50%)`;
    let navBarColor = `hsl(${hue}, ${saturation}%, ${lightnessSettingNavBar}%)`;
    let playPageColor = `hsl(${hue}, ${saturation}%, ${lightnessSettingPlayPage}%)`;
    let bodyColor = `hsl(${hue}, ${saturation}%, ${lightnessSettingBody}%)`;
    let playerBarColor = `hsl(${hue}, ${saturation}%, ${lightnessSettingPlayerBar}%)`;
    let playPageAvToggleColor = `hsl(${hue}, ${saturation}%, ${21 + (lightnessSettingPlayPage / 25) * 14}%)`;

    menubar.content = navBarColor;
    root.style.setProperty("--ts-picked-vibrant-static", pickedVibrantColor, "important");
    root.style.setProperty("--ts-picked-vibrant-light50", pickedVibrantColorLight50, "important");
    root.style.setProperty("--ts-topnav-color", navBarColor);
    root.style.setProperty("--ts-mainbg-color", bodyColor);
    root.style.setProperty("--ts-playpagebg-color", playPageColor);
    root.style.setProperty("--ts-playbar-color", playerBarColor);
    root.style.setProperty("--ts-playpageavtoggle-color", playPageAvToggleColor);
  }
  
  function returnVariant() {
    switch (darkLightSetting) {
      case "dark":
        return <DynamicDark processColors={processColors} />
      case "light":
        return <DynamicLight processColors={processColors} />
      case "system":
        return <DynamicSystem processColors={processColors} />
      default:
        return <DynamicDark processColors={processColors} />
    }
  }

  return (
    <div id="Dynamic">
      {returnVariant()}
    </div>
  )
}

export default Dynamic;