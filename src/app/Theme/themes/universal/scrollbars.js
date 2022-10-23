
export const scrollbars = /*css*/`
/* scrollbars */
::-webkit-scrollbar {
  background-color: transparent;
}

::-webkit-scrollbar-track {
  background-color: var(--themesong-playbarbg-color);
}

::-webkit-scrollbar-thumb {
  background-color: rgba(250, 250, 250, 0.2) !important;
  border: 1px solid rgba(0, 0, 0, 0.3);
  border-radius: 6px;
}

::-webkit-scrollbar-thumb:hover {
  background-color: rgba(250, 250, 250, 0.5) !important;
}

::-webkit-scrollbar-corner {
  background-color: var(--themesong-playbarbg-color);
}

body::-webkit-scrollbar {

}

body::-webkit-scrollbar-track {
  border-left: 1px solid rgba(255, 255, 255, 0.1);
  border-top: 1px solid rgba(255, 255, 255, 0.1);
  background-color: rgba(255,255,255,0.07);
}
`;