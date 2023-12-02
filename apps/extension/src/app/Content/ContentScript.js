import MountWhenPlayerActive from "./MountWhenPlayerActive";
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
import IconColor from "../Extension/IconColor/IconColor";
import PlayPauseChangeObserver from "../Player/PlayPauseChangeObserver";

function ContentScript({ root }) {
  return (
    <div id="ThemeSong-ContentScript">
      <Unmounter root={root} />
      <DataStoreSync />
      <Theme />
      <LogoContainer />
      <Palette />
      <Utilities />
      <Piece />
      <SongObserver />
      <MountWhenPlayerActive>
        <SongInfoDisplayFeature />
        <VisualizerCS />
        <IconColor />
        <PanelContainer />
        <PlayerUiStateObserver />
        <PlayPauseChangeObserver />
      </MountWhenPlayerActive>
    </div>
  );
}

export default ContentScript;
