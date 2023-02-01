import DataStoreSync from "../DataStoreSync";
import Theme from "../Theme/Theme";
import SongObserver from "../Song/SongObserver";
import PanelContainer from "../QuickAccessPanel";
import PlayerUiStateObserver from "../Player/PlayerUiStateObserver";
import SongInfoDisplayFeature from "../Song/SongInfoDisplay/SongInfoDisplayFeature";
import VisualizerFeature from "../Visualizer/visualizers/VisualizerFeature";
import Palette from "../Palette/Palette";
// import UiOptions from '../UiOptions/UiOptions';
// import Snippets from '../Snippets/Snippets';
import Utilities from "../Utilities/Utilities";
import LogoContainer from "../YtmLogo";

function ContentScript() {
  return (
    <div id="ThemeSong-ContentScript">
      <DataStoreSync />
      <Theme />
      <SongObserver />
      <LogoContainer />
      <PanelContainer />
      <PlayerUiStateObserver />
      <SongInfoDisplayFeature />
      <VisualizerFeature />
      <Palette />
      {/* <UiOptions /> */}
      {/* <Snippets /> */}
      <Utilities />
    </div>
  );
}

export default ContentScript;
