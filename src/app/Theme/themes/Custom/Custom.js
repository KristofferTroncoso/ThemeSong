function Custom() {
  const customCSS = /*css*/ `
    body {
      background: hsl(var(--ts-palette-dominant-hue), var(--ts-palette-dominant-saturation), var(--ts-palette-dominant-light));
    }
  `;

  return <style id="Custom">{customCSS}</style>;
}

export default Custom;
