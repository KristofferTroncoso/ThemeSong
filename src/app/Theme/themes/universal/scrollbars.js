export const scrollbars = /*css*/ `
/* scrollbars */
::-webkit-scrollbar {
  background-color: transparent;
}

::-webkit-scrollbar-track {
  background-color: var(--themesong-playbarbg-color);
}

::-webkit-scrollbar-thumb {
  background-color: var(--themesong-base-100-alpha-02-color) !important;
  border: 1px solid var(--themesong-base-00-alpha-03-color);
  border-radius: 6px;
}

::-webkit-scrollbar-thumb:hover {
  background-color: var(--themesong-base-100-alpha-05-color) !important;
}

::-webkit-scrollbar-corner {
  background-color: var(--themesong-playbarbg-color);
}

body::-webkit-scrollbar {

}

body::-webkit-scrollbar-track {
  border-left: 1px solid var(--themesong-base-100-alpha-01-color);
  border-top: 1px solid var(--themesong-base-100-alpha-01-color);
  background-color: var(--themesong-base-100-alpha-01-color);
}
`;
