import { useStore } from "/src/app/store";
import { css } from "@emotion/react";

function ExperimentalSettings() {
  const visualizerPrefs = useStore((state) => state.visualizer.visualizerPrefs);
  const experimentalVisualizer = useStore((state) =>
    state.visualizer.visualizers.find((visualizer) => visualizer.id === "8315ac5f-0de5-4ef1-ac5d-a4bc6d7b21ae")
  );
  const experimentalPrefs = useStore((state) =>
    state.visualizer.visualizerPrefs.find((visualizer) => visualizer.id === "8315ac5f-0de5-4ef1-ac5d-a4bc6d7b21ae")
  );
  const changeVisualizerPrefs = useStore((state) => state.visualizer.changeVisualizerPrefs);

  const handleVisualizersChange = (visualizerObject) => {
    console.log(visualizerObject);
    let visualizerPrefsCopy = [...visualizerPrefs];
    let newCopy = visualizerPrefsCopy.map((visualizer) => {
      if (visualizer.id === visualizerObject.id) {
        return visualizerObject;
      } else {
        return visualizer;
      }
    });
    changeVisualizerPrefs(newCopy);
    chrome.storage.local.set({ visualizerPrefs: newCopy }, () =>
      console.log("chrome.storage.local.set({visualizerPrefs}")
    );
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
          max={12}
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
