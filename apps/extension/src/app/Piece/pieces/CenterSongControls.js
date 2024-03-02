function CenterSongControls() {
  const style = /*css*/ `
    ytmusic-player-bar {
      grid-template-columns: 4fr 3fr 4fr;
    }

    .menu.ytmusic-player-bar {
      margin: 0 !important;
    }

    .left-controls {
      grid-area: middle !important;
      justify-content: center !important;
    }

    .middle-controls {
      grid-area: start !important;
      width: 100% !important;
      margin-left: 15px !important;
      justify-content: start !important;
    }

    .time-info.ytmusic-player-bar {
      display: none;
    }

    .thumbnail-image-wrapper.ytmusic-player-bar {
      height: 44px;
    }

    .image.ytmusic-player-bar {
      height: 44px;
    }

    .like {
      margin-right: 6px;
    }

    .content-info-wrapper.ytmusic-player-bar {
      margin: 0 4px 0 10px;
    }
  `;

  return <style id="CenterSongControls">{style}</style>;
}

export default CenterSongControls;
