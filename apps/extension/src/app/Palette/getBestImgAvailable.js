import { songImg, playerBarSongImgNode } from "../Theme/selectors";

export default function getSongImg() {
  let bestImgAvailable;

  // prioritizes large album artwork but if not available, (e.g. if it's a video) its best to go for playBar img.
  // i disabled it since the smaller playerBarSongImg works just fine with my themes.

  if (songImg.src.charAt(0) === "d") {
    bestImgAvailable = playerBarSongImgNode.src;
  } else {
    bestImgAvailable = songImg.src;
  }

  console.log(`best available img is ${bestImgAvailable}`);

  return bestImgAvailable;
}
