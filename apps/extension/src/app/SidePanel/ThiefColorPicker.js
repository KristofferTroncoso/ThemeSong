import { useEffect, useRef, useState } from "react";
import ColorThief from "colorthief/dist/color-thief.mjs";

function ThiefColorPicker() {
  const imgChangeObserver = useRef();
  const [color, setColor] = useState("#555");
  const [color2, setColor2] = useState("#111");

  let playerBarSongImgNode = document.getElementById("sideplayerimage");
  const colorThief = new ColorThief();

  useEffect(() => {
    getPalette();

    function getPalette() {
      const rgbToHex = (r, g, b) =>
        "#" +
        [r, g, b]
          .map((x) => {
            const hex = x.toString(16);
            return hex.length === 1 ? "0" + hex : hex;
          })
          .join("");

      setTimeout(() => {
        let hi = colorThief.getPalette(document.getElementById("sideplayerimage"));
        console.log(hi);
        setColor(rgbToHex(hi[0][0], hi[0][1], hi[0][2]));
        setColor2(rgbToHex(hi[1][0], hi[1][1], hi[1][2]));
      }, 500);
    }

    function handleSongChange(mutationList) {
      console.log("song changed");
      playerBarSongImgNode.crossOrigin = "anonymous";

      if (playerBarSongImgNode.src !== "https://music.youtube.com/") {
        if (mutationList[0].oldValue === playerBarSongImgNode.src) {
          console.log("same song image");
        } else {
          console.log("song image changed");
          setTimeout(getPalette, 1);
        }
      }
    }

    imgChangeObserver.current = new MutationObserver(handleSongChange);

    imgChangeObserver.current.observe(playerBarSongImgNode, {
      attributeFilter: ["src"],
      attributeOldValue: true,
    });

    return function () {
      console.log("removing imgChangeObserver");
      imgChangeObserver.current.disconnect();
    };
  }, []);

  return (
    <style id="ThemeSong-Palette">
      {`
        :root {
          --ts-color: ${color};
          --ts-color2: ${color2};
        }
      `}
    </style>
  );
}

export default ThiefColorPicker;
