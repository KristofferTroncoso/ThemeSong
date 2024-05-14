import MountWhenPlayerActive from "./MountWhenPlayerActive";
import DataStoreSync from "../Extension/DataStoreSync";
import Theme from "../Theme/Theme";
import MediaObserver from "../Media/MediaObserver";
import PanelContainer from "../QuickAccessPanel";
import PlayerUiStateObserver from "../Player/PlayerUiStateObserver";
import SongInfoDisplayFeature from "../Song/SongInfoDisplay/SongInfoDisplayFeature";
import VisualizerCS from "../Visualizer/VisualizerCS";
import { useEffect } from "react";
import { useStore } from "/src/app/store";

import Palette from "../Palette/Palette";
import Utilities from "../Utilities/Utilities";
import LogoContainer from "../YtmLogo";
import Unmounter from "../Extension/Unmounter";
import Piece from "../Piece/Piece";
import IconColor from "../Extension/IconColor/IconColor";
import PlayPauseEventListener from "../Player/PlayPauseEventListener";
// import DisableContextMenu from "./DisableContextMenu";
// import WelcomeMessage from "../Extension/WelcomeMessage";

function ContentScript({ root }) {
  const changeMedia = useStore((state) => state.media.changeMedia);

  useEffect(() => {
    function detectOS() {
      const userAgent = window.navigator.userAgent;
      if (userAgent.indexOf("Windows") !== -1) {
        return "windows";
      } else if (userAgent.indexOf("Mac") !== -1) {
        return "mac";
      } else {
        return "unknown";
      }
    }
    const os = detectOS();
    document.documentElement.setAttribute("os", os);

    chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
      if (message.message === "like") {
        setTimeout(() => {
          changeMedia();
        }, 200);
        document.querySelector(".middle-controls-buttons #button-shape-like button[aria-pressed='false']").click();
        // } else if (message.message === "start-radio") {
        //   document.querySelector(".middle-controls-buttons [aria-label='Action menu']").click();
        //   setTimeout(() => {
        //     document.querySelector("#navigation-endpoint").click();
        //   }, 200);
      } else if (message.message === "playpause") {
        document.getElementById("play-pause-button").click();
      } else if (message.message === "next-button") {
        document.getElementsByClassName("next-button")[0].click();
      } else if (message.message === "previous-button") {
        document.getElementsByClassName("previous-button")[0].click();
      } else if (message.message === "rewind") {
        document.querySelector("video").currentTime -= 10;
      } else if (message.message === "fast-forward") {
        document.querySelector("video").currentTime += 10;
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
      {/* <DisableContextMenu /> */}
      {/* <WelcomeMessage /> */}
      <MountWhenPlayerActive>
        <SongInfoDisplayFeature />
        <VisualizerCS />
        <IconColor />
        <PanelContainer />
        <PlayerUiStateObserver />
        <MediaObserver />
        <PlayPauseEventListener />
      </MountWhenPlayerActive>
    </div>
  );
}

export default ContentScript;
