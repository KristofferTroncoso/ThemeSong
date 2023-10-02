import { useEffect, useRef, useState } from "react";
import { useStore } from "/src/app/store";

// Some components can't mount until the player is active since a dom node doesn't exist yet
// This component mounts its children when the player is active
function MountWhenPlayerActive({ children }) {
  const [playerActive, setPlayerActive] = useState(false);

  let playerUiStateObserver = useRef();

  const changePlayerUiState = useStore((state) => state.player.changePlayerUiState);

  useEffect(() => {
    const ytmusicplayernode = document.querySelector("ytmusic-player");

    playerUiStateObserver.current = new MutationObserver(handlePlayerUiStateChange);

    playerUiStateObserver.current.observe(ytmusicplayernode, {
      attributeFilter: ["player-ui-state"],
      attributeOldValue: true,
    });

    //initial get
    let ui = ytmusicplayernode.getAttribute("player-ui-state");
    if (ui !== "INACTIVE") {
      setPlayerActive(true);
      playerUiStateObserver.current.disconnect();
    }

    function handlePlayerUiStateChange(mutationRecord) {
      let attributesNamedNodeMap = mutationRecord[0].target.attributes;
      let playerUiState = attributesNamedNodeMap.getNamedItem("player-ui-state").value;

      if (playerUiState !== "INACTIVE") {
        setPlayerActive(true);
        playerUiStateObserver.current.disconnect();
      }
    }

    return function () {
      console.log("removing playerUiStateObserver");
      playerUiStateObserver.current.disconnect();
    };
  }, [changePlayerUiState]);

  return <div id="MountWhenPlayerActive">{playerActive && children}</div>;
}

export default MountWhenPlayerActive;
