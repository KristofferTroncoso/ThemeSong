import React from 'react';
import { useStore } from '../store';

let playerUiStateObserver;
let playerUiState = "PLAYER_PAGE_OPEN";

function PlayerUiStateObserver() {
  // this is necessary because requestAnimationFrame() doesn't account for play page visibility in regards to ytm.
  // as in if the play page isnt showing, the cpu and gpu is still running.

  const changePlayerUiState = useStore(state => state.player.changePlayerUiState);

  React.useEffect(() => {
    let ytmusicplayernode = document.querySelector("ytmusic-player");

    playerUiStateObserver = new MutationObserver(handlePlayerUiStateChange);
  
    playerUiStateObserver.observe(ytmusicplayernode, {
        attributeFilter: ["player-ui-state_"],
        attributeOldValue: true
      },
    );
    
    function handlePlayerUiStateChange(mutationRecord) {
      let attributesNamedNodeMap = mutationRecord[0].target.attributes;
      playerUiState = attributesNamedNodeMap.getNamedItem("player-ui-state_").value;
  
      // PLAYER_PAGE_OPEN
      // MINIPLAYER
      // FULLSCREEN
      // PLAYER_BAR_ONLY

      changePlayerUiState(playerUiState);
    }

    return function() {
      console.log('removing playerUiStateObserver')
      playerUiStateObserver.disconnect();
    }
  }, [])


  return (
    <div id="PlayerUiStateObserver"></div>
  )
}

export default PlayerUiStateObserver;