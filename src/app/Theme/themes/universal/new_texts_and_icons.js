export const texts = /*css*/ `
:root {
  --themesong-primary-text-color: var(--themesong-base-100-color);
  --themesong-secondary-text-color: var(--themesong-base-80-color);
  --themesong-tertiary-text-color: var(--themesong-base-70-color);

  --themesong-primary-icon-color: var(--themesong-base-100-color);
  --themesong-secondary-icon-color: var(--themesong-base-80-color);
  --themesong-tertiary-icon-color: var(--themesong-base-70-color);
}

/* secondary texts on lists like "your likes" */
:root {
  --ytmusic-overlay-text-secondary: steelblue;

}

.title {
  color: green !important;
  --yt-endpoint-color: red !important;
  --yt-endpoint-hover-color: rebeccapurple !important;;
  --yt-endpoint-visited-color: purple !important;;
}

.subtitle {
  color: orange !important;
  --yt-endpoint-color: teal !important;
  --yt-endpoint-hover-color: darkred !important;;
  --yt-endpoint-visited-color: darksalmon !important;;
}

.strapline {
  color: dodgerblue !important;
}

/* lyrics and description */
.description {
  color: deeppink !important;
}

/* large navbar texts (Home, Explore etc) */
ytmusic-pivot-bar-item-renderer:hover, ytmusic-pivot-bar-item-renderer.iron-selected {
  color: yellow;
}

ytmusic-pivot-bar-item-renderer {
  color: hotpink;
}

/* on playerpage */
.song-title {
  color: mediumslateblue !important;
}

ytmusic-search-box {
  color: purple;
}

/* playpage. up next subtitles like artists and time */
/* also subtitles on the playbar */
.duration, .byline {
  color: #e62e5f !important;
  --yt-endpoint-color: rgb(200,100,100) !important;
  --yt-endpoint-hover-color: blue !important;
  --yt-endpoint-visited-color: purple !important;
}

/* random texts like on the right click menu and some pills and buttons */
.text {
  color: #947a41 !important;
}

.time-info.ytmusic-player-bar {
  color: red !important;
}

/* some new additions. "More" button on the home page */
.yt-spec-button-shape-next--mono.yt-spec-button-shape-next--outline {
  color: #8a3b96;
  border-color: blue;
}

/* getting the rest of the texts like when clicking on user avatar menu */
:root {
  --ytmusic-text-primary: tomato !important;
}

`;

export const icons = /*css*/ `

ytmusic-search-suggestion {
  --iron-icon-fill-color: crimson;
}

.cast-button.ytmusic-cast-button {
  --iron-icon-fill-color: blue;
}
`;

export const texts_and_icons = /*css*/ `
${texts}
${icons}
`;
