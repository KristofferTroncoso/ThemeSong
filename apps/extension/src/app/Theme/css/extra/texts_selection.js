export const texts_selection = /*css*/ `
  :root {
    --ts-texts-selection-color: dodgerblue;
  }

  ::selection {
    background: var(--ts-texts-selection-color); /* WebKit/Blink Browsers */
  }
  ::-moz-selection {
    background: var(--ts-texts-selection-color); /* Gecko Browsers */
  }
`;
