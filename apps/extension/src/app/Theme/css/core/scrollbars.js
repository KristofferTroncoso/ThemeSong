export const scrollbars = /*css*/ `
/* scrollbars */
::-webkit-scrollbar {
  background-color: transparent;
  width: 10px;
  height: 10px;
}

::-webkit-scrollbar-track {
  background-color: inherit;
}

::-webkit-scrollbar-thumb {
  background-color: var(--ts-base-100-alpha-02-color) !important;
  border: 1px solid var(--ts-base-00-alpha-03-color);
  border-radius: 8px;
}

::-webkit-scrollbar-thumb:hover {
  background-color: var(--ts-base-100-alpha-05-color) !important;
}

::-webkit-scrollbar-corner {
  background-color: var(--ts-playerbar-color);
}

body::-webkit-scrollbar {
  width: 17px;
  height: 17px;
}

body::-webkit-scrollbar-track {
  border-left: 1px solid var(--ts-base-100-alpha-005-color);
  border-top: 0;
  background-color: var(--ts-base-100-alpha-005-color);
}
`;
