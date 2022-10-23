
import { menubar, root, playerBarSongImgNode } from '../selectors';

export function processGlassThemeOnInitial() {
  const navBarColor = 'rgba(50, 50, 50, .5)';
  const playPageColor = 'rgba(50, 50, 50, .7)';
  const playerBarColor = 'rgba(50, 50, 50, .3)';
  const bodyColor = 'rgba(0, 0, 0, 0)';
  const bgAccentsColor = 'rgba(0, 0, 0, 0)';

  root.style.setProperty("--themesong-img-src-url", `url(${playerBarSongImgNode.src})`, 'important');

  menubar.content = '#1c1c1c';
  root.style.setProperty("--themesong-topbarbg-color", navBarColor);
  root.style.setProperty("--themesong-bodybg-color", bodyColor);
  root.style.setProperty("--themesong-playpagebg-color", playPageColor);
  root.style.setProperty("--themesong-playbarbg-color", playerBarColor);
  root.style.setProperty("--themesong-bg-accents-color", bgAccentsColor);
};

export function processGlassThemeOnSongChange(songImg) {
  root.style.setProperty("--themesong-img-src-url", `url(${songImg})`, 'important');
}
