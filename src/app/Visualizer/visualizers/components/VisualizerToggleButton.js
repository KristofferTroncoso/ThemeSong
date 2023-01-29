import { css } from "@emotion/react";

import { useStore } from "../../../store";

import WavesIcon from "@mui/icons-material/Waves";
import BubbleChart from "@mui/icons-material/BubbleChart";
import LeaderboardIcon from "@mui/icons-material/Leaderboard";

function VisualizerToggleButton() {
  const isVisualizerOn = useStore((state) => state.visualizer.isVisualizerOn);
  const activeVisualizer = useStore(
    (state) => state.visualizer.activeVisualizer
  );
  const toggleIsVisualizerOn = useStore(
    (state) => state.visualizer.toggleIsVisualizerOn
  );

  const handleVisualizerButtonClick = (e) => {
    e.stopPropagation();
    toggleIsVisualizerOn();
  };

  const returnActiveVisualizer = () => {
    switch (activeVisualizer) {
      case "visualizerId:0":
        return (
          <WavesIcon
            css={css`
              font-size: 22px;
            `}
          />
        );
      case "visualizerId:1":
        return (
          <LeaderboardIcon
            css={css`
              font-size: 22px;
            `}
          />
        );
      case "visualizerId:2":
        return (
          <BubbleChart
            css={css`
              font-size: 27px;
            `}
          />
        );
      default:
        return <h1>Unknown Visualizer</h1>;
    }
  };

  return (
    <button
      id="ts-visualizer-toggle"
      onClick={handleVisualizerButtonClick}
      title={isVisualizerOn ? "Turn OFF Visualizer" : "Turn ON Visualizer"}
      css={css`
        border: 0;
        color: ${isVisualizerOn ? "#ee0606" : "inherit"};
        background-color: transparent;
        height: 100%;
        width: 100%;
        display: flex;
        padding: 0 10px;
        justify-content: center;
        align-items: center;
        align-content: center;
        cursor: pointer;
      `}
    >
      {returnActiveVisualizer()}
    </button>
  );
}

export default VisualizerToggleButton;
