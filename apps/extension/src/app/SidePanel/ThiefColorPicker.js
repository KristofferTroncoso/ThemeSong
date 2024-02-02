import { useEffect, useRef, useState } from "react";
import ColorThief from "colorthief/dist/color-thief.mjs";

function ThiefColorPicker() {
  const imgChangeObserver = useRef();
  const [color, setColor] = useState("#333");
  const [color2, setColor2] = useState("#111");

  let sideplayerimage = document.getElementById("sideplayerimage");
  const colorThief = new ColorThief();

  useEffect(() => {
    getPalette();

    function getPalette() {
      document.getElementById("sideplayerimage").crossOrigin = "anonymous";

      const rgbToHex = (r, g, b) =>
        "#" +
        [r, g, b]
          .map((x) => {
            const hex = x.toString(16);
            return hex.length === 1 ? "0" + hex : hex;
          })
          .join("");

      setTimeout(() => {
        let palette = colorThief.getPalette(document.getElementById("sideplayerimage"));
        console.log(palette);
        setColor(rgbToHex(palette[0][0], palette[0][1], palette[0][2]));
        setColor2(rgbToHex(palette[1][0], palette[1][1], palette[1][2]));
      }, 500);
    }

    function handleSongChange(mutationList) {
      console.log("song changed");
      sideplayerimage.crossOrigin = "anonymous";

      if (sideplayerimage.src !== "https://music.youtube.com/") {
        if (mutationList[0].oldValue === sideplayerimage.src) {
          console.log("same song image");
        } else {
          console.log("song image changed");
          setTimeout(getPalette, 1);
        }
      }
    }

    imgChangeObserver.current = new MutationObserver(handleSongChange);

    imgChangeObserver.current.observe(sideplayerimage, {
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
