import { css } from "@emotion/react";
import { useStore } from "/src/app/store";
import { GiProtectionGlasses } from "react-icons/gi";
import useLocalization from "../../Extension/Localization/useLocalization";

function VisualizerToggleButton() {
  const isVisualizerOn = useStore((state) => state.visualizer.isVisualizerOn);
  const toggleIsVisualizerOn = useStore((state) => state.visualizer.toggleIsVisualizerOn);
  const getMessage = useLocalization();

  const handleVisualizerButtonClick = (e) => {
    e.stopPropagation();
    toggleIsVisualizerOn();
  };

  return (
    <button
      id="ts-visualizer-toggle"
      onClick={handleVisualizerButtonClick}
      title={getMessage("visualizers")}
      css={css`
        color: ${isVisualizerOn ? "#fff" : "inherit"};
        background-color: ${isVisualizerOn ? "#ee0606" : "inherit"};
        border-radius: 6px;
        border: 0;
        margin: 0 3px;
        padding: 4px 7px 0;
      `}
    >
      <GiProtectionGlasses
        css={css`
          font-size: 28px;
        `}
      />
    </button>
  );
}

export default VisualizerToggleButton;
