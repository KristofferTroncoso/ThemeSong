import { useEffect, useRef, useState } from "react";
import ColorThief from "colorthief/dist/color-thief.mjs";
import Color from "colorjs.io";

function ThiefColorPicker() {
  const imgChangeObserver = useRef();
  const [palette, setPalette] = useState([
    {
      rgb: "rgb(127 127 127)",
      hsl: [0, 0, 0.5],
      oklch: [0.2, 0, 200],
    },
    {
      rgb: "rgb(127 127 127)",
      hsl: [0, 0, 0.5],
      oklch: [0.2, 0, 200],
    },
    {
      rgb: "rgb(127 127 127)",
      hsl: [0, 0, 0.5],
      oklch: [0.2, 0, 200],
    },
    {
      rgb: "rgb(127 127 127)",
      hsl: [0, 0, 0.5],
      oklch: [0.2, 0, 200],
    },
    {
      rgb: "rgb(127 127 127)",
      hsl: [0, 0, 0.5],
      oklch: [0.2, 0, 200],
    },
    {
      rgb: "rgb(127 127 127)",
      hsl: [0, 0, 0.5],
      oklch: [0.2, 0, 200],
    },
  ]);

  const [themeSongPickedColor, setThemeSongPickedColor] = useState({
    rgb: "rgb(127 127 127)",
    hsl: [0, 0, 0.5],
    oklch: [0.2, 0, 200],
  });

  let sideplayerimage = document.getElementById("sideplayerimage");
  const colorThief = new ColorThief();

  useEffect(() => {
    getPalette();

    function getPalette() {
      if (sideplayerimage.complete && sideplayerimage.width > 0) {
        console.log("THIEEEEEEEEEEEEEEEEEEEEEF");
        let palette = colorThief.getPalette(document.getElementById("sideplayerimage"), 6);
        console.log(palette);

        let a = new Color(`rgb(${palette[0][0]} ${palette[0][1]} ${palette[0][2]})`).to("oklch");
        let b = new Color(`rgb(${palette[1][0]} ${palette[1][1]} ${palette[1][2]})`).to("oklch");
        let c = new Color(`rgb(${palette[2][0]} ${palette[2][1]} ${palette[2][2]})`).to("oklch");
        let d = new Color(`rgb(${palette[3][0]} ${palette[3][1]} ${palette[3][2]})`).to("oklch");
        let e = new Color(`rgb(${palette[4][0]} ${palette[4][1]} ${palette[4][2]})`).to("oklch");
        let f = new Color(`rgb(${palette[5][0]} ${palette[5][1]} ${palette[5][2]})`).to("oklch");

        let newPalette = [
          {
            rgb: `rgb(${palette[0][0]} ${palette[0][1]} ${palette[0][2]})`,
            hsl: a.hsl.map((val) => Math.round(val)),
            oklch: a.coords.map((coord) => (isNaN(coord) ? "none" : Math.round(coord * 1000) / 1000)),
          },
          {
            rgb: `rgb(${palette[1][0]} ${palette[1][1]} ${palette[1][2]})`,
            hsl: b.hsl.map((val) => Math.round(val)),
            oklch: b.coords.map((coord) => (isNaN(coord) ? "none" : Math.round(coord * 1000) / 1000)),
          },
          {
            rgb: `rgb(${palette[2][0]} ${palette[2][1]} ${palette[2][2]})`,
            hsl: c.hsl.map((val) => Math.round(val)),
            oklch: c.coords.map((coord) => (isNaN(coord) ? "none" : Math.round(coord * 1000) / 1000)),
          },
          {
            rgb: `rgb(${palette[3][0]} ${palette[3][1]} ${palette[3][2]})`,
            hsl: d.hsl.map((val) => Math.round(val)),
            oklch: d.coords.map((coord) => (isNaN(coord) ? "none" : Math.round(coord * 1000) / 1000)),
          },
          {
            rgb: `rgb(${palette[4][0]} ${palette[4][1]} ${palette[4][2]})`,
            hsl: e.hsl.map((val) => Math.round(val)),
            oklch: e.coords.map((coord) => (isNaN(coord) ? "none" : Math.round(coord * 1000) / 1000)),
          },
          {
            rgb: `rgb(${palette[5][0]} ${palette[5][1]} ${palette[5][2]})`,
            hsl: f.hsl.map((val) => Math.round(val)),
            oklch: f.coords.map((coord) => (isNaN(coord) ? "none" : Math.round(coord * 1000) / 1000)),
          },
        ];
        console.log(b);
        console.log(newPalette);
        setPalette(newPalette);

        if (newPalette[1].oklch[1] > newPalette[0].oklch[1]) {
          setThemeSongPickedColor(newPalette[1]);
        } else {
          setThemeSongPickedColor(newPalette[0]);
        }
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
          --ts-color-0: oklch(${palette[0].oklch[0]} ${palette[0].oklch[1]} ${palette[0].oklch[2]});
          --ts-color-1: oklch(${palette[1].oklch[0]} ${palette[1].oklch[1]} ${palette[1].oklch[2]});
          --ts-color-2: oklch(${palette[2].oklch[0]} ${palette[2].oklch[1]} ${palette[2].oklch[2]});
          --ts-color-3: oklch(${palette[3].oklch[0]} ${palette[3].oklch[1]} ${palette[3].oklch[2]});
          --ts-color-4: oklch(${palette[4].oklch[0]} ${palette[4].oklch[1]} ${palette[4].oklch[2]});
          --ts-color-5: oklch(${palette[5].oklch[0]} ${palette[5].oklch[1]} ${palette[5].oklch[2]});

          --ts-picked: oklch(${themeSongPickedColor.oklch[0]} ${themeSongPickedColor.oklch[1]} ${themeSongPickedColor.oklch[2]});
        }
      `}
    </style>
  );
}

export default ThiefColorPicker;
