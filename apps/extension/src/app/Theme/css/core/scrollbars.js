export const scrollbars = /*css*/ `
/* scrollbars */
::-webkit-scrollbar-thumb {
  background-color: var(--ts-base-100-alpha-02-color) !important;
}

/* new scrollbar properties? chrome version > 120 */
html {
  scrollbar-color: var(--ts-base-100-alpha-02-color) transparent;
}
`;
