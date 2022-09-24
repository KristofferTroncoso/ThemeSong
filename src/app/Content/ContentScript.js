import React from 'react';
import { useSelector } from 'react-redux';

import Themes from '../Theme/Themes';
import SongDetailsObserver from '../SongDetails/SongDetailsObserver';
import PanelContainer from '../QuickAccessPanel';
import PlayPauseChangeObserver from '../PlayerState/PlayPauseChangeObserver';
import SongInfoDisplayFeature from '../SongDetails/SongInfoDisplay/SongInfoDisplayFeature';
import VisualizerFeature from '../Visualizer/visualizers/VisualizerFeature';
import Palette from '../Palette/Palette';
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
      <Palette />
      {removeDislikeButton ? <Test /> : null}
    </div>
  )
}

export default ContentScript;