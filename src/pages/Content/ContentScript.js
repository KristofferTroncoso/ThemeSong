import React from 'react';
import Test from './Test/Test';
import Themes from '../../redux/themes/themes/Themes';
import { useSelector } from 'react-redux';

import SongDetailsObserver from '../../redux/songDetails/SongDetailsObserver';
import PanelContainer from './modules/ThemeSongPanel';
import PlayPauseChangeObserver from '../../redux/playerState/PlayPauseChangeObserver';
import SongInfoDisplayFeature from './modules/SongInfoDisplay/SongInfoDisplayFeature';
import VisualizerFeature from '../../redux/visualizers/visualizers/VisualizerFeature';
import PaletteFeature from '../../redux/palette/PaletteFeature';

function ContentScript() {
  const removeDislikeButton = useSelector(state => state.miscSettings.removeDislikeButton);

  return (
    <div id="ThemeSong-ContentScript">
      {removeDislikeButton ? <Test /> : null}
      <Themes />
      <SongDetailsObserver />
      <PanelContainer />
      <PlayPauseChangeObserver />
      <SongInfoDisplayFeature />
      <VisualizerFeature />
      <PaletteFeature />
    </div>
  )
}

export default ContentScript;