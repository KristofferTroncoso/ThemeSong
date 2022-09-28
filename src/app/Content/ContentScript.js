import React from 'react';

import Themes from '../Theme/Themes';
import SongDetailsObserver from '../SongDetails/SongDetailsObserver';
import PanelContainer from '../QuickAccessPanel';
import PlayPauseChangeObserver from '../PlayerState/PlayPauseChangeObserver';
import SongInfoDisplayFeature from '../SongDetails/SongInfoDisplay/SongInfoDisplayFeature';
import VisualizerFeature from '../Visualizer/visualizers/VisualizerFeature';
import Palette from '../Palette/Palette';
import UiOptions from '../UiOptions/UiOptions';

function ContentScript() {

  return (
    <div id="ThemeSong-ContentScript">
      <Themes />
      <SongDetailsObserver />
      <PanelContainer />
      <PlayPauseChangeObserver />
      <SongInfoDisplayFeature />
      <VisualizerFeature />
      <Palette />
      <UiOptions />
    </div>
  )
}

export default ContentScript;