import { useEffect, useRef } from "react";

function DisableContextMenu() {
  let playerUiStateObserver = useRef();

  useEffect(() => {
    const ytmusicplayernode = document.querySelector("ytmusic-player");

    playerUiStateObserver.current = new MutationObserver(handlePlayerUiStateChange);

    playerUiStateObserver.current.observe(ytmusicplayernode, {
      attributeFilter: ["player-ui-state"],
      attributeOldValue: true,
    });

    //initial get
    let ui = ytmusicplayernode.getAttribute("player-ui-state");
    if (ui !== "PLAYER_PAGE_OPEN") {
      if (document.getElementById("contents")) {
        document.querySelectorAll("#contents").forEach((node) => {
          node.addEventListener("contextmenu", (event) => {
            event.preventDefault();
          });
        });
      }
      if (document.getElementById("queue")) {
        document.getElementById("queue").addEventListener("contextmenu", (event) => {
          event.preventDefault();
        });
      }
      console.log("disconnecting disablecontextmenu-playeruistateobserver");
      playerUiStateObserver.current.disconnect();
    } else {
      if (document.getElementById("queue")) {
        document.getElementById("queue").addEventListener("contextmenu", (event) => {
          event.preventDefault();
        });
      }
    }

    function handlePlayerUiStateChange(mutationRecord) {
      let attributesNamedNodeMap = mutationRecord[0].target.attributes;
      let playerUiState = attributesNamedNodeMap.getNamedItem("player-ui-state").value;

      if (playerUiState !== "PLAYER_PAGE_OPEN") {
        if (document.getElementById("contents")) {
          document.querySelectorAll("#contents").forEach((node) => {
            node.addEventListener("contextmenu", (event) => {
              event.preventDefault();
            });
          });
        }
        if (document.getElementById("queue")) {
          document.getElementById("queue").addEventListener("contextmenu", (event) => {
            event.preventDefault();
          });
        }
        console.log("disconnecting disablecontextmenu-playeruistateobserver");
        playerUiStateObserver.current.disconnect();
      }
    }

    return function () {
      console.log("removing disablecontextmenu-playeruistateobserver");
      playerUiStateObserver.current.disconnect();
    };
  }, []);

  return null;
}

export default DisableContextMenu;
