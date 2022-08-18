
// YouTube Music logo color on upper left corner of client
export const logoStyles = /*css*/`
  /* logo */
  ytmusic-nav-bar picture:first-child {
    display: none !important;
  }

  ytmusic-nav-bar picture[hidden] {
    display: block !important;
  }

  ytmusic-nav-bar .left-content img {
    filter: brightness(100%);
  }
  /* logo end */
`;