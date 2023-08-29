import { useStore } from "/src/app/store";

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
  const wavyStorageObject = useStore((state) => state.visualizer.prefs["6aa34dd4-6775-46c1-8dbb-7ac2931ff80d"]);
  const setSingleVisualizerPrefs = useStore((state) => state.visualizer.setSingleVisualizerPrefs);

  const handleWavySettingsChange = (e, id) => {
    let copy = { ...wavyStorageObject };
    copy[e.target.name] = Number(e.target.value);
    setSingleVisualizerPrefs("6aa34dd4-6775-46c1-8dbb-7ac2931ff80d", copy);
  };

  return (
    <div>
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
