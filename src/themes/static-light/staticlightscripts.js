const menubar = document.querySelector('meta[name="theme-color"]');
const root = document.querySelector(":root");

export function processStaticLight(storageObj) {
  const themeDetails = storageObj.themes.find(theme => (theme.themeId === "themeId:5"));
  
  const { bgLight, hslColorHue, navbarLight, playBarLight, playPageLight, saturation } = themeDetails.userPrefs;

  const navBarColor = `hsl(${hslColorHue}, ${saturation}%, ${navbarLight}%)`;
  const playPageColor = `hsl(${hslColorHue}, ${saturation}%, ${playPageLight}%)`;
  const bodyColor = `hsl(${hslColorHue}, ${saturation}%, ${bgLight}%)`;
  const playerBarColor = `hsl(${hslColorHue}, ${saturation}%, ${playBarLight}%)`;
  const playPageAvToggleColor = `hsl(${hslColorHue}, ${saturation}%, ${21 + (playPageLight / 25) * 14}%)`;
  const accentColorLight14 = `hsl(${hslColorHue}, ${saturation}%, 14%)`;

  menubar.content = navBarColor;
  root.style.setProperty("--ts-topnav-color", navBarColor);
  root.style.setProperty("--ts-mainbg-color", bodyColor);
  root.style.setProperty("--ts-playpagebg-color", playPageColor);
  root.style.setProperty("--ts-playbar-color", playerBarColor);
  root.style.setProperty("--ts-playpageavtoggle-color", playPageAvToggleColor);
  root.style.setProperty("--ts-accent-color-light-14", accentColorLight14);
}

