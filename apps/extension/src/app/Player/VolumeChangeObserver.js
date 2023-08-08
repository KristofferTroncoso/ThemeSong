import { useState, useEffect } from "react";
import { css } from "@emotion/react";
import VolumeOffIcon from "@mui/icons-material/VolumeOff";

function VolumeChangeObserver() {
  const [currentVolume, changeCurrentVolume] = useState();

  useEffect(() => {
    let volumeSliderNode = document.getElementById("volume-slider");

    changeCurrentVolume(volumeSliderNode.getAttribute("value"));

    let volumeChangeObserver = new MutationObserver(handlePlayPauseChange);

    volumeChangeObserver.observe(volumeSliderNode, {
      attributeFilter: ["value"],
      attributeOldValue: true,
    });

    function handlePlayPauseChange(mutationRecord) {
      console.log("handleVolumeChangeObserver");
      let attributesNamedNodeMap = mutationRecord[0].target.attributes;
      changeCurrentVolume(attributesNamedNodeMap.getNamedItem("value").value);
    }

    return function () {
      console.log("removing volumeChangeObserver");
      volumeChangeObserver.disconnect();
    };
  }, []);

  return (
    <div id="VolumeChangeObserver">
      {currentVolume === "0" && (
        <VolumeOffIcon
          css={css`
            margin: 10px;
            padding: 4px;
            background-color: rgb(0 0 0 / 0.5);
            color: rgb(255 255 255 / 0.8);
            border-radius: 10px;
            position: absolute;
            z-index: 1000;
            top: 0;
            left: 15%;
            height: 10%;
            width: 10%;
          `}
        />
      )}
    </div>
  );
}

export default VolumeChangeObserver;
