import React from 'react';

import CloudSyncStorageSync from '../CloudStorageSync';
import Themes from '../Theme/Themes';
import SongObserver from '../Song/SongObserver';
import PanelContainer from '../QuickAccessPanel';
import PlayPauseChangeObserver from '../Player/PlayPauseChangeObserver';
import SongInfoDisplayFeature from '../Song/SongInfoDisplay/SongInfoDisplayFeature';
import VisualizerFeature from '../Visualizer/visualizers/VisualizerFeature';
import Palette from '../Palette/Palette';
import UiOptions from '../UiOptions/UiOptions';

function ContentScript() {

  return (
    <div id="ThemeSong-ContentScript">
      <CloudSyncStorageSync />
      <Themes />
      <SongObserver />
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