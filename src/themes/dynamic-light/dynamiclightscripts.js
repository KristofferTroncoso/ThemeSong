
const menubar = document.querySelector('meta[name="theme-color"]');
const root = document.querySelector(":root");
// const ytmusicLogoRed = document.querySelectorAll("ytmusic-nav-bar .yt-simple-endpoint picture")[0];
// const ytmusicLogoWhite = document.querySelectorAll("ytmusic-nav-bar .yt-simple-endpoint picture")[1];


export function processColors(storageObj, vibrantHSL) {
  console.log('processing colors')
  const themeDetails = storageObj.themes.find(theme => (theme.themeId === "themeId:4"));

  let accentColorArr = vibrantHSL;
    
  const {saturationSetting, lightnessSettingNavBar, lightnessSettingPlayPage, lightnessSettingBody, lightnessSettingPlayerBar} = themeDetails.userPrefs;

  let hue = (accentColorArr[0] * 360).toFixed();
  let saturation = (accentColorArr[1] * 100 * saturationSetting).toFixed();
  let light = (accentColorArr[2] * 100).toFixed();

  let pickedVibrantColor = `hsl(${hue}, ${saturation}%, ${light}%)`;
  let navBarColor = `hsl(${hue}, ${saturation}%, ${lightnessSettingNavBar}%)`;
  let playPageColor = `hsl(${hue}, ${saturation}%, ${lightnessSettingPlayPage}%)`;
  let bodyColor = `hsl(${hue}, ${saturation}%, ${lightnessSettingBody}%)`;
  let playerBarColor = `hsl(${hue}, ${saturation}%, ${lightnessSettingPlayerBar}%)`;
  let playPageAvToggleColor = `hsl(${hue}, ${saturation}%, ${21 + (lightnessSettingPlayPage / 25) * 14}%)`;

  menubar.content = navBarColor;
  root.style.setProperty("--ts-picked-vibrant-static", pickedVibrantColor, "important");
  root.style.setProperty("--ts-topnav-color", navBarColor, "important");
  root.style.setProperty("--ts-mainbg-color", bodyColor, "important");
  root.style.setProperty("--ts-playpagebg-color", playPageColor, "important");
  root.style.setProperty("--ts-playbar-color", playerBarColor, "important");
  root.style.setProperty("--ts-playpageavtoggle-color", playPageAvToggleColor, "important");
}
