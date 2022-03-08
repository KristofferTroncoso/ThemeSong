const menubar = document.querySelector('meta[name="theme-color"]');
const root = document.querySelector(":root");

export function processStaticDark(storageObj) {
  const themeDetails = storageObj.themes.find(theme => (theme.themeId === "themeId:2"));
  
  const { bgLight, hslColorHue, navbarLight, playBarLight, playPageLight, saturation } = themeDetails.userPrefs;

  const navBarColor = `hsl(${hslColorHue}, ${saturation}%, ${navbarLight}%)`;
  const playPageColor = `hsl(${hslColorHue}, ${saturation}%, ${playPageLight}%)`;
  const bodyColor = `hsl(${hslColorHue}, ${saturation}%, ${bgLight}%)`;
  const playerBarColor = `hsl(${hslColorHue}, ${saturation}%, ${playBarLight}%)`;

  menubar.content = navBarColor;
  root.style.setProperty("--ts-topnav-color", navBarColor);
  root.style.setProperty("--ts-mainbg-color", bodyColor);
  root.style.setProperty("--ts-playpagebg-color", playPageColor);
  root.style.setProperty("--ts-playbar-color", playerBarColor);
}

