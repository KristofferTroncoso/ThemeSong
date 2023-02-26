import { useEffect } from "react";
import { useStore } from "/src/app/store";
import * as Vibrant from "node-vibrant";
import { playerBarSongImgNode } from "../Theme/selectors";

let imgChangeObserver;

function Palette() {
  const palette = useStore((state) => state.palette.palette);
  const dominant = useStore((state) => state.palette.dominant);
  const sortedPalette = useStore((state) => state.palette.sortedPalette);
  const changePalette = useStore((state) => state.palette.changePalette);
  const changeDominantColor = useStore((state) => state.palette.changeDominantColor);
  const changeSortedPalette = useStore((state) => state.palette.changeSortedPalette);

  useEffect(() => {
    initialPalette();
    function initialPalette() {
      getVibrantPalette()
        .then((palette) => {
          console.log("palette received");
          let serializedPalette = {
            LightVibrant: {
              rgb: palette.LightVibrant.rgb,
              hex: palette.LightVibrant.hex,
              hsl: palette.LightVibrant.hsl,
              population: Math.floor(palette.LightVibrant.population * 0.4),
            },
            Vibrant: {
              rgb: palette.Vibrant.rgb,
              hex: palette.Vibrant.hex,
              hsl: palette.Vibrant.hsl,
              population: palette.Vibrant.population,
            },
            DarkVibrant: {
              rgb: palette.DarkVibrant.rgb,
              hex: palette.DarkVibrant.hex,
              hsl: palette.DarkVibrant.hsl,
              population: palette.DarkVibrant.population,
            },
            LightMuted: {
              rgb: palette.LightMuted.rgb,
              hex: palette.LightMuted.hex,
              hsl: palette.LightMuted.hsl,
              population: Math.floor(palette.LightMuted.population * 0.4),
            },
            Muted: {
              rgb: palette.Muted.rgb,
              hex: palette.Muted.hex,
              hsl: palette.Muted.hsl,
              population: Math.floor(palette.Muted.population * 0.7),
            },
            DarkMuted: {
              rgb: palette.DarkMuted.rgb,
              hex: palette.DarkMuted.hex,
              hsl: palette.DarkMuted.hsl,
              population: Math.floor(palette.DarkMuted.population * 0.5),
            },
          };
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
      playerBarSongImgNode.crossOrigin = "anonymous";

      if (playerBarSongImgNode.src !== "https://music.youtube.com/") {
        if (mutationList[0].oldValue === playerBarSongImgNode.src) {
          console.log("same song image");
        } else {
          console.log("song image changed");
          setTimeout(() => {
            getVibrantPalette()
              .then((palette) => {
                console.log("palette received");
                let serializedPalette = {
                  LightVibrant: {
                    rgb: palette.LightVibrant.rgb,
                    hex: palette.LightVibrant.hex,
                    hsl: palette.LightVibrant.hsl,
                    population: Math.floor(palette.LightVibrant.population * 0.4),
                  },
                  Vibrant: {
                    rgb: palette.Vibrant.rgb,
                    hex: palette.Vibrant.hex,
                    hsl: palette.Vibrant.hsl,
                    population: palette.Vibrant.population,
                  },
                  DarkVibrant: {
                    rgb: palette.DarkVibrant.rgb,
                    hex: palette.DarkVibrant.hex,
                    hsl: palette.DarkVibrant.hsl,
                    population: palette.DarkVibrant.population,
                  },
                  LightMuted: {
                    rgb: palette.LightMuted.rgb,
                    hex: palette.LightMuted.hex,
                    hsl: palette.LightMuted.hsl,
                    population: Math.floor(palette.LightMuted.population * 0.4),
                  },
                  Muted: {
                    rgb: palette.Muted.rgb,
                    hex: palette.Muted.hex,
                    hsl: palette.Muted.hsl,
                    population: Math.floor(palette.Muted.population * 0.7),
                  },
                  DarkMuted: {
                    rgb: palette.DarkMuted.rgb,
                    hex: palette.DarkMuted.hex,
                    hsl: palette.DarkMuted.hsl,
                    population: Math.floor(palette.DarkMuted.population * 0.5),
                  },
                };
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
          }, 1);
        }
      }
    }

    imgChangeObserver = new MutationObserver(handleSongChange);

    imgChangeObserver.observe(playerBarSongImgNode, {
      attributeFilter: ["src"],
      attributeOldValue: true,
    });

    return function () {
      imgChangeObserver.disconnect();
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
          
          --ts-palette-dominant-color: ${dominant.hex};
          --ts-palette-dominant-hue: ${(dominant.hsl[0] * 360).toFixed()};
          --ts-palette-dominant-saturation: ${(dominant.hsl[1] * 100).toFixed()}%;
          --ts-palette-dominant-light: ${(dominant.hsl[2] * 100).toFixed()}%;

          --ts-palette-sorted-0-hex:: ${sortedPalette[0].hex};
          --ts-palette-sorted-0-hue: ${(sortedPalette[0].hsl[0] * 360).toFixed()};
          --ts-palette-sorted-0-saturation: ${(sortedPalette[0].hsl[1] * 100).toFixed()}%;
          --ts-palette-sorted-0-light: ${(sortedPalette[0].hsl[2] * 100).toFixed()}%;

          --ts-palette-sorted-1-hex:: ${sortedPalette[1].hex};
          --ts-palette-sorted-1-hue: ${(sortedPalette[1].hsl[0] * 360).toFixed()};
          --ts-palette-sorted-1-saturation: ${(sortedPalette[1].hsl[1] * 100).toFixed()}%;
          --ts-palette-sorted-1-light: ${(sortedPalette[1].hsl[2] * 100).toFixed()}%;

          --ts-palette-sorted-2-hex:: ${sortedPalette[2].hex};
          --ts-palette-sorted-2-hue: ${(sortedPalette[2].hsl[0] * 360).toFixed()};
          --ts-palette-sorted-2-saturation: ${(sortedPalette[2].hsl[1] * 100).toFixed()}%;
          --ts-palette-sorted-2-light: ${(sortedPalette[2].hsl[2] * 100).toFixed()}%;

          --ts-palette-sorted-3-hex:: ${sortedPalette[3].hex};
          --ts-palette-sorted-3-hue: ${(sortedPalette[3].hsl[0] * 360).toFixed()};
          --ts-palette-sorted-3-saturation: ${(sortedPalette[3].hsl[1] * 100).toFixed()}%;
          --ts-palette-sorted-3-light: ${(sortedPalette[3].hsl[2] * 100).toFixed()}%;

          --ts-palette-sorted-4-hex:: ${sortedPalette[4].hex};
          --ts-palette-sorted-4-hue: ${(sortedPalette[4].hsl[0] * 360).toFixed()};
          --ts-palette-sorted-4-saturation: ${(sortedPalette[4].hsl[1] * 100).toFixed()}%;
          --ts-palette-sorted-4-light: ${(sortedPalette[4].hsl[2] * 100).toFixed()}%;

          --ts-palette-sorted-5-hex:: ${sortedPalette[5].hex};
          --ts-palette-sorted-5-hue: ${(sortedPalette[5].hsl[0] * 360).toFixed()};
          --ts-palette-sorted-5-saturation: ${(sortedPalette[5].hsl[1] * 100).toFixed()}%;
          --ts-palette-sorted-5-light: ${(sortedPalette[5].hsl[2] * 100).toFixed()}%;
        }
      `}
    </style>
  );
}

function getVibrantPalette() {
  console.log("getting palette hsl");
  console.log(playerBarSongImgNode.src);
  return Vibrant.from(playerBarSongImgNode.src).quality(1).getPalette();
}

function getDominantColor(palette) {
  let dominant = { population: 0 };

  for (const [, value] of Object.entries(palette)) {
    if (value.population >= dominant.population) {
      dominant = value;
    }
  }
  return dominant;
}

function getSortedPalette(palette) {
  let arr = [];
  for (const [, value] of Object.entries(palette)) {
    arr.push(value);
  }
  let sortedPalette = arr.sort((a, b) => b.population - a.population);
  return sortedPalette;
}

export default Palette;
