import { useEffect, useRef } from "react";
import { useStore } from "/src/app/store";
import * as Vibrant from "node-vibrant";
// import { playerBarSongImgNode } from "../Theme/selectors";
import Color from "colorjs.io";
// import getBestImgAvailable from "./getBestImgAvailable";

function Palette() {
  const palette = useStore((state) => state.palette.palette);
  const dominant = useStore((state) => state.palette.dominant);
  const sortedPalette = useStore((state) => state.palette.sortedPalette);
  const changePalette = useStore((state) => state.palette.changePalette);
  const changeDominantColor = useStore((state) => state.palette.changeDominantColor);
  const changeSortedPalette = useStore((state) => state.palette.changeSortedPalette);

  const imgChangeObserver = useRef();

  useEffect(() => {
    getPalette();

    function getPalette() {
      getVibrantPalette()
        .then((palette) => {
          console.log("palette received");

          let lightvibrant = new Color(palette.LightVibrant.hex).to("oklch");
          let vibrant = new Color(palette.Vibrant.hex).to("oklch");
          let darkvibrant = new Color(palette.DarkVibrant.hex).to("oklch");
          let lightmuted = new Color(palette.LightMuted.hex).to("oklch");
          let muted = new Color(palette.Muted.hex).to("oklch");
          let darkmuted = new Color(palette.DarkMuted.hex).to("oklch");

          let serializedPalette = {
            LightVibrant: {
              hex: palette.LightVibrant.hex,
              hsl: palette.LightVibrant.hsl,
              oklch: lightvibrant.coords.map((coord) => Number(coord) || 0),
              population: palette.LightVibrant.population,
              adjustedPopulation: Math.floor(palette.LightVibrant.population * 0.5),
            },
            Vibrant: {
              hex: palette.Vibrant.hex,
              hsl: palette.Vibrant.hsl,
              oklch: vibrant.coords.map((coord) => Number(coord) || 0),
              population: palette.Vibrant.population,
              adjustedPopulation: palette.Vibrant.population,
            },
            DarkVibrant: {
              hex: palette.DarkVibrant.hex,
              hsl: palette.DarkVibrant.hsl,
              oklch: darkvibrant.coords.map((coord) => Number(coord) || 0),
              population: palette.DarkVibrant.population,
              adjustedPopulation: palette.DarkVibrant.population,
            },
            LightMuted: {
              hex: palette.LightMuted.hex,
              hsl: palette.LightMuted.hsl,
              oklch: lightmuted.coords.map((coord) => Number(coord) || 0),
              population: palette.LightMuted.population,
              adjustedPopulation: Math.floor(palette.LightMuted.population * 0.04),
            },
            Muted: {
              hex: palette.Muted.hex,
              hsl: palette.Muted.hsl,
              oklch: muted.coords.map((coord) => Number(coord) || 0),
              population: palette.Muted.population,
              adjustedPopulation: Math.floor(palette.Muted.population * 0.1),
            },
            DarkMuted: {
              hex: palette.DarkMuted.hex,
              hsl: palette.DarkMuted.hsl,
              oklch: darkmuted.coords.map((coord) => Number(coord) || 0),
              population: palette.DarkMuted.population,
              adjustedPopulation: Math.floor(palette.DarkMuted.population * 0.04),
            },
          };

          console.log(vibrant);
          console.log(serializedPalette);

          let dominant = getDominantColor(serializedPalette);
          let sortedPalette = getSortedPalette(serializedPalette);
          changePalette(serializedPalette);
          changeDominantColor(dominant);
          changeSortedPalette(sortedPalette);
        })
        .catch((err) => {
          console.log("vibrant error");
          console.log(err);
        });
    }

    function handleSongChange(mutationList) {
      console.log("song changed");
      document.querySelector(".middle-controls .thumbnail-image-wrapper img").crossOrigin = "anonymous";

      if (
        document.querySelector(".middle-controls .thumbnail-image-wrapper img").src !== "https://music.youtube.com/"
      ) {
        if (mutationList[0].oldValue === document.querySelector(".middle-controls .thumbnail-image-wrapper img").src) {
          console.log("same song image");
        } else {
          console.log("song image changed");
          setTimeout(getPalette, 100);
        }
      }
    }

    imgChangeObserver.current = new MutationObserver(handleSongChange);

    imgChangeObserver.current.observe(document.querySelector(".middle-controls .thumbnail-image-wrapper img"), {
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
          --ts-palette-lightvibrant-hex: ${palette.LightVibrant.hex};
          --ts-palette-vibrant-hex: ${palette.Vibrant.hex};
          --ts-palette-darkvibrant-hex: ${palette.DarkVibrant.hex};
          --ts-palette-lightmuted-hex: ${palette.LightMuted.hex};
          --ts-palette-muted-hex: ${palette.Muted.hex};
          --ts-palette-darkmuted-hex: ${palette.DarkMuted.hex};

          --ts-palette-lightvibrant-hue: ${(palette.LightVibrant.hsl[0] * 360).toFixed()};
          --ts-palette-vibrant-hue: ${(palette.Vibrant.hsl[0] * 360).toFixed()};
          --ts-palette-darkvibrant-hue: ${(palette.DarkVibrant.hsl[0] * 360).toFixed()};
          --ts-palette-lightmuted-hue: ${(palette.LightMuted.hsl[0] * 360).toFixed()};
          --ts-palette-muted-hue: ${(palette.Muted.hsl[0] * 360).toFixed()};
          --ts-palette-darkmuted-hue: ${(palette.DarkMuted.hsl[0] * 360).toFixed()};

          --ts-palette-lightvibrant-saturation: ${(palette.LightVibrant.hsl[1] * 100).toFixed()}%;
          --ts-palette-vibrant-saturation: ${(palette.Vibrant.hsl[1] * 100).toFixed()}%;
          --ts-palette-darkvibrant-saturation: ${(palette.DarkVibrant.hsl[1] * 100).toFixed()}%;
          --ts-palette-lightmuted-saturation: ${(palette.LightMuted.hsl[1] * 100).toFixed()}%;
          --ts-palette-muted-saturation: ${(palette.Muted.hsl[1] * 100).toFixed()}%;
          --ts-palette-darkmuted-saturation: ${(palette.DarkMuted.hsl[1] * 100).toFixed()}%;

          --ts-palette-lightvibrant-light: ${(palette.LightVibrant.hsl[2] * 100).toFixed()}%;
          --ts-palette-vibrant-light: ${(palette.Vibrant.hsl[2] * 100).toFixed()}%;
          --ts-palette-darkvibrant-light: ${(palette.DarkVibrant.hsl[2] * 100).toFixed()}%;
          --ts-palette-lightmuted-light: ${(palette.LightMuted.hsl[2] * 100).toFixed()}%;
          --ts-palette-muted-light: ${(palette.Muted.hsl[2] * 100).toFixed()}%;
          --ts-palette-darkmuted-light: ${(palette.DarkMuted.hsl[2] * 100).toFixed()}%;

          --ts-palette-lightvibrant-l: ${palette.LightVibrant.oklch[0]};
          --ts-palette-vibrant-l: ${palette.Vibrant.oklch[0]};
          --ts-palette-darkvibrant-l: ${palette.DarkVibrant.oklch[0]};
          --ts-palette-lightmuted-l: ${palette.LightMuted.oklch[0]};
          --ts-palette-muted-l: ${palette.Muted.oklch[0]};
          --ts-palette-darkmuted-l: ${palette.DarkMuted.oklch[0]};

          --ts-palette-lightvibrant-c: ${palette.LightVibrant.oklch[1]};
          --ts-palette-vibrant-c: ${palette.Vibrant.oklch[1]};
          --ts-palette-darkvibrant-c: ${palette.DarkVibrant.oklch[1]};
          --ts-palette-lightmuted-c: ${palette.LightMuted.oklch[1]};
          --ts-palette-muted-c: ${palette.Muted.oklch[1]};
          --ts-palette-darkmuted-c: ${palette.DarkMuted.oklch[1]};

          --ts-palette-lightvibrant-h: ${palette.LightVibrant.oklch[2]};
          --ts-palette-vibrant-h: ${palette.Vibrant.oklch[2]};
          --ts-palette-darkvibrant-h: ${palette.DarkVibrant.oklch[2]};
          --ts-palette-lightmuted-h: ${palette.LightMuted.oklch[2]};
          --ts-palette-muted-h: ${palette.Muted.oklch[2]};
          --ts-palette-darkmuted-h: ${palette.DarkMuted.oklch[2]};
          
          --ts-palette-dominant-hex: ${dominant.hex};
          --ts-palette-dominant-hue: ${(dominant.hsl[0] * 360).toFixed()};
          --ts-palette-dominant-saturation: ${(dominant.hsl[1] * 100).toFixed()}%;
          --ts-palette-dominant-light: ${(dominant.hsl[2] * 100).toFixed()}%;
          --ts-palette-dominant-l: ${sortedPalette[0].oklch[0]};
          --ts-palette-dominant-c: ${sortedPalette[0].oklch[1]};
          --ts-palette-dominant-h: ${sortedPalette[0].oklch[2]};

          --ts-palette-0-hex:: ${sortedPalette[0].hex};
          --ts-palette-0-hue: ${(sortedPalette[0].hsl[0] * 360).toFixed()};
          --ts-palette-0-saturation: ${(sortedPalette[0].hsl[1] * 100).toFixed()}%;
          --ts-palette-0-light: ${(sortedPalette[0].hsl[2] * 100).toFixed()}%;
          --ts-palette-0-l: ${sortedPalette[0].oklch[0]};
          --ts-palette-0-c: ${sortedPalette[0].oklch[1]};
          --ts-palette-0-h: ${sortedPalette[0].oklch[2]};

          --ts-palette-1-hex:: ${sortedPalette[1].hex};
          --ts-palette-1-hue: ${(sortedPalette[1].hsl[0] * 360).toFixed()};
          --ts-palette-1-saturation: ${(sortedPalette[1].hsl[1] * 100).toFixed()}%;
          --ts-palette-1-light: ${(sortedPalette[1].hsl[2] * 100).toFixed()}%;
          --ts-palette-1-l: ${sortedPalette[1].oklch[0]};
          --ts-palette-1-c: ${sortedPalette[1].oklch[1]};
          --ts-palette-1-h: ${sortedPalette[1].oklch[2]};

          --ts-palette-2-hex:: ${sortedPalette[2].hex};
          --ts-palette-2-hue: ${(sortedPalette[2].hsl[0] * 360).toFixed()};
          --ts-palette-2-saturation: ${(sortedPalette[2].hsl[1] * 100).toFixed()}%;
          --ts-palette-2-light: ${(sortedPalette[2].hsl[2] * 100).toFixed()}%;
          --ts-palette-2-l: ${sortedPalette[2].oklch[0]};
          --ts-palette-2-c: ${sortedPalette[2].oklch[1]};
          --ts-palette-2-h: ${sortedPalette[2].oklch[2]};

          --ts-palette-3-hex:: ${sortedPalette[3].hex};
          --ts-palette-3-hue: ${(sortedPalette[3].hsl[0] * 360).toFixed()};
          --ts-palette-3-saturation: ${(sortedPalette[3].hsl[1] * 100).toFixed()}%;
          --ts-palette-3-light: ${(sortedPalette[3].hsl[2] * 100).toFixed()}%;
          --ts-palette-3-l: ${sortedPalette[3].oklch[0]};
          --ts-palette-3-c: ${sortedPalette[3].oklch[1]};
          --ts-palette-3-h: ${sortedPalette[3].oklch[2]};

          --ts-palette-4-hex:: ${sortedPalette[4].hex};
          --ts-palette-4-hue: ${(sortedPalette[4].hsl[0] * 360).toFixed()};
          --ts-palette-4-saturation: ${(sortedPalette[4].hsl[1] * 100).toFixed()}%;
          --ts-palette-4-light: ${(sortedPalette[4].hsl[2] * 100).toFixed()}%;
          --ts-palette-4-l: ${sortedPalette[4].oklch[0]};
          --ts-palette-4-c: ${sortedPalette[4].oklch[1]};
          --ts-palette-4-h: ${sortedPalette[4].oklch[2]};

          --ts-palette-5-hex:: ${sortedPalette[5].hex};
          --ts-palette-5-hue: ${(sortedPalette[5].hsl[0] * 360).toFixed()};
          --ts-palette-5-saturation: ${(sortedPalette[5].hsl[1] * 100).toFixed()}%;
          --ts-palette-5-light: ${(sortedPalette[5].hsl[2] * 100).toFixed()}%;
          --ts-palette-5-l: ${sortedPalette[5].oklch[0]};
          --ts-palette-5-c: ${sortedPalette[5].oklch[1]};
          --ts-palette-5-h: ${sortedPalette[5].oklch[2]};
        }
      `}
    </style>
  );
}

function getVibrantPalette() {
  console.log("getting palette hsl");
  console.log(document.querySelector(".middle-controls .thumbnail-image-wrapper img").src);
  // const bestImg = getBestImgAvailable();
  // console.log(bestImg);
  return Vibrant.from(document.querySelector(".middle-controls .thumbnail-image-wrapper img").src)
    .quality(1)
    .getPalette();
}

function getDominantColor(palette) {
  let dominant = { hex: "#000", hsl: [0.1, 0.5, 0.2], oklch: [20, 0, 20], adjustedPopulation: 0 };

  for (const [, value] of Object.entries(palette)) {
    if (value.adjustedPopulation >= dominant.adjustedPopulation) {
      dominant = value || { hex: "#000", hsl: [0.1, 0.5, 0.2], oklch: [20, 0, 20], adjustedPopulation: 0 };
    }
  }
  return dominant;
}

function getSortedPalette(palette) {
  let arr = [];
  for (const [, value] of Object.entries(palette)) {
    arr.push(value);
  }
  let sortedPalette = arr.sort((a, b) => b.adjustedPopulation - a.adjustedPopulation);
  return sortedPalette;
}

export default Palette;
