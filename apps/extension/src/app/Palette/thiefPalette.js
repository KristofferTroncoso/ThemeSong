import { useEffect, useRef } from "react";
import { useStore } from "/src/app/store";
import { playerBarSongImgNode } from "../Theme/selectors";
import Color from "colorjs.io";
// import getBestImgAvailable from "./getBestImgAvailable";
import ColorThief from "colorthief/dist/color-thief.mjs";

/*
color thief sometimes picks weird colors...
Like it'll pick white when there's a vibrant blue available. even when the vibrant blue is obviously more populated.
Seems like the first 2 colors are good but sometimes the 2nd pick is more vibrant and preferred.

It's better to not change the main color-picker (node-vibrant) for now until I have a solid alternative.
May be better to just make my own.
*/

function Palette() {
  const palette = useStore((state) => state.palette.palette);
  const changePalette = useStore((state) => state.palette.changePalette);

  const imgChangeObserver = useRef();
  const colorThief = new ColorThief();

  useEffect(() => {
    playerBarSongImgNode.crossOrigin = "anonymous";

    getPalette();

    function getPalette() {
      if (playerBarSongImgNode.complete && playerBarSongImgNode.width > 0) {
        let palette = colorThief.getPalette(playerBarSongImgNode, 6);
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
            hsl: a.hsl.map((val) => Math.round(Number(val)) || 0),
            oklch: a.coords.map((coord) => Number(coord).toFixed(2) || 0),
          },
          {
            rgb: `rgb(${palette[1][0]} ${palette[1][1]} ${palette[1][2]})`,
            hsl: b.hsl.map((val) => Math.round(Number(val)) || 0),
            oklch: b.coords.map((coord) => Number(coord).toFixed(2) || 0),
          },
          {
            rgb: `rgb(${palette[2][0]} ${palette[2][1]} ${palette[2][2]})`,
            hsl: c.hsl.map((val) => Math.round(Number(val)) || 0),
            oklch: c.coords.map((coord) => Number(coord).toFixed(2) || 0),
          },
          {
            rgb: `rgb(${palette[3][0]} ${palette[3][1]} ${palette[3][2]})`,
            hsl: d.hsl.map((val) => Math.round(Number(val)) || 0),
            oklch: d.coords.map((coord) => Number(coord).toFixed(2) || 0),
          },
          {
            rgb: `rgb(${palette[4][0]} ${palette[4][1]} ${palette[4][2]})`,
            hsl: e.hsl.map((val) => Math.round(Number(val)) || 0),
            oklch: e.coords.map((coord) => Number(coord).toFixed(2) || 0),
          },
          {
            rgb: `rgb(${palette[5][0]} ${palette[5][1]} ${palette[5][2]})`,
            hsl: f.hsl.map((val) => Math.round(Number(val)) || 0),
            oklch: f.coords.map((coord) => Number(coord).toFixed(2) || 0),
          },
        ];
        console.log(newPalette);
        changePalette(newPalette);
      } else {
        console.log("no");
      }
    }

    function handleSongChange(mutationList) {
      console.log("song changed");
      playerBarSongImgNode.crossOrigin = "anonymous";

      if (playerBarSongImgNode.src !== "https://music.youtube.com/") {
        if (mutationList[0].oldValue === playerBarSongImgNode.src) {
          console.log("same song image");
        } else {
          console.log("song image changed");
          setTimeout(getPalette, 500);
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
          --ts-palette-0-rgb: ${palette[0].rgb};
          --ts-palette-0-hsl-h: ${palette[0].hsl[0]};
          --ts-palette-0-hsl-s: ${palette[0].hsl[1]};
          --ts-palette-0-hsl-l: ${palette[0].hsl[2]};
          --ts-palette-0-oklch-l: ${palette[0].oklch[0]};
          --ts-palette-0-oklch-c: ${palette[0].oklch[1]};
          --ts-palette-0-oklch-h: ${palette[0].oklch[2]};

          --ts-palette-1-rgb: ${palette[1].rgb};
          --ts-palette-1-hsl-h: ${palette[1].hsl[0]};
          --ts-palette-1-hsl-s: ${palette[1].hsl[1]};
          --ts-palette-1-hsl-l: ${palette[1].hsl[2]};
          --ts-palette-1-oklch-l: ${palette[1].oklch[0]};
          --ts-palette-1-oklch-c: ${palette[1].oklch[1]};
          --ts-palette-1-oklch-h: ${palette[1].oklch[2]};

          --ts-palette-2-rgb: ${palette[2].rgb};
          --ts-palette-2-hsl-h: ${palette[2].hsl[0]};
          --ts-palette-2-hsl-s: ${palette[2].hsl[1]};
          --ts-palette-2-hsl-l: ${palette[2].hsl[2]};
          --ts-palette-2-oklch-l: ${palette[2].oklch[0]};
          --ts-palette-2-oklch-c: ${palette[2].oklch[1]};
          --ts-palette-2-oklch-h: ${palette[2].oklch[2]};

          --ts-palette-3-rgb: ${palette[3].rgb};
          --ts-palette-3-hsl-h: ${palette[3].hsl[0]};
          --ts-palette-3-hsl-s: ${palette[3].hsl[1]};
          --ts-palette-3-hsl-l: ${palette[3].hsl[2]};
          --ts-palette-3-oklch-l: ${palette[3].oklch[0]};
          --ts-palette-3-oklch-c: ${palette[3].oklch[1]};
          --ts-palette-3-oklch-h: ${palette[3].oklch[2]};

          --ts-palette-4-rgb: ${palette[4].rgb};
          --ts-palette-4-hsl-h: ${palette[4].hsl[0]};
          --ts-palette-4-hsl-s: ${palette[4].hsl[1]};
          --ts-palette-4-hsl-l: ${palette[4].hsl[2]};
          --ts-palette-4-oklch-l: ${palette[4].oklch[0]};
          --ts-palette-4-oklch-c: ${palette[4].oklch[1]};
          --ts-palette-4-oklch-h: ${palette[4].oklch[2]};

          --ts-palette-5-rgb: ${palette[5].rgb};
          --ts-palette-5-hsl-h: ${palette[5].hsl[0]};
          --ts-palette-5-hsl-s: ${palette[5].hsl[1]};
          --ts-palette-5-hsl-l: ${palette[5].hsl[2]};
          --ts-palette-5-oklch-l: ${palette[5].oklch[0]};
          --ts-palette-5-oklch-c: ${palette[5].oklch[1]};
          --ts-palette-5-oklch-h: ${palette[5].oklch[2]};
        }
      `}
    </style>
  );
}

export default Palette;
