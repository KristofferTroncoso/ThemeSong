import React from 'react';
import { useSelector } from 'react-redux';

import Themes from '../../redux/themes/themes/Themes';
import SongDetailsObserver from '../../redux/songDetails/SongDetailsObserver';
import PanelContainer from '../ThemeSongPanel';
import PlayPauseChangeObserver from '../../redux/playerState/PlayPauseChangeObserver';
import SongInfoDisplayFeature from '../songDetails/SongInfoDisplay/SongInfoDisplayFeature';
import VisualizerFeature from '../../redux/visualizers/visualizers/VisualizerFeature';
import PaletteFeature from '../../redux/palette/PaletteFeature';
import Test from '../Test/Test';

function ContentScript() {
  const removeDislikeButton = useSelector(state => state.miscSettings.removeDislikeButton);

  return (
    <div id="ThemeSong-ContentScript">
      <Themes />
      <SongDetailsObserver />
      <PanelContainer />
      <PlayPauseChangeObserver />
      <SongInfoDisplayFeature />
      <VisualizerFeature />
      <PaletteFeature />
      {removeDislikeButton ? <Test /> : null}
    </div>
  )
}

export default ContentScript;