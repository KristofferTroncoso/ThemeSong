// console.log() Vibrant-Colors palette
export default function logPalette(palette) {
  let { LightVibrant, Vibrant, DarkVibrant, LightMuted, Muted, DarkMuted } = palette;
  console.log(
    `%c
    LightVibrant: hsl(${(LightVibrant.hsl[0] * 360).toFixed()}, ${(LightVibrant.hsl[1] * 100).toFixed()}%, ${(
      LightVibrant.hsl[2] * 100
    ).toFixed()}%) ${LightVibrant.hex} p:${LightVibrant.population} adjPop:${LightVibrant.adjustedPopulation}  %c
    Vibrant:      hsl(${(Vibrant.hsl[0] * 360).toFixed()}, ${(Vibrant.hsl[1] * 100).toFixed()}%, ${(
      Vibrant.hsl[2] * 100
    ).toFixed()}%) ${Vibrant.hex} p:${Vibrant.population} adjPop:${Vibrant.adjustedPopulation} %c
    DarkVibrant:  hsl(${(DarkVibrant.hsl[0] * 360).toFixed()}, ${(DarkVibrant.hsl[1] * 100).toFixed()}%, ${(
      DarkVibrant.hsl[2] * 100
    ).toFixed()}%) ${DarkVibrant.hex} p:${DarkVibrant.population} adjPop:${DarkVibrant.adjustedPopulation} %c
    LightMuted:   hsl(${(LightMuted.hsl[0] * 360).toFixed()}, ${(LightMuted.hsl[1] * 100).toFixed()}%, ${(
      LightMuted.hsl[2] * 100
    ).toFixed()}%) ${LightMuted.hex} p:${LightMuted.population} adjPop:${LightMuted.adjustedPopulation} %c
    Muted:        hsl(${(Muted.hsl[0] * 360).toFixed()}, ${(Muted.hsl[1] * 100).toFixed()}%, ${(
      Muted.hsl[2] * 100
    ).toFixed()}%) ${Muted.hex} p:${Muted.population} adjPop:${Muted.adjustedPopulation} %c
    DarkMuted:    hsl(${(DarkMuted.hsl[0] * 360).toFixed()}, ${(DarkMuted.hsl[1] * 100).toFixed()}%, ${(
      DarkMuted.hsl[2] * 100
    ).toFixed()}%) ${DarkMuted.hex} p:${DarkMuted.population} adjPop:${DarkMuted.adjustedPopulation} `,
    `color: black; background: ${LightVibrant.hex};`,
    `color: white; background: ${Vibrant.hex};`,
    `color: white; background: ${DarkVibrant.hex};`,
    `color: black; background: ${LightMuted.hex};`,
    `color: white; background: ${Muted.hex};`,
    `color: white; background: ${DarkMuted.hex};`
  );
}
