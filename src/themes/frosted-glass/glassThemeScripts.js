
const menubar = document.querySelector('meta[name="theme-color"]');
const root = document.querySelector(":root");
const playerBarSongImg = document.querySelector(".middle-controls .thumbnail-image-wrapper img").src;

export function processGlassThemeOnInitial() {
  const navBarColor = 'rgba(50, 50, 50, .5)';
  const playPageColor = 'rgba(50, 50, 50, .7)';
  const playerBarColor = 'rgba(50, 50, 50, .3)';
  const bodyColor = 'rgba(0, 0, 0, 0)';
  const bgAccentsColor = 'rgba(0, 0, 0, 0)';

  root.style.setProperty("--ts-img-src-url", `url(${playerBarSongImg})`, 'important');

  menubar.content = '#1c1c1c';
  root.style.setProperty("--ts-topnav-color", navBarColor);
  root.style.setProperty("--ts-mainbg-color", bodyColor);
  root.style.setProperty("--ts-playpagebg-color", playPageColor);
  root.style.setProperty("--ts-playbar-color", playerBarColor);
  root.style.setProperty("--ts-bg-accents-color", bgAccentsColor);
};

export function processGlassThemeOnSongChange(songImg) {
  root.style.setProperty("--ts-img-src-url", `url(${songImg})`, 'important');
}
