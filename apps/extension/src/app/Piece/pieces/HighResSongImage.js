import { useEffect } from "react";
import { songImg } from "../../Theme/selectors";

function HighResSongImage() {
  useEffect(() => {
    let originalImgString = songImg.src;
    let enhancedImg = originalImgString.replace("w544-h544", "w800-h800");
    if (originalImgString !== enhancedImg) {
      songImg.setAttribute("src", enhancedImg);
    }

    let albumImageObserver = new MutationObserver(handleAlbumImageChange);

    albumImageObserver.observe(songImg, {
      attributeFilter: ["src"],
    });

    function handleAlbumImageChange() {
      console.log(songImg.src);

      let enhancedImg = songImg.src.replace("w544-h544", "w800-h800");
      if (songImg.src !== enhancedImg) {
        setTimeout(() => {
          songImg.setAttribute("src", enhancedImg);
        }, 100);
      }
    }

    return function () {
      albumImageObserver.disconnect();
    };
  }, []);

  return null;
}

export default HighResSongImage;
