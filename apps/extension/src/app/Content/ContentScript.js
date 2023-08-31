import DataStoreSync from "../Extension/DataStoreSync";
import Theme from "../Theme/Theme";
import SongObserver from "../Song/SongObserver";
import PanelContainer from "../QuickAccessPanel";
import PlayerUiStateObserver from "../Player/PlayerUiStateObserver";
import SongInfoDisplayFeature from "../Song/SongInfoDisplay/SongInfoDisplayFeature";
import VisualizerCS from "../Visualizer/VisualizerCS";
import Palette from "../Palette/Palette";
import Utilities from "../Utilities/Utilities";
import LogoContainer from "../YtmLogo";
import Unmounter from "../Extension/Unmounter";
import Piece from "../Piece/Piece";

function ContentScript({ root }) {
  return (
    <div id="ThemeSong-ContentScript">
      <Unmounter root={root} />
      <DataStoreSync />
      <Theme />
      <SongObserver />
      <LogoContainer />
      <PanelContainer />
      <PlayerUiStateObserver />
      <SongInfoDisplayFeature />
      <VisualizerCS />
      <Palette />
      <Utilities />
      <Piece />
    </div>
  );
}

export default ContentScript;
