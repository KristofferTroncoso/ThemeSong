export const playerbar_progressbar = /*css*/ `
:root {
  --themesong-playprogress-color: var(--themesong-base-100-color, #ffffff);
}

#progress-bar.ytmusic-player-bar {
  --paper-slider-active-color: var(--themesong-playprogress-color) !important;
  --paper-slider-secondary-color: var(--themesong-base-100-alpha-02-color) !important;
  --paper-slider-container-color: var(--themesong-base-100-alpha-01-color) !important;
}

#progress-bar.ytmusic-player-bar[focused], ytmusic-player-bar:hover #progress-bar.ytmusic-player-bar {
  --paper-slider-knob-color: var(--themesong-playprogress-color) !important;
  --paper-slider-knob-start-color: var(--themesong-playprogress-color) !important;
  --paper-slider-knob-start-border-color: var(--themesong-playprogress-color) !important;
}
`;
