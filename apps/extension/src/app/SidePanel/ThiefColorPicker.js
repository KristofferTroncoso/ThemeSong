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
      if (sideplayerimage.complete && sideplayerimage.width > 0) {
        console.log("THIEEEEEEEEEEEEEEEEEEEEEF");
        let palette = colorThief.getPalette(document.getElementById("sideplayerimage"));
        console.log(palette);
        setColor(`rgb(${palette[0][0]} ${palette[0][1]} ${palette[0][2]})`);
        setColor2(`rgb(${palette[1][0]} ${palette[1][1]} ${palette[1][2]})`);
      } else {
        console.log("NOT THEF");
        setTimeout(getPalette, 10);
      }
    }

    function handleSongChange(mutationList) {
      console.log("song changed");
      sideplayerimage.crossOrigin = "anonymous";

      if (sideplayerimage.src !== "https://music.youtube.com/") {
        if (mutationList[0].oldValue === sideplayerimage.src) {
          console.log("same song image");
        } else {
          console.log("song image changed");
          setTimeout(getPalette, 50);
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
