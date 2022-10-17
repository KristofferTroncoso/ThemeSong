import React from 'react';

function Custom() {

  const customCSS = /*css*/`
    body {
      background: hsl(var(--themesong-palette-dominant-hue), var(--themesong-palette-dominant-saturation), var(--themesong-palette-dominant-light));
    }
  `;

  const customCSS4 = `

/* Header/Navigation Bar */
ytmusic-nav-bar .left-content [aria-label=Home] picture {
  display: none !important;
}
ytmusic-nav-bar .left-content [aria-label=Home] {
    background: url(https://raw.githubusercontent.com/Tech-How/Light-Theme-for-YouTube-Music/main/images/style/ytm-logo-beta.png);
    border-radius: 5px;
    width: 120px;
    height: 30px;
    background-repeat: no-repeat;
}

.center-content.style-scope.ytmusic-nav-bar {
    background: #F4F4F4 !important;
}

/* Welcome Image */
.background-gradient.ytmusic-immersive-carousel-shelf-renderer {
    display: none;
}

/* Search Box */
ytmusic-search-box {
    color: #262626 !important;
    background: #F4F4F4 !important;
    border-color: #ccc;
    border-radius: 7px;
}

ytmusic-search-box:not([opened]):not([has-query]) .search-box.ytmusic-search-box {
    background: #F4F4F4 !important;
}

ytmusic-search-box[opened] {
    border: 0 !important;
    box-shadow: 0px 0px 6px 1px rgba(0,0,0,0.26) !important;
}

ytmusic-search-box[opened] #suggestions {
    background: #fff !important;
}

ytmusic-search-box[opened] #suggestions ytmusic-search-suggestion {
    background: #fff !important;
}

ytmusic-search-box[opened] #suggestions ytmusic-search-suggestion:hover {
    background: #eeeeee !important;
}

ytmusic-search-box #input {
    caret-color: #5a5a5a !important;
    color: black;
}

ytmusic-search-box #input::placeholder {
    color: #404040 !important;
}

ytmusic-search-suggestions-section {
    border-top: 1px solid #ccc !important;
}

	/* Search Box Initiated */
.search-box.ytmusic-search-box {
    background: #FEFEFE !important;
}

tp-yt-iron-icon.ytmusic-search-suggestion {
    fill: #404040;
}

ytmusic-search-box[opened], ytmusic-search-box[has-query] {
    border: 1px solid #C0C0C0;
}

		/* Search Box - Below Content Margins */
.scroller.scroller-on-hover.style-scope.ytmusic-chip-cloud-renderer {
    margin-bottom: 30px;
}

			/* Search Tabs */
ytmusic-tabs.iron-selected .tab.ytmusic-tabs, .tab.selected.ytmusic-tabs {
    border-color: #262626;
}

ytmusic-tabs.stuck {
    background: #F4F4F4;
}

				/* Search Categories */
.yt-simple-endpoint.style-scope.ytmusic-chip-cloud-chip-renderer {
    background: #fff !important;
    border-color: #ccc !important;
    margin-left: -6px;
}

.text.style-scope.ytmusic-chip-cloud-chip-renderer {
    color: #000 !important;
}

.style-scope.ytmusic-chip-cloud-chip-renderer {
    color: #262626 !important;
    fill: #262626 !important;
}

					/* Search Results */
#contents.ytmusic-shelf-renderer > *.ytmusic-shelf-renderer:not(:last-child) {
    border-color: #ccc
}

						/* Search Results Category Stuck Header */
ytmusic-search-page.stuck ytmusic-header-renderer.ytmusic-search-page {
    background: #F4F4F4 !important;
}

/* 'New Recommendations' Button */
a.ytmusic-content-update-chip {
    background: #fff;
    border: 1px solid #ccc;
}

.style-scope a.ytmusic-content-update-chip {
    color: #262626 !important;
}

/* Notification Pop-Ups */
#toast.ytmusic-notification-text-renderer, tp-yt-paper-toast.yt-notification-action-renderer, tp-yt-paper-toast {
    border-radius: 5px;
    box-shadow: 7px 7px 10px rgba(0, 0, 0, .5);
    background: #fff;
}

/* Site Background */
body {
    background-color: #F4F4F4;
}

/* Page Headings */
.title.text.style-scope.ytmusic-carousel-shelf-basic-header-renderer {
    color: #262626;
}

/* Icons */
.style-scope {
    color: #262626 !important;
}

/* Non-Player Artwork Style */
#background.ytmusic-item-thumbnail-overlay-renderer, #content.ytmusic-item-thumbnail-overlay-renderer {
    border-radius: 10px;
}

.image-wrapper.ytmusic-two-row-item-renderer {
    border-radius: 10px;
    box-shadow: 1px 2px 8px 3px rgba(0,0,0,0.27);
}

.items-wrapper.style-scope.ytmusic-carousel {
    border-radius: 10px;
}

#items.ytmusic-carousel {
    padding: 15px;
}

.next-items-button.ytmusic-carousel, .previous-items-button.ytmusic-carousel {
    top: 100px;
}

.header.ytmusic-carousel-shelf-renderer {
    margin-bottom: -15px;
}

img.yt-img-shadow {
    border-radius: 10px;
}

#thumbnail.ytmusic-data-bound-header-renderer, .thumbnail.ytmusic-data-bound-header-renderer {
    border-radius: 10px;
    max-height: 264px;
}

/* Artwork/Album Carousel */
tp-yt-paper-icon-button.ytmusic-carousel-shelf-renderer {
    border: none;
}

ytmusic-carousel-shelf-basic-header-renderer[enable-bauhaus-style] .details.ytmusic-carousel-shelf-basic-header-renderer {
    justify-content: start;
}

/* Context Menus */
.style-scope.ytmusic-menu-popup-renderer {
    background: #fff;
    border-color: #DFDFDF !important;
}

.style-scope.ytmusic-multi-select-menu-renderer {
    background: #fff;
    border-color: #ccc !important;
}

.scroller.style-scope.ytmusic-multi-select-menu-renderer {
    background: #fff !important;
}

#items.ytmusic-menu-popup-renderer > .ytmusic-menu-popup-renderer:hover {
    background: #DFDFDF !important;
}

.icon.ytmusic-menu-navigation-item-renderer, .icon.ytmusic-menu-service-item-renderer, .icon.ytmusic-toggle-menu-service-item-renderer {
    fill: #303030;
}

#title.ytmusic-multi-select-menu-renderer {
    border-bottom: 1px solid #ccc;
}

#items.ytmusic-multi-select-menu-renderer > ytmusic-menu-item-divider-renderer.ytmusic-multi-select-menu-renderer {
    border-color: #ccc !important;
}

ytmusic-multi-select-menu-item-renderer:hover {
    background: #DFDFDF !important;
}

.icon.ytmusic-multi-select-menu-item-renderer {
    fill: #262626;
}

	/* Text */
.style-scope.text.ytmusic-menu-navigation-item-renderer {
    color: #262626 !important;
}

.style-scope.text.ytmusic-menu-service-item-renderer {
    color: #262626 !important;
}

.style-scope.text.ytmusic-toggle-menu-service-item-renderer {
    color: #262626 !important;
}

.style-scope.text.ytmusic-multi-select-menu-item-renderer {
    color: #262626 !important;
}

.style-scope.text.ytmusic-menu-title-renderer {
    color: #262626 !important;
}

ytmusic-menu-item-divider-renderer {
    border-bottom: 1px solid #383838 !important;
}

#items.ytmusic-multi-select-menu-renderer {
    background: #262626;
}

/* Charts Selection */
button.ytmusic-sort-filter-button-renderer {
    background: #fff;
    border-color: #ccc;
}

ytmusic-navigation-button-renderer[button-style=STYLE_ICON] button.ytmusic-navigation-button-renderer, button.ytmusic-navigation-button-renderer {
    background: #fff;
    border: 1px solid #ccc;
}

/* Generic Hover Color */
ytmusic-navigation-button-renderer:not([button-style=STYLE_OUTLINE_BORDER]):hover button.ytmusic-navigation-button-renderer, ytmusic-navigation-button-renderer:not([button-style=STYLE_OUTLINE_BORDER]) button.ytmusic-navigation-button-renderer:focus-within {
    background: #F0F0F0;
}

/* Library Tab */
ytmusic-item-section-renderer.stuck #header.ytmusic-item-section-renderer {
    background: #F4F4F4;
}

ytmusic-item-section-tab-renderer.iron-selected .tab.ytmusic-item-section-tab-renderer, .tab.selected.ytmusic-item-section-tab-renderer {
    border-color: #000;
}

ytmusic-dropdown-renderer[dropdown-style=default] {
    border-color: #ccc;
}

/* Player Bar */
ytmusic-player-bar, .buttons.ytmusic-tastebuilder-renderer {
    background: #fff;
}

.image.ytmusic-player-bar {
    border-radius: 3px;
}

#secondaryProgress.tp-yt-paper-progress {
    background: #aaa !important;
}

#progressContainer.tp-yt-paper-progress, .indeterminate.tp-yt-paper-progress::after {
    background: #ccc !important;
}

tp-yt-iron-icon.tp-yt-paper-icon-button, tp-yt-iron-icon {
    fill: #262626 !important;
}

ytmusic-player-bar #right-controls #volume-slider #primaryProgress {
    background: #262626 !important;
}

.volume-slider.ytmusic-player-bar, .expand-volume-slider.ytmusic-player-bar {
    --paper-slider-knob-color: #262626;
    --paper-slider-active-color: #262626;
}

ytmusic-player-bar #right-controls #volume-slider #sliderKnob .slider-knob-inner {
    background: #262626 !important;
    border: #262626 !important;
}

#hover-time-info.style-scope.ytmusic-player-bar {
    color: #fff !important;
}

/* Player Page */
.content.style-scope.ytmusic-player-page {
    background: #F4F4F4;
}

#selectionBar.tp-yt-paper-tabs {
    border-bottom: #262626;
    border-bottom: 2px solid;
    border-radius: 30px;
}

.av.ytmusic-player-page {
    display: none;
}

ytmusic-player-queue-item {
    border-bottom: 1px solid;
    border-color: #ccc;
}

/* Text Transform */
#tabsContent.tp-yt-paper-tabs, yt-button-renderer yt-formatted-string.yt-button-renderer, .tab-content.tp-yt-paper-tab, tp-yt-paper-button.ytmusic-playlist-form, .tab.ytmusic-item-section-tab-renderer, .tab.selected.ytmusic-item-section-tab-renderer, .more-button.ytmusic-shelf-renderer tp-yt-paper-button.ytmusic-shelf-renderer, tp-yt-paper-button.ytmusic-toggle-button-renderer yt-icon.ytmusic-toggle-button-renderer~yt-formatted-string.ytmusic-toggle-button-renderer, .style-scope.ytmusic-subscribe-button-renderer, .sign-in-link.ytmusic-nav-bar, .done-button.ytmusic-uploads-complete, .library-button.ytmusic-uploads-complete, .stop-button.ytmusic-upload-progression {
    text-transform: none;
}

	/* Song Artwork Mod */
yt-img-shadow[object-fit=COVER] img.yt-img-shadow {
    box-shadow: 3px 3px 15px rgba(0, 0, 0, .5) !important;
    border-radius: 10px;
}

#thumbnail.ytmusic-player, #error-screen.ytmusic-player, .player-wrapper.ytmusic-player {
    padding: 20px;
    border-color: none;
    border-radius: 10px;
}

.song-media-controls.ytmusic-player {
    padding: 20px;
    margin: 20px;
    border-color: none;
    border-radius: 10px;
}

.top-row-buttons.style-scope.ytmusic-player, .player-minimize-button.style-scope.ytmusic-player, .fullscreen-button.style-scope.ytmusic-player, .player-maximize-button.style-scope.ytmusic-player {
    box-shadow: none !important;
    border-radius: 10px;
}

.icon.style-scope.ytmusic-player {
    fill: #fff !important;
}

	/* Video Player Mod */
ytmusic-player-bar[player-fullscreened_], .style-scope.ytmusic-player-expanding-menu.ytmusic-player-bar {
    background: #fff !important;
    transition: opacity 300ms cubic-bezier(0.4, 0, 0.2, 0.8) !important;
}

ytmusic-app-layout[player-fullscreened_][show-fullscreen-controls_] .fullscreen-overlay.ytmusic-app-layout, ytmusic-app-layout[player-fullscreened_][show-fullscreen-controls_] > [slot=player-bar] {
    opacity: 0.8;
}

.html5-video-player.ytp-hide-controls.ytp-exp-bottom-control-flexbox.ytp-exp-ppp-update.ytp-hide-info-bar.ytp-iv-drawer-enabled.playing-mode, .html5-video-player.ytp-hide-controls.ytp-exp-bottom-control-flexbox.ytp-exp-ppp-update.ytp-hide-info-bar.ytp-iv-drawer-enabled.paused-mode, .html5-video-player.ytp-hide-controls.ytp-exp-bottom-control-flexbox.ytp-exp-ppp-update.ytp-hide-info-bar.ytp-large-width-mode.playing-mode.ytp-autohide, .html5-video-player.ytp-hide-controls.ytp-exp-bottom-control-flexbox.ytp-exp-ppp-update.ytp-hide-info-bar.ytp-large-width-mode.paused-mode, .html5-video-player.ytp-hide-controls.ytp-exp-bottom-control-flexbox.ytp-exp-ppp-update.ytp-hide-info-bar.playing-mode.ytp-small-mode, .html5-video-player.ytp-hide-controls.ytp-exp-bottom-control-flexbox.ytp-exp-ppp-update.ytp-hide-info-bar.paused-mode.ytp-small-mode, .html5-video-player.ytp-hide-controls.ytp-exp-bottom-control-flexbox.ytp-exp-ppp-update.ytp-hide-info-bar.ytp-large-width-mode.playing-mode, .html5-video-player.ytp-hide-controls.ytp-exp-bottom-control-flexbox.ytp-exp-ppp-update.ytp-hide-info-bar.ytp-large-width-mode.paused-mode, .html5-video-player.ytp-hide-controls.ytp-exp-bottom-control-flexbox.ytp-exp-ppp-update.ytp-hide-info-bar.ytp-large-width-mode.playing-mode.buffering-mode.unstarted-mode, .html5-video-player.ytp-hide-controls.ytp-exp-bottom-control-flexbox.ytp-exp-ppp-update.ytp-hide-info-bar.ytp-large-width-mode.paused-mode.buffering-mode.unstarted-mode, .html5-video-container {
    box-shadow: 3px 3px 15px rgba(0, 0, 0, .5) !important;
    border-color: none;
    border-radius: 10px;
    max-width: 94.5%;
    max-height: 94.5%;
}

#error-wrapper.ytmusic-player, #error-screen.ytmusic-player {
    box-shadow: 3px 3px 15px rgba(0, 0, 0, .5) !important;
    border-color: none;
    border-radius: 10px;
    max-width: 94.5%;
    max-height: 54.5%;
	margin-top: -10%;
    margin-bottom: -10.2%;
    margin-left: 20px;
    margin-right: 20px;
    padding-top: 49.9%;
}

ytmusic-player[player-ui-state_=FULLSCREEN] {
    width: 106.5vw;
    height: 106.8vh;
    margin-top: -22.6px !important;
    margin-left: -22.6px !important;
}

    /* Expanding Player Bar */
ytmusic-player-expanding-menu {
    background: #fff !important;
}

.volume-slider.ytmusic-player-bar, .expand-volume-slider.ytmusic-player-bar {
    background: #262626 !important;
    border-color: #262626 !important;
}

.volume-slider.ytmusic-player-bar, .expand-volume-slider.ytmusic-player-bar {
    background: #fff !important;
}

ytmusic-player-page[mini-player-enabled_][player-page-open_] #player.ytmusic-player-page {
    background: none !important;
    border-radius: 10px;
}

ytmusic-player-page[mini-player-enabled_]:not([player-page-open_]) #player.ytmusic-player-page {
    background: none !important;
    box-shadow: none !important;
    border-radius: 10px;
}

/* Scroll Bars */
ytmusic-app-layout[player-page-open_] #nav-bar-background.ytmusic-app-layout, ytmusic-app-layout.content-scrolled #nav-bar-background.ytmusic-app-layout, ytmusic-app-layout.content-scrolled #nav-bar-divider.ytmusic-app-layout {
    border-right: 12px solid;
    border-color: #F4F4F4;
}

ytmusic-app-layout[player-visible_] > [slot=player-bar], ytmusic-app-layout[player-visible_] #player-bar-background.ytmusic-app-layout {
    border-right: 12px solid;
    border-color: #fff;
}

player-bar-background {
    border-right: 12px solid;
    border-color: #fff;
}

html::-webkit-scrollbar-track {
    background: #F4F4F4 !important;
}

html::-webkit-scrollbar-thumb {
    background: #F4F4F4 !important;
}

html::-webkit-scrollbar-thumb:active {
    background: #F4F4F4 !important;
}

.content.ytmusic-player-page {
    border-right: 12px solid;
    border-color: #F4F4F4;
}

/* Nerd Stats */
.style-scope.ytmusic-nerd-stats.label.ytmusic-nerd-stats {
    color: #fff !important;
}

.style-scope.ytmusic-nerd-stats.value.ytmusic-nerd-stats {
    color: #fff !important;
}

ytmusic-player ytmusic-nerd-stats.ytmusic-player {
    margin: 20px !important;
    border-top-left-radius: 10px !important;
}

/* Share Dialog */
.style-scope.ytmusic-popup-container {
    background: #F4F4F4;
    border-radius: 10px;
}

button.yt-icon-button {
    background: #F4F4F4 !important;
}

#bar.yt-copy-link-renderer {
    background: #ccc !important;
}

.style-scope.yt-button-renderer.style-text {
    text-transform: none;
}

/* Other Dialog Boxes */
yt-confirm-dialog-renderer[dialog][dialog][dialog] {
    background: #F4F4F4;
}

ytmusic-mealbar-promo-renderer[dialog][dialog][dialog] {
    background: #fff;
    box-shadow: 1px 1px 8px 0px rgba(0,0,0,0.3);
}

/* Account Menu */
#contentWrapper.tp-yt-iron-dropdown > * {
    box-shadow: 3px 3px 15px rgba(0, 0, 0, .5) !important;
    background: #fff !important;
    border: 1px solid #DFDFDF;
}

#endpoint.yt-simple-endpoint.ytd-compact-link-renderer:hover {
    background: #DFDFDF;
}

ytd-active-account-header-renderer {
    background: #fff !important;
    border-color: #ccc !important;
}

#sections.ytd-multi-page-menu-renderer > *.ytd-multi-page-menu-renderer:not(:last-child) {
    border-color: #ccc !important;
}

	/* Switch Account Submenu */
.style-scope.ytd-multi-page-menu-renderer {
    background: #fff !important;
}

tp-yt-paper-icon-item.ytd-account-item-renderer:hover {
    background: #DFDFDF;
}

/* Artist Page/Immersive Header */
.title.ytmusic-immersive-header-renderer, .description.ytmusic-immersive-header-renderer, ytmusic-toggle-button-renderer yt-formatted-string.ytmusic-toggle-button-renderer, .style-scope.ytmusic-subscribe-button-renderer, .dropdown-trigger.style-scope.ytmusic-menu-renderer.style-scope.tp-yt-paper-icon-button {
    color: #fff !important;
}

.style-scope.paper-ripple.tp-yt-paper-button {
    color: #fff !important;
}

	/* Below Content Margins */
#contents.ytmusic-section-list-renderer > ytmusic-shelf-renderer.ytmusic-section-list-renderer:not(:last-child):not([is-empty_]).ytmusic-section-list-renderer {
    margin-top: -25px;
}

.image.ytmusic-immersive-header-renderer ~ .content-container-wrapper.ytmusic-immersive-header-renderer .content-container.ytmusic-immersive-header-renderer {
    padding: 0 0 30px;
}

/* Personal Artist Page */
.title.ytmusic-visual-header-renderer {
    color: #fff !important;
}

ytmusic-visual-header-renderer[has-banner-image] .content-container.ytmusic-visual-header-renderer {
    margin-bottom: 33px;
}

ytmusic-visual-header-renderer[has-banner-image]:not([no-transition]) .gradient-container.ytmusic-visual-header-renderer {
    padding-bottom: 1px;
}

/* Album Page */
ytmusic-data-bound-header-renderer {
    background: #F4F4F4 !important;
}

#thumbnail.ytmusic-data-bound-header-renderer, .thumbnail.ytmusic-data-bound-header-renderer {
    box-shadow: 3px 3px 15px rgba(0, 0, 0, .5) !important;
    margin-bottom: 6px;
}

.content-container.style-scope.ytmusic-data-bound-header-renderer {
    padding: 10px !important;
    margin-top: 40px !important;
}

ytmusic-list-item-renderer .ytmusic-play-button-renderer {
    fill: #262626 !important;
}

	/* Buttons */
#button.style-scope.yt-button-renderer.size-default, .sign-in-link.ytmusic-nav-bar {
    border: 1px solid #ccc;
    border-radius: 5px;
}

.play-button.style-scope.ytmusic-immersive-header-renderer.style-dark-on-white.size-default, .radio-button.ytmusic-immersive-header-renderer {
    border-radius: 5px;
}

.yt-simple-endpoint.style-scope.yt-button-renderer {
    border-radius: 5px !important;
}

.title.ytmusic-immersive-header-renderer, .description.ytmusic-immersive-header-renderer, ytmusic-toggle-button-renderer yt-formatted-string.ytmusic-toggle-button-renderer, .style-scope.ytmusic-subscribe-button-renderer, .dropdown-trigger.style-scope.ytmusic-menu-renderer.style-scope.tp-yt-paper-icon-button {
    border-radius: 5px;
}

#top-level-buttons.ytmusic-menu-renderer > .outline-button.ytmusic-menu-renderer, .edit-playlist-button.ytmusic-menu-renderer, ytmusic-toggle-button-renderer.ytmusic-menu-renderer, #bottom-button.ytmusic-shelf-renderer yt-button-renderer.style-white-with-border.ytmusic-shelf-renderer, #top-level-buttons.ytmusic-menu-renderer > .ytmusic-menu-renderer:not(:first-child), ytmusic-data-bound-top-level-menu-item.ytmusic-data-bound-menu-renderer:not(:first-child) {
    border-radius: 5px;
}

/* Un-Editable Playlist Page */
.style-scope.ytmusic-browse-response {
    background: #F4F4F4 !important;
}

.content-container.style-scope.ytmusic-detail-header-renderer {
    padding: 10px !important;
    margin-top: 40px !important;
}

.style-scope.ytmusic-toggle-button-renderer {
    color: #262626 !important;
}

/* Editable Playlist Page */
.style-scope.ytmusic-editable-playlist-detail-header-renderer {
    background: #F4F4F4 !important;
}

#thumbnail.ytmusic-detail-header-renderer, .thumbnail.ytmusic-detail-header-renderer {
    box-shadow: 3px 3px 15px rgba(0, 0, 0, .5) !important;
    margin-bottom: 6px;
    max-height: 264px;
}

.style-scope.ytmusic-editable-playlist-detail-header-renderer {
    padding: 10px !important;
    margin-top: 40px !important;
}

#contents.ytmusic-playlist-shelf-renderer > *.ytmusic-playlist-shelf-renderer:not(:last-child) {
    border-color: #ccc !important;
}

ytmusic-responsive-list-item-renderer[is-checked] {
    background-color: #ccc;
}

ytmusic-dialog[dialog-type=multiSelectMenuBar] {
    border: none;
    background-color: #F4F4F4;
}

yt-icon, .yt-icon-container.yt-icon {
    fill: #262626;
}

/* Edit Playlist Metadata */
ytmusic-dialog {
    border-color: transparent;
}

#content.ytmusic-dialog > *.ytmusic-dialog {
    background: #F4F4F4 !important;
    border-radius: 7px;
}

ytmusic-playlist-form[tabbed-ui-enabled] iron-pages.ytmusic-playlist-form .content.ytmusic-playlist-form {
    border-color: #ccc !important;
}

.unfocused-line.tp-yt-paper-input-container {
    border-color: #ccc !important;
}

.dropdown-content.ytmusic-dropdown-renderer, ytmusic-dropdown-item-renderer {
    background: #fff !important;
    box-shadow: none !important;
}

tp-yt-iron-dropdown.tp-yt-paper-menu-button {
    border-radius: 10px;
}

#contentWrapper.tp-yt-iron-dropdown > * {
    border-radius: 10px;
}

.style-scope.ytmusic-dropdown-renderer.iron-selected {
    background: #ccc !important;
}

ytmusic-dropdown-item-renderer:hover {
    background: #ADADAD !important;
}

tp-yt-paper-listbox {
    background: #fff;
}

.toggle-bar.style-scope.tp-yt-paper-toggle-button {
    background: #ADADAD !important;
}

tp-yt-paper-toggle-button[checked]:not([disabled]) .toggle-bar.tp-yt-paper-toggle-button {
    background: #3EA6FF !important;
}

.submit-button.ytmusic-playlist-form {
    background: #262626 !important;
    color: #fff !important;
    border-radius: 5px;
}

/* Play Button (On Artwork) */
.icon.ytmusic-play-button-renderer {
    fill: #F0F0F0
}

/* Settings Page */

.top-bar.ytmusic-settings-page, ytmusic-setting-category-collection-renderer.ytmusic-settings-page, .items.ytmusic-setting-category-collection-renderer > *.ytmusic-setting-category-collection-renderer {
    border-color: #ccc;
}

.category-menu.style-scope.ytmusic-settings-page {
    background: #F4F4F4 !important;
    border-radius: 7px;
}

.category-menu-item.ytmusic-settings-page .title.ytmusic-settings-page {
    margin-left: 6px;
}

.category-menu-item.iron-selected.ytmusic-settings-page, .category-menu-item.ytmusic-settings-page:focus:not(.iron-selected) {
    background: #ccc;
}

.category-menu-item.ytmusic-settings-page:hover {
    background: #DADADA;
}

.dropdown-content.ytmusic-setting-single-option-menu-renderer {
    background: #fff;
}

tp-yt-paper-toggle-button[checked]:not([disabled]) .toggle-button.tp-yt-paper-toggle-button {
    background: #3387CE;
}

/* Upgrade Page */
ytmusic-item-section-renderer:not(.memberships-and-purchases) #items.ytmusic-item-section-renderer > *.ytmusic-item-section-renderer {
    background: #F4F4F4 !important;
}

#logo_wrapper.yt-unlimited-page-header-renderer {
    background: #000;
    border-radius: 10px;
    padding: 30px;
}

#container.yt-music-pass-feature-info-renderer {
    margin-top: 30px;
}

.style-light.yt-music-pass-feature-info-renderer #header.yt-music-pass-feature-info-renderer, .style-light.yt-music-pass-feature-info-renderer #description.yt-music-pass-feature-info-renderer {
    color: #fff !important;
}
}
  `;


  return (
    <style id="Custom">
      {customCSS4}
    </style>
  )
}

export default Custom;


