function Custom() {

  const customCSS = /*css*/`
    body {
      background: hsl(var(--themesong-palette-dominant-hue), var(--themesong-palette-dominant-saturation), var(--themesong-palette-dominant-light));
    }
  `;

  return (
    <style id="Custom">
      {customCSS}
    </style>
  )
}

export default Custom;


