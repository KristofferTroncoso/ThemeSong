import MountWhenPlayerActive from "./MountWhenPlayerActive";
import DataStoreSync from "../Extension/DataStoreSync";
import Theme from "../Theme/Theme";
import SongObserver from "../Song/SongObserver";
import PanelContainer from "../QuickAccessPanel";
import PlayerUiStateObserver from "../Player/PlayerUiStateObserver";
import SongInfoDisplayFeature from "../Song/SongInfoDisplay/SongInfoDisplayFeature";
import VisualizerCS from "../Visualizer/VisualizerCS";
import { useEffect } from "react";

import Palette from "../Palette/Palette";
import Utilities from "../Utilities/Utilities";
import LogoContainer from "../YtmLogo";
import Unmounter from "../Extension/Unmounter";
import Piece from "../Piece/Piece";
import IconColor from "../Extension/IconColor/IconColor";
// import PlayPauseChangeObserver from "../Player/PlayPauseChangeObserver";

function ContentScript({ root }) {
  useEffect(() => {
    chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
      if (message.message === "playpause") {
        document.getElementById("play-pause-button").click();
      } else if (message.message === "next-button") {
        document.getElementsByClassName("next-button")[0].click();
      } else if (message.message === "previous-button") {
        document.getElementsByClassName("previous-button")[0].click();
      } else {
        document.getElementById("play-pause-button").click();
      }
    });
  }, []);

  return (
    <div id="ThemeSong-ContentScript">
      <Unmounter root={root} />
      <DataStoreSync />
      <Theme />
      <LogoContainer />
      <Palette />
      <Utilities />
      <Piece />
      <MountWhenPlayerActive>
        <SongInfoDisplayFeature />
        <VisualizerCS />
        <IconColor />
        <PanelContainer />
        <PlayerUiStateObserver />
        <SongObserver />
        {/* <PlayPauseChangeObserver /> */}
      </MountWhenPlayerActive>
    </div>
  );
}

export default ContentScript;
