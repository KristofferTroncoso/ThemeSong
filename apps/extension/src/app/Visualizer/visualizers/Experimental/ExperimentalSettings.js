import { useStore } from "/src/app/store";
import { css } from "@emotion/react";

function ExperimentalSettings() {
  const experimentalVisualizer = useStore((state) =>
    state.visualizer.visualizers.find((visualizer) => visualizer.id === "8315ac5f-0de5-4ef1-ac5d-a4bc6d7b21ae")
  );
  const experimentalPrefs = useStore((state) => state.visualizer.prefs["8315ac5f-0de5-4ef1-ac5d-a4bc6d7b21ae"]);
  const setSingleVisualizerPrefs = useStore((state) => state.visualizer.setSingleVisualizerPrefs);

  const handleVisualizersChange = (visualizerObject) => {
    setSingleVisualizerPrefs("8315ac5f-0de5-4ef1-ac5d-a4bc6d7b21ae", visualizerObject);
  };

  const handleVariantClick = (e, id) => {
    let copy = { ...experimentalPrefs };
    copy.activeVariant = e.target.value;

    handleVisualizersChange(copy);
  };

  if (!experimentalVisualizer) {
    return <h1>hi</h1>;
  } else {
    return (
      <div>
        <div>
          <p style={{ marginBottom: "6px" }}>Experimental visualizers. Subject to change.</p>
        </div>
        <input
          type="number"
          onChange={handleVariantClick}
          value={experimentalPrefs.activeVariant}
          min={1}
          max={11}
          css={css`
            color: #000;
            font-size: 30px;
            width: 100px;
          `}
        />
      </div>
    );
  }
}

export default ExperimentalSettings;
