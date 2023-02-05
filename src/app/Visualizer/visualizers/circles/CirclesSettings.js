import { useStore } from "/src/app/store";

import { css } from "@emotion/react";
import VariantButton from "../../components/VariantButton";

function CirclesSettings() {
  const visualizerPrefs = useStore((state) => state.visualizer.visualizerPrefs);
  const circlesVisualizer = useStore((state) =>
    state.visualizer.visualizers.find(
      (visualizer) => visualizer.id === "685d0ec7-5c52-4e48-a43d-11184a39f3da"
    )
  );
  const circlesPrefs = useStore((state) =>
    state.visualizer.visualizerPrefs.find(
      (visualizer) => visualizer.id === "685d0ec7-5c52-4e48-a43d-11184a39f3da"
    )
  );
  const changeVisualizerPrefs = useStore(
    (state) => state.visualizer.changeVisualizerPrefs
  );

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
    let copy = { ...circlesPrefs };
    copy.activeVariant = id;
    handleVisualizersChange(copy);
  };

  if (!circlesVisualizer) {
    return <h1>hi</h1>;
  } else {
    return (
      <div>
        <h2
          css={css`
            color: #ff3232;
            font-size: 16px;
            margin-bottom: 4px;
          `}
        >
          Visualizer: Circles
        </h2>
        <div>
          <p style={{ marginBottom: "6px" }}>Style Variant:</p>
          <div
            className="VariantsContainer"
            css={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr 1fr",
              gridAutoRows: "1fr",
              gap: "10px",
            }}
          >
            {circlesVisualizer.variants.map((variant) => (
              <VariantButton
                key={variant.id}
                id={variant.id}
                onClick={(e) => handleVariantClick(e, variant.id)}
                isActive={variant.id === circlesPrefs.activeVariant}
                name={variant.name}
              />
            ))}
          </div>
        </div>
      </div>
    );
  }
}

export default CirclesSettings;
