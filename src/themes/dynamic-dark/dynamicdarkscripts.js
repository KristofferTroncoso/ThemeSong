import * as Vibrant from "node-vibrant";
import logColors from '../../pages/content/modules/logColors';

const menubar = document.querySelector('meta[name="theme-color"]');
const root = document.querySelector(":root");
// const ytmusicLogoRed = document.querySelectorAll("ytmusic-nav-bar .yt-simple-endpoint picture")[0];
// const ytmusicLogoWhite = document.querySelectorAll("ytmusic-nav-bar .yt-simple-endpoint picture")[1];

export function getVibrantHSL(bestImgAvailable) {
  console.log('getting palette hsl');
  return Vibrant.from(bestImgAvailable)
  .quality(3)
  .addFilter(yellowFilter)
  .getPalette();

  function yellowFilter(r, g, b, a) {
    // taking out browns, yellows, and accidentally oranges... i want to allow some orange though.
    return a >= 125 && !(r > 50 && g > 50 && b < 120)
  }
}


export function processColors(storageObj, vibrantHSL) {
  console.log('processing colors')
  const themeDetails = storageObj.themes.find(theme => (theme.themeId === "themeId:1"));

  let accentColorArr = vibrantHSL;
    
  const {saturationSetting, lightnessSettingNavBar, lightnessSettingPlayPage, lightnessSettingBody, lightnessSettingPlayerBar} = themeDetails.userPrefs;

  let hue = (accentColorArr[0] * 360).toFixed();
  let saturation = (accentColorArr[1] * 100 * saturationSetting).toFixed();

  let navBarColor = `hsl(${hue}, ${saturation}%, ${lightnessSettingNavBar}%)`;
  let playPageColor = `hsl(${hue}, ${saturation}%, ${lightnessSettingPlayPage}%)`;
  let bodyColor = `hsl(${hue}, ${saturation}%, ${lightnessSettingBody}%)`;
  let playerBarColor = `hsl(${hue}, ${saturation}%, ${lightnessSettingPlayerBar}%)`;
  let playPageAvToggleColor = `hsl(${hue}, ${saturation}%, ${21 + (lightnessSettingPlayPage / 25) * 14}%)`;

  menubar.content = navBarColor;
  root.style.setProperty("--ts-topnav-color", navBarColor);
  root.style.setProperty("--ts-mainbg-color", bodyColor);
  root.style.setProperty("--ts-playpagebg-color", playPageColor);
  root.style.setProperty("--ts-playbar-color", playerBarColor);
  root.style.setProperty("--ts-playpageavtoggle-color", playPageAvToggleColor);
}



// export function processDynamicDark(storageObj, bestImgAvailable) {
//   console.log('processing dynamic dark theme');
//   const themeDetails = storageObj.themes.find(theme => (theme.id === 1));

//   Vibrant.from(bestImgAvailable)
//   .quality(10)
//   .addFilter(yellowFilter)
//   .getPalette()
//   .then((palette) => {
//     console.log('palette received')
//     let accentColorArr = palette.Vibrant.hsl;
    
//     const {saturationSetting, lightnessSettingNavBar, lightnessSettingPlayPage, lightnessSettingBody, lightnessSettingPlayerBar} = themeDetails.userPrefs;

//     let ogColor = `hsl(${(accentColorArr[0] * 360).toFixed()}, ${(accentColorArr[1] * 100).toFixed()}%, ${(accentColorArr[2] * 100).toFixed()}%)`;
//     let navBarColor = `hsl(${(accentColorArr[0] * 360).toFixed()}, ${(accentColorArr[1] * 100 * saturationSetting).toFixed()}%, ${lightnessSettingNavBar}%)`;
//     let playPageColor = `hsl(${(accentColorArr[0] * 360).toFixed()}, ${(accentColorArr[1] * 100 * saturationSetting).toFixed()}%, ${lightnessSettingPlayPage}%)`;
//     let bodyColor = `hsl(${(accentColorArr[0] * 360).toFixed()}, ${(accentColorArr[1] * 100 * saturationSetting).toFixed()}%, ${lightnessSettingBody}%)`;
//     let playerBarColor = `hsl(${(accentColorArr[0] * 360).toFixed()}, ${(accentColorArr[1] * 100 * saturationSetting).toFixed()}%, ${lightnessSettingPlayerBar}%)`;

//     processColors({
//       playPageColor, 
//       playerBarColor, 
//       navBarColor, 
//       bodyColor
//     });
//     logColors(palette, {ogColor, navBarColor, playPageColor, bodyColor, playerBarColor});
//   })
//   .catch((err) => {
//     console.log('node-vibrant err')
//     console.log(err);
//     processColors({
//       playPageColor: '#1a1a1a',
//       playerBarColor: '#1a1a1a',
//       navBarColor: '#1f1f1f',
//       bodyColor: 'black'
//     });
//   });

//   function yellowFilter(r, g, b, a) {
//     // taking out browns, yellows, and accidentally oranges... i want to allow orange though.
//     return a >= 125 && !(r > 50 && g > 50 && b < 120)
//   }

// }
