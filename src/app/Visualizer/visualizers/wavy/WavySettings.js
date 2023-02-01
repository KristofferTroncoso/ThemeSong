import { css } from "@emotion/react";

import { useStore } from "../../../store";

import { styled } from "@mui/material/styles";
import Slider from "@mui/material/Slider";

const StyledSlider = styled(Slider)`
  width: 180px;
  color: royalblue;

  .MuiSlider-thumb {
    color: #fff;
    border: 1px solid #fff;
    width: 14px;
    height: 14px;
  }

  .MuiSlider-thumb::after {
    width: 1px;
    height: 1px;
  }
`;

function WavySettings() {
  const wavyStorageObject = useStore((state) =>
    state.visualizer.visualizerPrefs.find(
      (visualizer) => visualizer.id === "6aa34dd4-6775-46c1-8dbb-7ac2931ff80d"
    )
  );
  const changeVisualizerPrefs = useStore(
    (state) => state.visualizer.changeVisualizerPrefs
  );
  const visualizerPrefs = useStore((state) => state.visualizer.visualizerPrefs);

  const handleWavySettingsChange = (e, id) => {
    let copy = { ...wavyStorageObject };
    copy[e.target.name] = Number(e.target.value);
    let newVisualizersArr = visualizerPrefs.map((visualizer) =>
      visualizer.id === "6aa34dd4-6775-46c1-8dbb-7ac2931ff80d"
        ? copy
        : visualizer
    );
    console.log(newVisualizersArr);
    changeVisualizerPrefs(newVisualizersArr);
    chrome.storage.local.set({ visualizerPrefs: newVisualizersArr }, () =>
      console.log("chrome.storage.local.set({visualizerPrefs}")
    );
  };

  return (
    <div>
      <h2
        css={css`
          color: #ff3232;
          font-size: 16px;
          margin-bottom: 4px;
        `}
      >
        Visualizer: Wavy
      </h2>
      <p style={{ margin: "5px 0 10px" }}>🌊 🌊 🌊</p>
      <div>
        <form onSubmit={(e) => e.preventDefault()}>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              height: "21px",
            }}
          >
            <label htmlFor="lineWidth">Line Width:</label>
            <div
              style={{
                display: "flex",
                alignContent: "center",
                alignItems: "center",
              }}
            >
              <StyledSlider
                name="lineWidth"
                value={wavyStorageObject.lineWidth}
                onChange={handleWavySettingsChange}
                step={1}
                min={4}
                max={14}
              />
              <input
                type="number"
                min="4"
                max="14"
                name="lineWidth"
                value={wavyStorageObject.lineWidth}
                onChange={handleWavySettingsChange}
                style={{
                  maxWidth: "40px",
                  backgroundColor: "inherit",
                  border: 0,
                  borderBottom: "1px solid black",
                  color: "white",
                  marginLeft: "8px",
                }}
              />
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default WavySettings;
