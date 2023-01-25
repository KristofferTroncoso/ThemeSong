import CloudSyncStorageSync from '../CloudStorageSync';
import Themes from '../Theme/Themes';
import SongObserver from '../Song/SongObserver';
import PanelContainer from '../QuickAccessPanel';
import PlayerUiStateObserver from '../Player/PlayerUiStateObserver';
import SongInfoDisplayFeature from '../Song/SongInfoDisplay/SongInfoDisplayFeature';
import VisualizerFeature from '../Visualizer/visualizers/VisualizerFeature';
import Palette from '../Palette/Palette';
// import UiOptions from '../UiOptions/UiOptions';
// import Snippets from '../Snippets/Snippets';
import Utilities from '../Utilities/Utilities';

function ContentScript() {

  return (
    <div id="ThemeSong-ContentScript">
      <CloudSyncStorageSync />
      <Themes />
      <SongObserver />
      <PanelContainer />
      <PlayerUiStateObserver />
      <SongInfoDisplayFeature />
      <VisualizerFeature />
      <Palette />
      {/* <UiOptions /> */}
      {/* <Snippets /> */}
      <Utilities />
    </div>
  )
}

export default ContentScript;