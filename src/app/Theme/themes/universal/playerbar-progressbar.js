export const playerbar_progressbar = /*css*/ `
:root {
  --ts-playprogress-color: var(--ts-base-100-color, #ffffff);
}

#progress-bar.ytmusic-player-bar {
  --paper-slider-active-color: var(--ts-playprogress-color) !important;
  --paper-slider-secondary-color: var(--ts-base-100-alpha-02-color) !important;
  --paper-slider-container-color: var(--ts-base-100-alpha-01-color) !important;
}

#progress-bar.ytmusic-player-bar[focused], ytmusic-player-bar:hover #progress-bar.ytmusic-player-bar {
  --paper-slider-knob-color: var(--ts-playprogress-color) !important;
  --paper-slider-knob-start-color: var(--ts-playprogress-color) !important;
  --paper-slider-knob-start-border-color: var(--ts-playprogress-color) !important;
}
`;
