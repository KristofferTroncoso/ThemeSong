import { useEffect } from "react";
import { useStore } from "../store";
import * as Vibrant from "node-vibrant";
import { playerBarSongImgNode } from "../Theme/themes/selectors";

let imgChangeObserver;

function Palette() {
  const palette = useStore((state) => state.palette.palette);
  const dominant = useStore((state) => state.palette.dominant);
  const changePalette = useStore((state) => state.palette.changePalette);
  const changeDominantColor = useStore(
    (state) => state.palette.changeDominantColor
  );

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
          changePalette(serializedPalette);
          changeDominantColor(dominant);
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
                    population: Math.floor(
                      palette.LightVibrant.population * 0.4
                    ),
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
                changePalette(serializedPalette);
                changeDominantColor(dominant);
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
          --themesong-palette-lightvibrant-color: ${palette.LightVibrant.hex};
          --themesong-palette-vibrant-color: ${palette.Vibrant.hex};
          --themesong-palette-darkvibrant-color: ${palette.DarkVibrant.hex};
          --themesong-palette-lightmuted-color: ${palette.LightMuted.hex};
          --themesong-palette-muted-color: ${palette.Muted.hex};
          --themesong-palette-darkmuted-color: ${palette.DarkMuted.hex};

          --themesong-palette-lightvibrant-hue: ${(
            palette.LightVibrant.hsl[0] * 360
          ).toFixed()};
          --themesong-palette-vibrant-hue: ${(
            palette.Vibrant.hsl[0] * 360
          ).toFixed()};
          --themesong-palette-darkvibrant-hue: ${(
            palette.DarkVibrant.hsl[0] * 360
          ).toFixed()};
          --themesong-palette-lightmuted-hue: ${(
            palette.LightMuted.hsl[0] * 360
          ).toFixed()};
          --themesong-palette-muted-hue: ${(
            palette.Muted.hsl[0] * 360
          ).toFixed()};
          --themesong-palette-darkmuted-hue: ${(
            palette.DarkMuted.hsl[0] * 360
          ).toFixed()};

          --themesong-palette-lightvibrant-saturation: ${(
            palette.LightVibrant.hsl[1] * 100
          ).toFixed()}%;
          --themesong-palette-vibrant-saturation: ${(
            palette.Vibrant.hsl[1] * 100
          ).toFixed()}%;
          --themesong-palette-darkvibrant-saturation: ${(
            palette.DarkVibrant.hsl[1] * 100
          ).toFixed()}%;
          --themesong-palette-lightmuted-saturation: ${(
            palette.LightMuted.hsl[1] * 100
          ).toFixed()}%;
          --themesong-palette-muted-saturation: ${(
            palette.Muted.hsl[1] * 100
          ).toFixed()}%;
          --themesong-palette-darkmuted-saturation: ${(
            palette.DarkMuted.hsl[1] * 100
          ).toFixed()}%;

          --themesong-palette-lightvibrant-light: ${(
            palette.LightVibrant.hsl[2] * 100
          ).toFixed()}%;
          --themesong-palette-vibrant-light: ${(
            palette.Vibrant.hsl[2] * 100
          ).toFixed()}%;
          --themesong-palette-darkvibrant-light: ${(
            palette.DarkVibrant.hsl[2] * 100
          ).toFixed()}%;
          --themesong-palette-lightmuted-light: ${(
            palette.LightMuted.hsl[2] * 100
          ).toFixed()}%;
          --themesong-palette-muted-light: ${(
            palette.Muted.hsl[2] * 100
          ).toFixed()}%;
          --themesong-palette-darkmuted-light: ${(
            palette.DarkMuted.hsl[2] * 100
          ).toFixed()}%;
          
          --themesong-palette-dominant-color: ${dominant.hex};
          --themesong-palette-dominant-hue: ${(
            dominant.hsl[0] * 360
          ).toFixed()};
          --themesong-palette-dominant-saturation: ${(
            dominant.hsl[1] * 100
          ).toFixed()}%;
          --themesong-palette-dominant-light: ${(
            dominant.hsl[2] * 100
          ).toFixed()}%;

          --themesong-palette-dominant-light50-color: hsl(var(--themesong-palette-dominant-hue), var(--themesong-theme-dynamic-saturation), 50%);
          
          --themesong-palette-dominant-alpha10-color: hsla(var(--themesong-palette-dominant-hue), var(--themesong-theme-dynamic-saturation), var(--themesong-palette-dominant-light), 0.1);
          --themesong-palette-dominant-alpha20-color: hsla(var(--themesong-palette-dominant-hue), var(--themesong-theme-dynamic-saturation), var(--themesong-palette-dominant-light), 0.2);
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

function getDominantColor(x) {
  let dominant = { population: 0 };

  for (const [, value] of Object.entries(x)) {
    if (value.population >= dominant.population) {
      dominant = value;
    }
  }
  return dominant;
}

export default Palette;
