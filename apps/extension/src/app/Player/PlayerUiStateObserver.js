import { useRef, useEffect } from "react";
import { useStore } from "/src/app/store";

function PlayerUiStateObserver() {
  // this is necessary because requestAnimationFrame() doesn't account for play page visibility in regards to ytm.
  // as in if the play page isnt showing, the cpu and gpu is still running.

  let playerUiStateObserver = useRef();

  const changePlayerUiState = useStore((state) => state.player.changePlayerUiState);

  useEffect(() => {
    const ytmusicplayernode = document.querySelector("ytmusic-player");

    //initial get
    changePlayerUiState(ytmusicplayernode.getAttribute("player-ui-state_"));

    playerUiStateObserver.current = new MutationObserver(handlePlayerUiStateChange);

    playerUiStateObserver.current.observe(ytmusicplayernode, {
      attributeFilter: ["player-ui-state_"],
      attributeOldValue: true,
    });

    function handlePlayerUiStateChange(mutationRecord) {
      let attributesNamedNodeMap = mutationRecord[0].target.attributes;
      let playerUiState = attributesNamedNodeMap.getNamedItem("player-ui-state_").value;

      // INACTIVE
      // PLAYER_PAGE_OPEN
      // MINIPLAYER
      // FULLSCREEN
      // PLAYER_BAR_ONLY
      changePlayerUiState(playerUiState);
    }

    return function () {
      console.log("removing playerUiStateObserver");
      playerUiStateObserver.current.disconnect();
    };
  }, []);

  return <div id="PlayerUiStateObserver"></div>;
}

export default PlayerUiStateObserver;
