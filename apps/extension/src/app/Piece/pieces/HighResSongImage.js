import { useEffect } from "react";
// import { songImg } from "../../Theme/selectors";

function HighResSongImage() {
  useEffect(() => {
    let originalImgString = document.querySelector("#song-image img#img").src;
    let enhancedImg = originalImgString.replace("w544-h544", "w800-h800");
    if (originalImgString !== enhancedImg) {
      document.querySelector("#song-image img#img").setAttribute("src", enhancedImg);
    }

    let albumImageObserver = new MutationObserver(handleAlbumImageChange);

    albumImageObserver.observe(document.querySelector("#song-image img#img"), {
      attributeFilter: ["src"],
    });

    function handleAlbumImageChange() {
      console.log(document.querySelector("#song-image img#img").src);

      let enhancedImg = document.querySelector("#song-image img#img").src.replace("w544-h544", "w800-h800");
      if (document.querySelector("#song-image img#img").src !== enhancedImg) {
        setTimeout(() => {
          document.querySelector("#song-image img#img").setAttribute("src", enhancedImg);
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
