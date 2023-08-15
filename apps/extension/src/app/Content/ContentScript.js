import DataStoreSync from "../DataStoreSync";
import Theme from "../Theme/Theme";
import SongObserver from "../Song/SongObserver";
import PanelContainer from "../QuickAccessPanel";
import PlayerUiStateObserver from "../Player/PlayerUiStateObserver";
import SongInfoDisplayFeature from "../Song/SongInfoDisplay/SongInfoDisplayFeature";
import VisualizerCS from "../Visualizer/VisualizerCS";
import Palette from "../Palette/Palette";
// import Snippets from "../Snippets/Snippets";
import Utilities from "../Utilities/Utilities";
import LogoContainer from "../YtmLogo";
import Unmounter from "../Extension/Unmounter";
import Pieces from "../Pieces/Pieces";

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
      {/* <Snippets /> */}
      <Utilities />
      <Pieces />
    </div>
  );
}

export default ContentScript;
