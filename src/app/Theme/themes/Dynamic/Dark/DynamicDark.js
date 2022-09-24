import React from 'react';
import { useSelector } from 'react-redux';
import { dynamicdark_css }from './dynamicdarkCSS';
import { menubar, root } from '../../selectors';

function DynamicDark() {
  const mostPopulatedColorHSL = useSelector(state => state.palette.mostPopulatedColor).hsl;
  const dynamicDarkPrefs = useSelector(state => state.themes.themes.find(theme => (theme.themeId === "themeId:6")).userPrefs.darkPrefs);

  function processDynamicDarkColors() {
    console.log('Dynamic Theme: processing colors')

    const {saturationSetting, lightnessSettingNavBar, lightnessSettingPlayPage, lightnessSettingBody, lightnessSettingPlayerBar} = dynamicDarkPrefs;

    let hue = (mostPopulatedColorHSL[0] * 360).toFixed();
    let saturation = (mostPopulatedColorHSL[1] * 100 * saturationSetting).toFixed();
    let light = (mostPopulatedColorHSL[2] * 100).toFixed();

    function calcCurvedBrightness(brightness) {
      let hueNum = parseInt(hue, 10);
      let brightnessNum = parseInt(brightness, 10);
    
      if (hueNum > 35 && hueNum < 200) {
        return brightnessNum * 0.7;
      } else  {
        return brightnessNum;
      }
    }

    let pickedVibrantColor = `hsl(${hue}, ${saturation}%, ${light}%)`;
    let pickedVibrantColorLight50 = `hsl(${hue}, ${saturation}%, 50%)`;
    let pickedVibrantColorLightAlpha10 = `hsla(${hue}, ${saturation}%, ${light}%, 0.1)`;
    let pickedVibrantColorLightAlpha20 = `hsla(${hue}, ${saturation}%, ${light}%, 0.2)`;
    let navBarColor = `hsl(${hue}, ${saturation}%, ${calcCurvedBrightness(lightnessSettingNavBar)}%)`;
    let playPageColor = `hsl(${hue}, ${saturation}%, ${calcCurvedBrightness(lightnessSettingPlayPage)}%)`;
    let bodyColor = `hsl(${hue}, ${saturation}%, ${calcCurvedBrightness(lightnessSettingBody)}%)`;
    let playerBarColor = `hsl(${hue}, ${saturation}%, ${calcCurvedBrightness(lightnessSettingPlayerBar)}%)`;
    let playPageAvToggleColor = `hsl(${hue}, ${saturation}%, ${21 + (lightnessSettingPlayPage / 25) * 14}%)`;

    menubar.content = navBarColor;
    root.style.setProperty("--ts-picked-vibrant-static", pickedVibrantColor, "important");
    root.style.setProperty("--ts-picked-vibrant-light50", pickedVibrantColorLight50, "important");
    root.style.setProperty("--ts-picked-vibrant-alpha10", pickedVibrantColorLightAlpha10, "important");
    root.style.setProperty("--ts-picked-vibrant-alpha20", pickedVibrantColorLightAlpha20, "important");
    root.style.setProperty("--ts-topnav-color", navBarColor);
    root.style.setProperty("--ts-mainbg-color", bodyColor);
    root.style.setProperty("--ts-playpagebg-color", playPageColor);
    root.style.setProperty("--ts-playbar-color", playerBarColor);
    root.style.setProperty("--ts-playpageavtoggle-color", playPageAvToggleColor);
  }

  React.useEffect(() => {
    processDynamicDarkColors();
  }, [])

  React.useEffect(() => {
    processDynamicDarkColors();
  }, [mostPopulatedColorHSL, dynamicDarkPrefs])
  
  return (
    <style id="DynamicDark">
      {dynamicdark_css}
    </style>
  )
}

export default DynamicDark;


