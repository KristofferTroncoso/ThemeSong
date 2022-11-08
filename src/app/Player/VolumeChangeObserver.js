/** @jsx jsx */
import React from 'react';
import { jsx, css } from '@emotion/react';

function VolumeChangeObserver() {
  const [currentVolume, changeCurrentVolume] = React.useState();

  React.useEffect(() => {
    let volumeSliderNode = document.getElementById("volume-slider");

    changeCurrentVolume(volumeSliderNode.getAttribute('value'));

    let volumeChangeObserver = new MutationObserver(handlePlayPauseChange);
  
    volumeChangeObserver.observe(volumeSliderNode, {
      attributeFilter: ["value"],
      attributeOldValue: true
    });
    
    function handlePlayPauseChange(mutationRecord) {
      console.log('handleVolumeChangeObserver')
      let attributesNamedNodeMap = mutationRecord[0].target.attributes;
      changeCurrentVolume(attributesNamedNodeMap.getNamedItem("value").value);
    }

    return function() {
      console.log('removing volumeChangeObserver')
      volumeChangeObserver.disconnect();
    }
  }, [])

  return (
    <div id="VolumeChangeObserver">
      {(currentVolume === '0') && (
        <h1
          css={css`
            position: absolute;
            z-index: 1000;
            top: 10%;
            left: 0;
            background-color: rgba(0,0,0,0.7);
            border: 4px solid #9e0000;
            color: #fff;
            margin: 20px;
            border-radius: 10px;
            font-size: 30px;
            padding: 20px;
          `}
        >
          MUTED. Turn up volume for visualizer to work.
        </h1>
      )}
    </div>
  )
}

export default VolumeChangeObserver;
