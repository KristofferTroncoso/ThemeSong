export const gradients_overlays = /*css*/ `
  :root {
    --ts-overlay-color: var(--ts-base-00-alpha-05-color);
    --ts-overlay-highlighted-color: var(--ts-base-100-alpha-01-color);
    --ts-overlay-highlighted2-color: var(--ts-base-100-alpha-01-color);
    --ts-overlay-nowplaying-color: var(--ts-base-100-alpha-01-color);
  }

  :root {
    /* highlighted now playing song on playerpage */
    --ytmusic-color-white1-alpha10: var(--ts-overlay-nowplaying-color);

    /* right click menu hover */
    --ytmusic-menu-item-hover-background-color: var(--ts-overlay-highlighted-color);
  }

  /* search menu search item hover */
  #suggestions.ytmusic-search-suggestions-section>.ytmusic-search-suggestions-section:hover, ytmusic-search-suggestions-section:not([is-entity-search-suggestions-enabled]) #suggestions.ytmusic-search-suggestions-section>.selected-suggestion.ytmusic-search-suggestions-section {
    background-color: var(--ts-overlay-highlighted2-color);
  }

  /* start PlayPage song img styling */
  ytmusic-player {
    /* below is like an accent gradient for the song img */
    --ytmusic-player-overlay-gradient: linear-gradient( var(--ts-overlay-color) 0%, rgba(0, 0, 0, 0) 40% ) !important;
  }
  /* end PlayPage song img styling */


  /* semi-transparent overlay on top of album images (on home page) on-hover */
  ytmusic-background-overlay-renderer {
    --ytmusic-background-overlay-background: var(--ts-overlay-color) !important;
    border-radius: 10px;
  }

  /* miniplayer hover overlay */
  ytmusic-player[player-ui-state_=MINIPLAYER] .song-media-controls.ytmusic-player {
    background: var(--ts-overlay-color);
  }

  /* sidebar active bg */
  ytmusic-guide-entry-renderer[active] tp-yt-paper-item.ytmusic-guide-entry-renderer {
    background-color: var(--ts-overlay-highlighted-color);
  }
`;
