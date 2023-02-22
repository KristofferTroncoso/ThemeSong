export const texts = /*css*/ `
:root {
  --ts-primary-text-color: var(--ts-base-100-color);
  --ts-secondary-text-color: var(--ts-base-70-color);
  --ts-tertiary-text-color: var(--ts-base-60-color);
  --ts-inverse-text-color: var(--ts-base-00-color);
  --ts-primary-text-alpha-color: var(--ts-base-100-alpha-07-color);
  --ts-secondary-text-alpha-color: var(--ts-base-100-alpha-03-color);
}

:root {
  /* secondary texts on lists like "your likes" */
  --ytmusic-overlay-text-secondary: var(--ts-secondary-text-color, steelblue);

  /* some button texts such as "Shuffle" on a playlist. should generally be inverse */
  --yt-spec-text-primary-inverse: var(--ts-inverse-text-color, gold) !important;
}

/* 'recent activity' dropdown buttons */
button.ytmusic-sort-filter-button-renderer {
  color: var(--ts-primary-text-color, red);
}

/* getting the rest of the texts like when clicking on user avatar menu */
:root {
  --ytmusic-text-primary: var(--ts-primary-text-color, tomato) !important;
}

/* random texts like on the right click menu and some pills and buttons */
.text {
  color: var(--ts-primary-text-color, #947a41)!important;
}

.title {
  color: var(--ts-primary-text-color, green) !important;
  --yt-endpoint-color: var(--ts-primary-text-color, red) !important;
  --yt-endpoint-hover-color: var(--ts-primary-text-color, rebeccapurple) !important;;
  --yt-endpoint-visited-color: var(--ts-primary-text-color, purple) !important;;
}

.subtitle {
  color: var(--ts-secondary-text-color, orange) !important;
  --yt-endpoint-color: var(--ts-secondary-text-color, teal) !important;
  --yt-endpoint-hover-color: var(--ts-secondary-text-color, darkred) !important;;
  --yt-endpoint-visited-color: var(--ts-secondary-text-color, darksalmon) !important;;
}

/* some random secondary titles */
.strapline {
  color: var(--ts-secondary-text-color, dodgerblue) !important;
}

/* lyrics and description */
.description {
  color: var(--ts-primary-text-color, deeppink) !important;
}

/* large navbar texts (Home, Explore etc) */
ytmusic-pivot-bar-item-renderer:hover, ytmusic-pivot-bar-item-renderer.iron-selected {
  color: var(--ts-primary-text-color, yellow);
}

ytmusic-pivot-bar-item-renderer {
  color: var(--ts-tertiary-text-color, hotpink);
}

/* on playerpage */
.song-title {
  color: var(--ts-primary-text-color, mediumslateblue) !important;
}


/* "Search" button on navbar */
ytmusic-search-box:not([opened]):hover {
  color: var(--ts-primary-text-color, indianred);
}

ytmusic-search-box {
  color: var(--ts-tertiary-text-color, purple);
}

ytmusic-search-box[opened] input.ytmusic-search-box::placeholder {
  color: var(--ts-tertiary-text-color, peru) !important;
}




/* playpage. up next subtitles like artists and time */
/* also subtitles on the playbar */
.duration, .byline {
  color: var(--ts-secondary-text-color, #e62e5f) !important;
  --yt-endpoint-color: var(--ts-secondary-text-color, rgb(200,100,100)) !important;
  --yt-endpoint-hover-color: var(--ts-secondary-text-color, blue) !important;
  --yt-endpoint-visited-color: var(--ts-secondary-text-color, purple) !important;
}



.time-info.ytmusic-player-bar {
  color: var(--ts-secondary-text-color, red) !important;
}

/* some new additions. "More" button on the home page */
.yt-spec-button-shape-next--mono.yt-spec-button-shape-next--outline {
  color: var(--ts-primary-text-color, #8a3b96);
  border-color: var(--ts-secondary-text-color, blue);
}

/* player page sidebar headers */
tp-yt-paper-tab.iron-selected.ytmusic-player-page {
  color: var(--ts-primary-text-color, red);
}

tp-yt-paper-tab.ytmusic-player-page {
  color: var(--ts-primary-text-alpha-color, rgba(255,50,100,0.7));
}

tp-yt-paper-tab.ytmusic-player-page[disabled] {
  color: var(--ts-secondary-text-alpha-color, rgba(55,55,255,0.3));
}


button.ytmusic-navigation-button-renderer {
  color: var(--ts-primary-text-alpha-color, blue);
}

.container.ytmusic-custom-index-column-renderer {
  color: var(--ts-primary-text-alpha-color, red);
}

/* search */
ytmusic-search-box[has-query] input.ytmusic-search-box, ytmusic-search-box[opened] input.ytmusic-search-box {
  color: var(--ts-primary-text-alpha-color);
}


/* search page that comes up */
ytmusic-tabs.iron-selected .tab.ytmusic-tabs, .tab.selected.ytmusic-tabs {
  color: var(--ts-primary-text-color);
}

.tab.ytmusic-tabs {
  color: var(--ts-primary-text-alpha-color);
}

/* artists page. 'more', 'less' */
.more-button.ytmusic-detail-header-renderer {
  --ytmusic-toggle-button-color: var(--ts-primary-text-color);
}
`;
