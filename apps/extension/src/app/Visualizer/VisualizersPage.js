import { css } from "@emotion/react";
import VisualizerButton from "./components/VisualizerButton";
import WavySettings from "./visualizers/Wavy/WavySettings";
import BarsSettings from "./visualizers/Bars/BarsSettings";
import CirclesSettings from "./visualizers/Circles/CirclesSettings";
import ExperimentalSettings from "./visualizers/Experimental/ExperimentalSettings";

import { useStore } from "/src/app/store";

function VisualizersPage() {
  const activeVisualizer = useStore((state) => state.visualizer.prefs.activeVisualizer);
  const visualizers = useStore((state) => state.visualizer.visualizers);
  const setActiveVisualizer = useStore((state) => state.visualizer.setActiveVisualizer);
  const activeVisualizerDetails = useStore((state) =>
    state.visualizer.visualizers.find((visualizer) => visualizer.id === activeVisualizer)
  );

  const handleVisualizerClick = (e, id) => {
    setActiveVisualizer(id);
  };

  let activeVisualizerSettings = () => {
    switch (activeVisualizer) {
      case "6aa34dd4-6775-46c1-8dbb-7ac2931ff80d":
        return <WavySettings />;
      case "51dc50c8-eb06-4086-ad9c-a89758f63db6":
        return <BarsSettings />;
      case "685d0ec7-5c52-4e48-a43d-11184a39f3da":
        return <CirclesSettings />;
      case "8315ac5f-0de5-4ef1-ac5d-a4bc6d7b21ae":
        return <ExperimentalSettings />;
      default:
        return <></>;
    }
  };

  return (
    <div>
      <h2
        css={css`
          font-size: 12px;
          font-weight: 400;
          padding: 6px 6px 3px;
          text-align: left;
        `}
      >
        <span
          css={css`
            padding: 3px 10px;
            background-color: #0b3e9c;
            border-radius: 3px;
            border: 1px solid #135eeb;
            color: white;
          `}
        >
          To turn on visualizer: Hover album art and click on visualizer button
        </span>
      </h2>
      <div
        className="ActiveVisualizerSettingsContainer"
        css={{
          background: "#111111",
          borderRadius: "5px",
          border: "2px solid #999",
          margin: "6px 5px 5px 5px",
          minHeight: "40px",
          padding: "5px 10px 10px",
        }}
      >
        <h2
          css={css`
            color: #ff3232;
            font-size: 16px;
            margin-bottom: 4px;
          `}
        >
          Visualizer: {activeVisualizerDetails.name}
        </h2>
        {activeVisualizerSettings()}
      </div>
      <div
        className="VisualizersContainer"
        css={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr 1fr",
          gridAutoRows: "1fr",
          gap: "16px",
          padding: "12px",
        }}
      >
        {visualizers.map((visualizer) => (
          <VisualizerButton
            key={visualizer.id}
            id={visualizer.id}
            onClick={(e) => handleVisualizerClick(e, visualizer.id)}
            isActive={visualizer.id === activeVisualizer}
            name={visualizer.name}
          />
        ))}
      </div>
    </div>
  );
}

export default VisualizersPage;
