
// console.log() Vibrant-Colors palette and UI colors

export default function logColors(palette, uiColorsObj) {
  let {LightVibrant, Vibrant, DarkVibrant, LightMuted, Muted, DarkMuted} = palette;
  let colorsObjectsArray = Object.entries(uiColorsObj);

  console.log(`%c
    LightVibrant: hsl(${(LightVibrant.hsl[0] * 360).toFixed()}, ${(LightVibrant.hsl[1] * 100).toFixed()}%, ${(LightVibrant.hsl[2] * 100).toFixed()}%) ${LightVibrant.hex}%c
    Vibrant:      hsl(${(Vibrant.hsl[0] * 360).toFixed()}, ${(Vibrant.hsl[1] * 100).toFixed()}%, ${(Vibrant.hsl[2] * 100).toFixed()}%) ${Vibrant.hex}%c
    DarkVibrant:  hsl(${(DarkVibrant.hsl[0] * 360).toFixed()}, ${(DarkVibrant.hsl[1] * 100).toFixed()}%, ${(DarkVibrant.hsl[2] * 100).toFixed()}%) ${DarkVibrant.hex}%c
    LightMuted:   hsl(${(LightMuted.hsl[0] * 360).toFixed()}, ${(LightMuted.hsl[1] * 100).toFixed()}%, ${(LightMuted.hsl[2] * 100).toFixed()}%) ${LightMuted.hex}%c
    Muted:        hsl(${(Muted.hsl[0] * 360).toFixed()}, ${(Muted.hsl[1] * 100).toFixed()}%, ${(Muted.hsl[2] * 100).toFixed()}%) ${Muted.hex}%c
    DarkMuted:    hsl(${(DarkMuted.hsl[0] * 360).toFixed()}, ${(DarkMuted.hsl[1] * 100).toFixed()}%, ${(DarkMuted.hsl[2] * 100).toFixed()}%) ${DarkMuted.hex}`,
    `color: black; background: ${LightVibrant.hex};`,
    `color: white; background: ${Vibrant.hex};`,
    `color: white; background: ${DarkVibrant.hex};`,
    `color: black; background: ${LightMuted.hex};`,
    `color: white; background: ${Muted.hex};`,
    `color: white; background: ${DarkMuted.hex};`
  );

  // console.log(`%c
  //   ${colorsObjectsArray[0][0]}:        ${colorsObjectsArray[0][1]}%c
  //   ${colorsObjectsArray[1][0]}:    ${colorsObjectsArray[1][1]}%c
  //   ${colorsObjectsArray[2][0]}:  ${colorsObjectsArray[2][1]}%c
  //   ${colorsObjectsArray[3][0]}:      ${colorsObjectsArray[3][1]}%c
  //   ${colorsObjectsArray[4][0]}: ${colorsObjectsArray[4][1]}`,
  //   `color: white; background: ${colorsObjectsArray[0][1]};`,
  //   `color: white; background: ${colorsObjectsArray[1][1]};`,
  //   `color: white; background: ${colorsObjectsArray[2][1]};`,
  //   `color: white; background: ${colorsObjectsArray[3][1]};`,
  //   `color: white; background: ${colorsObjectsArray[4][1]};`
  // );
};