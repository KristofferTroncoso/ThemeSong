export const texts = /*css*/ `
:root {
  --ts-primary-text-color: var(--ts-base-100-color);
  --ts-secondary-text-color: var(--ts-base-80-color);
  --ts-tertiary-text-color: var(--ts-base-70-color);
  --ts-inverse-text-color: var(--ts-base-00-color);
  --ts-primary-text-alpha-color: var(--ts-base-100-alpha-07-color);
  --ts-secondary-text-alpha-color: var(--ts-base-100-alpha-03-color);
  --yt-spec-static-overlay-text-secondary: var(--ts-base-100-alpha-07-color);
}

:root {
  /* secondary texts on lists like "your likes" */
  --ytmusic-overlay-text-secondary: var(--ts-secondary-text-color, steelblue);

  /* some button texts such as "Shuffle" on a playlist. should generally be inverse */
  --yt-spec-text-primary-inverse: var(--ts-inverse-text-color, gold) !important;

  /* saved to liked music */
  --yt-spec-static-overlay-text-primary: var(--ts-primary-text-color);
}

/* 'recent activity' dropdown buttons */
button.ytmusic-sort-filter-button-renderer {
  color: var(--ts-primary-text-color, red);
}

/* getting the rest of the texts like when clicking on user avatar menu */
:root {
  --ytmusic-text-primary: var(--ts-primary-text-color, tomato) !important;
}

/* getting the rest of texts */
yt-formatted-string {
  color: var(--ts-primary-text-color);
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
ytmusic-pivot-bar-item-renderer yt-formatted-string:hover, ytmusic-pivot-bar-item-renderer.iron-selected {
  color: var(--ts-primary-text-color, yellow) !important;
}

ytmusic-pivot-bar-item-renderer yt-formatted-string {
  color: var(--ts-tertiary-text-color, hotpink) !important;
}

/* on playerpage */
.song-title {
  color: var(--ts-primary-text-color, mediumslateblue) !important;
}


/* "Search" on navbar */

ytmusic-search-box:not([opened]):hover {
  color: var(--ts-primary-text-color, indianred);
}

ytmusic-search-box {
  color: var(--ts-secondary-text-color, purple);
}

ytmusic-search-box[opened] input.ytmusic-search-box::placeholder {
  color: var(--ts-secondary-text-color, peru) !important;
}

ytmusic-search-box[has-query] input.ytmusic-search-box, ytmusic-search-box[opened] input.ytmusic-search-box {
  color: var(--ts-secondary-text-color, purple);
}

tp-yt-paper-icon-button.ytmusic-search-box, input.ytmusic-search-box, input.ytmusic-search-box::placeholder {
  color: var(--ts-secondary-text-color, purple);
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
  border-color: var(--ts-secondary-text-alpha-color, blue);
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

/* time info when hovering playerbar progressbar */
#hover-time-info.ytmusic-player-bar {
  color: var(--ts-primary-text-color);
}

/* sidebar */
/* "sign in , new playlist button texts" */
.yt-spec-button-shape-next--mono.yt-spec-button-shape-next--tonal {
  color: var(--ts-primary-text-color);
}

/* dropdown texts. Like picking region in settins */
tp-yt-paper-dropdown-menu.ytmusic-setting-single-option-menu-renderer .input-content.tp-yt-paper-input-container>input, tp-yt-paper-dropdown-menu.ytmusic-setting-single-option-menu-renderer .input-content.tp-yt-paper-input-container>iron-input, tp-yt-paper-dropdown-menu.ytmusic-setting-single-option-menu-renderer .input-content.tp-yt-paper-input-container>textarea, tp-yt-paper-dropdown-menu.ytmusic-setting-single-option-menu-renderer .input-content.tp-yt-paper-input-container>iron-autogrow-textarea, tp-yt-paper-dropdown-menu.ytmusic-setting-single-option-menu-renderer .input-content.tp-yt-paper-input-container>.paper-input-input {
  color: var(--ts-primary-text-color);
}

ytmusic-dropdown-renderer[dropdown-style=underline] tp-yt-paper-dropdown-menu.ytmusic-dropdown-renderer .input-content.tp-yt-paper-input-container>input, ytmusic-dropdown-renderer[dropdown-style=underline] tp-yt-paper-dropdown-menu.ytmusic-dropdown-renderer .input-content.tp-yt-paper-input-container>iron-input, ytmusic-dropdown-renderer[dropdown-style=underline] tp-yt-paper-dropdown-menu.ytmusic-dropdown-renderer .input-content.tp-yt-paper-input-container>textarea, ytmusic-dropdown-renderer[dropdown-style=underline] tp-yt-paper-dropdown-menu.ytmusic-dropdown-renderer .input-content.tp-yt-paper-input-container>iron-autogrow-textarea, ytmusic-dropdown-renderer[dropdown-style=underline] tp-yt-paper-dropdown-menu.ytmusic-dropdown-renderer .input-content.tp-yt-paper-input-container>.paper-input-input {
  color: var(--ts-primary-text-color);
}

/* input texts (e.g. New playlist) */
.input.ytmusic-playlist-form:not(tp-yt-paper-textarea) .input-content.tp-yt-paper-input-container>input, .input.ytmusic-playlist-form:not(tp-yt-paper-textarea) .input-content.tp-yt-paper-input-container>iron-input, .input.ytmusic-playlist-form:not(tp-yt-paper-textarea) .input-content.tp-yt-paper-input-container>textarea, .input.ytmusic-playlist-form:not(tp-yt-paper-textarea) .input-content.tp-yt-paper-input-container>iron-autogrow-textarea, .input.ytmusic-playlist-form:not(tp-yt-paper-textarea) .input-content.tp-yt-paper-input-container>.paper-input-input {
  color: var(--ts-primary-text-color);
}

tp-yt-paper-textarea.ytmusic-playlist-form .input-content.tp-yt-paper-input-container>input, tp-yt-paper-textarea.ytmusic-playlist-form .input-content.tp-yt-paper-input-container>iron-input, tp-yt-paper-textarea.ytmusic-playlist-form .input-content.tp-yt-paper-input-container>textarea, tp-yt-paper-textarea.ytmusic-playlist-form .input-content.tp-yt-paper-input-container>iron-autogrow-textarea, tp-yt-paper-textarea.ytmusic-playlist-form .input-content.tp-yt-paper-input-container>.paper-input-input {
  color: var(--ts-primary-text-color);
}

.input.ytmusic-playlist-form #labelAndInputContainer#labelAndInputContainer.label-is-floating>label, .input.ytmusic-playlist-form #labelAndInputContainer#labelAndInputContainer.label-is-floating>.paper-input-label {
  color: var(--ts-secondary-text-color);
}

ytmusic-dropdown-renderer[dropdown-style=underline] tp-yt-paper-dropdown-menu.ytmusic-dropdown-renderer #labelAndInputContainer#labelAndInputContainer.label-is-floating>label, ytmusic-dropdown-renderer[dropdown-style=underline] tp-yt-paper-dropdown-menu.ytmusic-dropdown-renderer #labelAndInputContainer#labelAndInputContainer.label-is-floating>.paper-input-label {
  color: var(--ts-secondary-text-color);
}

/* toast that pops up when a song is played next */
tp-yt-paper-toast {
  color: var(--ts-primary-text-color);
}

/* button texts when you try to delete an uploaded song */
.yt-spec-button-shape-next--overlay.yt-spec-button-shape-next--text {
  color: var(--ts-primary-text-color) !important;
}

/* song pills. selected. (All, Familiar, Discover, etc) */
ytmusic-chip-cloud-chip-renderer[enable-bauhaus-style][chip-style=STYLE_PRIMARY] a.ytmusic-chip-cloud-chip-renderer, ytmusic-chip-cloud-chip-renderer[enable-bauhaus-style][chip-style=STYLE_SECONDARY] a.ytmusic-chip-cloud-chip-renderer, ytmusic-chip-cloud-chip-renderer[enable-bauhaus-style][chip-style=STYLE_UNKNOWN][is-selected] a.ytmusic-chip-cloud-chip-renderer .text {
  color: var(--ts-inverse-text-color) !important;
}

ytmusic-chip-cloud-chip-renderer[enable-bauhaus-style][chip-style=STYLE_PRIMARY] a.ytmusic-chip-cloud-chip-renderer, ytmusic-chip-cloud-chip-renderer[enable-bauhaus-style][chip-style=STYLE_SECONDARY] a.ytmusic-chip-cloud-chip-renderer, ytmusic-chip-cloud-chip-renderer[enable-bauhaus-style][chip-style=STYLE_UNKNOWN][is-selected] a.ytmusic-chip-cloud-chip-renderer {
  color: var(--ts-inverse-text-color) !important;
}

/* links. blue links. "manage your account" */
ytd-multi-page-menu-renderer.ytmusic-popup-container {
  --yt-spec-call-to-action: var(--ts-base-blue);
  --yt-endpoint-hover-color: var(--ts-base-blue);
}

/* Libary - Artists - Sort */
ytmusic-dropdown-renderer[dropdown-style=default] tp-yt-paper-dropdown-menu.ytmusic-dropdown-renderer .input-content.tp-yt-paper-input-container>input, ytmusic-dropdown-renderer[dropdown-style=default] tp-yt-paper-dropdown-menu.ytmusic-dropdown-renderer .input-content.tp-yt-paper-input-container>iron-input, ytmusic-dropdown-renderer[dropdown-style=default] tp-yt-paper-dropdown-menu.ytmusic-dropdown-renderer .input-content.tp-yt-paper-input-container>textarea, ytmusic-dropdown-renderer[dropdown-style=default] tp-yt-paper-dropdown-menu.ytmusic-dropdown-renderer .input-content.tp-yt-paper-input-container>iron-autogrow-textarea, ytmusic-dropdown-renderer[dropdown-style=default] tp-yt-paper-dropdown-menu.ytmusic-dropdown-renderer .input-content.tp-yt-paper-input-container>.paper-input-input {
  color: var(--ts-primary-text-color);
  --yt-endpoint-color: var(--ts-primary-text-color);
  --yt-endpoint-hover-color: var(--ts-primary-text-color);
  --yt-endpoint-visited-color: var(--ts-primary-text-color);
}
ytmusic-dropdown-renderer[dropdown-style=default] {
  background-color: var(--ts-base-100-alpha-01-color);
  border: 1px solid var(--ts-base-100-alpha-01-color);
}

/* form - like editing playlists */
tp-yt-paper-tab.iron-selected.ytmusic-playlist-form {
  color: var(--ts-primary-text-color);
}
tp-yt-paper-tab.ytmusic-playlist-form {
  color: var(--ts-base-100-alpha-06-color);
}
tp-yt-paper-tabs.ytmusic-playlist-form {
  --paper-tabs-selection-bar-color: var(--ts-primary-text-color);
}

/* add to playlist menu */
.section-heading.ytmusic-add-to-playlist-renderer {
  color: var(--ts-primary-text-color);;
}

#title.ytmusic-playlist-add-to-option-renderer {
  color: var(--ts-primary-text-color);;
}

/* settings menu */
.summary.ytmusic-setting-boolean-renderer {
  color: var(--ts-primary-text-color);
}

.summary.ytmusic-setting-action-renderer {
  color: var(--ts-primary-text-color);
}

.summary.ytmusic-setting-read-only-item-renderer {
  color: var(--ts-primary-text-color);
}

/* pick artists you like */
.primary-text.ytmusic-tastebuilder-renderer {
  color: var(--ts-primary-text-color);
  --yt-endpoint-color: var(--ts-primary-text-color);
  --yt-endpoint-hover-color: var(--ts-primary-text-color);
  --yt-endpoint-visited-color: var(--ts-primary-text-color);
}

/* numbered tracks in album view */
.index.ytmusic-responsive-list-item-renderer {
  color: var(--ts-secondary-text-color);
}

/* lyrics Source subtitle */
.footer.ytmusic-description-shelf-renderer {
  color: var(--ts-secondary-text-color);
}

/* privacy dropdown when creating playlist */
.label.ytmusic-dropdown-item-renderer {
  color: var(--ts-primary-text-color);
  --yt-endpoint-color: var(--ts-primary-text-color);
  --yt-endpoint-hover-color: var(--ts-primary-text-color);
  --yt-endpoint-visited-color: var(--ts-primary-text-color);
}

/* texts when there's no lyrics */
.text.ytmusic-message-renderer, .subtext.ytmusic-message-renderer {
  color: var(--ts-secondary-text-color);
}

yt-formatted-string.ytmusic-guide-signin-promo-renderer {
  color: var(--ts-secondary-text-color);
}

/* */
.strapline-text.ytmusic-responsive-header-renderer {
  color: var(--ts-tertiary-text-color);
  --yt-endpoint-color: var(--ts-tertiary-text-color);
  --yt-endpoint-hover-color: var(--ts-tertiary-text-color);
  --yt-endpoint-visited-color: var(--ts-tertiary-text-color);
}


ytmusic-responsive-header-renderer[is-bauhaus-web-playlist-detail-page-redesign-enabled] .strapline-text.ytmusic-responsive-header-renderer, ytmusic-responsive-header-renderer[is-bauhaus-web-album-detail-page-redesign-enabled] .strapline-text.ytmusic-responsive-header-renderer {
  color: var(--ts-primary-text-color);
  --yt-endpoint-color: var(--ts-primary-text-color);
  --yt-endpoint-hover-color: var(--ts-primary-text-color);
  --yt-endpoint-visited-color: var(--ts-primary-text-color);
}

ytmusic-shelf-renderer[is-bauhaus-web-detail-page-redesign-enabled] .title.ytmusic-shelf-renderer>yt-formatted-string.ytmusic-shelf-renderer {
  color: var(--ts-primary-text-color);
  --yt-endpoint-color: var(--ts-primary-text-color);
  --yt-endpoint-hover-color: var(--ts-primary-text-color);
  --yt-endpoint-visited-color: var(--ts-primary-text-color);
}

.yt-spec-button-shape-next--call-to-action.yt-spec-button-shape-next--text {
  color: var(--ts-base-blue);
}

yt-formatted-string.ytmusic-menu-service-item-download-renderer {
  color: var(--ts-primary-text-color);
}

yt-formatted-string.ytmusic-menu-service-item-download-renderer {
  color: var(--ts-primary-text-color);
}

#text.yt-notification-action-renderer, #sub-text.yt-notification-action-renderer {
  color: var(--ts-primary-text-color);
}

ytmusic-responsive-header-renderer[is-playlist-detail-page] .strapline-text.ytmusic-responsive-header-renderer, ytmusic-responsive-header-renderer[is-album-detail-page] .strapline-text.ytmusic-responsive-header-renderer {
    color: var(--ts-primary-text-color);
    --yt-endpoint-color: var(--ts-primary-text-color);
    --yt-endpoint-hover-color: var(--ts-primary-text-color);
    --yt-endpoint-visited-color: var(--ts-primary-text-color);
}

ytmusic-shelf-renderer[is-playlist-detail-page] .title.ytmusic-shelf-renderer>yt-formatted-string.ytmusic-shelf-renderer, ytmusic-shelf-renderer[is-album-detail-page] .title.ytmusic-shelf-renderer>yt-formatted-string.ytmusic-shelf-renderer {
    color: var(--ts-primary-text-color);
    --yt-endpoint-color: var(--ts-primary-text-color);
    --yt-endpoint-hover-color: var(--ts-primary-text-color);
    --yt-endpoint-visited-color: var(--ts-primary-text-color);
}

tp-yt-iron-input.tp-yt-paper-input>input.tp-yt-paper-input {
  color: var(--ts-primary-text-color);
}

.ytmusicMultiPageMenuRendererHost {
    --yt-spec-call-to-action: var(--ts-base-blue);
    --yt-endpoint-hover-color: var(--ts-base-blue);
}

.section-title.ytmusic-dismissable-dialog-renderer {
    color: var(--ts-primary-text-color);
}
`;
