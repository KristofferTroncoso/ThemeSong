export const backgrounds = /*css*/ `

:root {
  --ts-navbar-color: #991a31;
  --ts-sidebar-color: var(--ts-navbar-color, #991a31);
  --ts-playerpage-color: #991a31;
  --ts-playerpageavtoggle-color: #991a31;
  --ts-playerbar-color: #991a31;
  --ts-body-color: #991a31;

  /* if an alpha color is specified, this will let the "hue" lights on the homepage show through */
  --ts-body-alpha-gradient-color: var(--ts-body-color);

  --ts-bgcolor-transition: background 0.3s linear;
  --yt-spec-inverted-background: var(--ts-body-color);
}

:root {
  --ytmusic-brand-background-solid: var(--ts-body-color) !important;
  --ytmusic-general-background-a: var(--ts-body-color) !important;
  --ytmusic-general-background-c: var(--ts-body-color) !important;
  --ytmusic-search-background: var(--ts-body-color) !important;
  --yt-spec-menu-background: var(--ts-playerbar-color) !important;

  /* share menu */
  --yt-spec-brand-background-solid: var(--ts-body-color) !important;
  --yt-spec-general-background-a: var(--ts-body-color) !important;
}

body {
  background: var(--ts-body-color);
  transition: var(--ts-bgcolor-transition) !important;
}

ytmusic-browse-response[has-background]:not([disable-gradient]) .background-gradient.ytmusic-browse-response {
  background-image: linear-gradient(
    to bottom,
    var(--ts-body-alpha-gradient-color),
    var(--ts-body-color) 40%
  );
  transition: var(--ts-bgcolor-transition) !important;
  background-size: 100vw 100vh;
}

ytmusic-browse-response[has-background]:not([disable-gradient])[page-type=MUSIC_PAGE_TYPE_PODCAST_SHOW_DETAIL_PAGE] .background-gradient.ytmusic-browse-response, ytmusic-browse-response[has-background]:not([disable-gradient])[page-type=MUSIC_PAGE_TYPE_NON_MUSIC_AUDIO_TRACK_PAGE] .background-gradient.ytmusic-browse-response, ytmusic-browse-response[has-background]:not([disable-gradient])[is-bauhaus-web-playlist-detail-page-redesign-enabled] .background-gradient.ytmusic-browse-response, ytmusic-browse-response[has-background]:not([disable-gradient])[is-bauhaus-web-album-detail-page-redesign-enabled] .background-gradient.ytmusic-browse-response {
  background-image: linear-gradient(
    to bottom,
    var(--ts-body-alpha-gradient-color),
    var(--ts-body-color)
  );
}

#player-page {
  background: var(--ts-playerpage-color) !important;
  transition: transform 300ms cubic-bezier(0.2,0,0.6,1), var(--ts-bgcolor-transition);
}

#song-image {
  background: var(--ts-playerpage-color) !important;
  transition: transform 300ms cubic-bezier(0.2,0,0.6,1), var(--ts-bgcolor-transition);
}

#nav-bar-background {
  background: var(--ts-navbar-color) !important;
  transition: opacity 0.2s, var(--ts-bgcolor-transition) !important;
}

#player-bar-background {
  background: var(--ts-playerbar-color) !important;
  transition: var(--ts-bgcolor-transition) !important;
}

/* sidebar */
#guide-wrapper {
  background: var(--ts-sidebar-color) !important;
  transition: var(--ts-bgcolor-transition) !important;
}

#mini-guide-background {
  background: var(--ts-sidebar-color) !important;
  transition: var(--ts-bgcolor-transition) !important;
}

ytmusic-player-bar {
  --ytmusic-player-bar-background: var(--ts-playerbar-color) !important;
  transition: var(--ts-bgcolor-transition) !important;
}

ytmusic-app-layout[player-fullscreened] > [slot=player-bar] {
  background: var(--ts-playerbar-color) !important;
}

tp-yt-paper-listbox {
  background: var(--ts-playerbar-color);
}

ytmusic-item-section-renderer.stuck #header.ytmusic-item-section-renderer {
  background: var(--ts-body-color);
}

ytmusic-tabs.stuck {
  background: var(--ts-navbar-color);
  box-shadow: rgb(0 0 0 / 0.3) 0px 3px 6px -3px !important;
}

/* av toggle start */
ytmusic-av-toggle[playback-mode=ATV_PREFERRED] .song-button.ytmusic-av-toggle {
  background: var(--ts-playerpageavtoggle-color);
}

ytmusic-av-toggle[playback-mode=OMV_PREFERRED] .video-button.ytmusic-av-toggle {
  background: var(--ts-playerpageavtoggle-color);
}

.song-button.ytmusic-av-toggle, .video-button.ytmusic-av-toggle {
  background-color: var(--ts-base-10-color);
}

.av-toggle.ytmusic-av-toggle {
  background-color: var(--ts-base-10-color);
}

ytmusic-av-toggle[toggle-disabled] .video-button.ytmusic-av-toggle {
  color: var(--ts-base-100-alpha-04-color);
}

ytmusic-av-toggle[toggle-disabled] .song-button.ytmusic-av-toggle {
  color: var(--ts-base-100-alpha-04-color);
}

.song-button.ytmusic-av-toggle, .video-button.ytmusic-av-toggle {
  color: var(--ts-base-100-color);
  --yt-endpoint-color: var(--ts-base-100-color);
  --yt-endpoint-hover-color: var(--ts-base-100-color);
  --yt-endpoint-visited-color: var(--ts-base-100-color);
}
/* av toggle end */

ytmusic-search-suggestions-section.ytmusic-search-box {
  border-top: 1px solid var(--ts-base-100-alpha-02-color);
}

ytmusic-search-box[is-bauhaus-sidenav-enabled] {
  --ytmusic-search-background: var(--ts-body-color);
}

ytmusic-search-suggestions-section {
  background: var(--ts-body-color);
}

#suggestion-list {
  background-color: var(--ts-body-color) !important;
}

/* artist image white filter */
/* aside from the gradient, there's also a default dark filter applied to the artist image header on the artist page */
/* this needs to be set to a white/light filter on light themes or else it wont look right */
.image.ytmusic-immersive-header-renderer~.content-container-wrapper.ytmusic-immersive-header-renderer {
  background-color: var(--ts-base-00-alpha-04-color) !important;
}

/* when searching a song, the Top Result has a bg gradient applied */
.immersive-background.ytmusic-card-shelf-renderer:before {
  background-image: linear-gradient(180deg,rgb(0 0 0 / 0.05) 0%, var(--ts-base-10-color) 86.67%);
}

/* settings menu */
.content.ytmusic-settings-page {
  background-color: var(--ts-body-color);
}

/* search bar new sidebar layout */
ytmusic-search-box[is-bauhaus-sidenav-enabled][is-mobile-view][opened], ytmusic-search-box[is-bauhaus-sidenav-enabled][is-mobile-view][has-query] {
  --ytmusic-search-background: var(--ts-playerbar-color) !important;
}

ytmusic-search-box[is-bauhaus-sidenav-enabled]:not([opened]):not([has-query]) .search-box.ytmusic-search-box {
  background: var(--ts-base-100-alpha-005-color);
}

/* new playlist form */
ytmusic-playlist-form {
  background: var(--ts-base-10-color);
}

.dropdown-content.ytmusic-dropdown-renderer {
  --paper-listbox-background-color: var(--ts-base-10-color);
}

/* toast color. like when "saved to playlist" thing pops up */
tp-yt-paper-toast {
  background-color: var(--ts-base-10-color);
}

ytmusic-notification-text-renderer[toast-style=TOAST_STYLE_GRADIENT] #toast.ytmusic-notification-text-renderer {
  background-color: var(--ts-base-10-color);
}

/* image filters */
.immersive-background ytmusic-fullbleed-thumbnail-renderer {
  filter: saturate(2) var(--ts-image-filter-brightness, brightness(1));
}

/* pick artists you like footer */
.buttons.ytmusic-tastebuilder-renderer {
  background: var(--ts-base-10-color);
}

/* Explore -> Big buttons hover */
ytmusic-navigation-button-renderer:not([button-style=STYLE_OUTLINE_BORDER]):hover button.ytmusic-navigation-button-renderer, ytmusic-navigation-button-renderer:not([button-style=STYLE_OUTLINE_BORDER]) button.ytmusic-navigation-button-renderer:focus-within {
  background: var(--ts-base-100-alpha-02-color);
}

/* mobile layout */
html {
  --ytmusic-overlay-background-medium: var(--ts-base-00-alpha-05-color);
}

ytmusic-player-page[is-mweb-modernization-enabled][player-page-ui-state=TABS_VIEW] #side-panel.ytmusic-player-page {
  background: var(--ts-body-color);
}

ytmusic-player-page[is-mweb-modernization-enabled] .background-thumbnail.ytmusic-player-page {
  filter: blur(80px) brightness(2) saturate(2);
}

/* playlist layout */
ytmusic-browse-response[has-background][page-type=MUSIC_PAGE_TYPE_NON_MUSIC_AUDIO_TRACK_PAGE] .immersive-background.ytmusic-browse-response ytmusic-fullbleed-thumbnail-renderer.ytmusic-browse-response, ytmusic-browse-response[has-background][page-type=MUSIC_PAGE_TYPE_PODCAST_SHOW_DETAIL_PAGE] .immersive-background.ytmusic-browse-response ytmusic-fullbleed-thumbnail-renderer.ytmusic-browse-response, ytmusic-browse-response[has-background][is-bauhaus-web-playlist-detail-page-redesign-enabled] .immersive-background.ytmusic-browse-response ytmusic-fullbleed-thumbnail-renderer.ytmusic-browse-response, ytmusic-browse-response[has-background][is-bauhaus-web-album-detail-page-redesign-enabled] .immersive-background.ytmusic-browse-response ytmusic-fullbleed-thumbnail-renderer.ytmusic-browse-response {
  filter: blur(80px) saturate(3);
}

/* when searching for something */
html[light] .immersive-background.ytmusic-card-shelf-renderer ytmusic-fullbleed-thumbnail-renderer.ytmusic-card-shelf-renderer {
  filter: blur(60px) brightness(3) saturate(2);
}

ytmusic-network-status-banner[current-state=OFFLINE] {
  background-color: var(--ts-playerbar-color);
  border-top: 1px solid #00000033;
}
`;
