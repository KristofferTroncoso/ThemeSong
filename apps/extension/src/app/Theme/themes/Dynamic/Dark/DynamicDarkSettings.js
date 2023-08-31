import { css } from "@emotion/react";
import { useStore } from "/src/app/store";
import SaturationSlider from "../../../components/SaturationSlider";
import TopBar from "../../../icons/TopBar";
import PlayBar from "../../../icons/PlayBar";
import PlayPage from "../../../icons/PlayPage";
import Body from "../../../icons/Body";
import BrightnessSectionSlider from "../../../components/BrightnessSectionSlider";
import OpacityIcon from "@mui/icons-material/Opacity";

function DynamicDarkSettings() {
  const dynamicPrefs = useStore((state) => state.theme.prefs["db8854e3-6753-4639-b244-c8091f3b9fcb"]);
  const dynamicDarkPrefs = dynamicPrefs.dark;
  const setSingleThemePrefs = useStore((state) => state.theme.setSingleThemePrefs);

  function handleChange(e) {
    let newDarkPrefs = { ...dynamicDarkPrefs, [e.target.name]: e.target.value };
    let newDynamicUserPrefs = { ...dynamicPrefs, dark: newDarkPrefs };
    setSingleThemePrefs("db8854e3-6753-4639-b244-c8091f3b9fcb", newDynamicUserPrefs);
  }

  function handleLightChange(e) {
    let dynamicLightPrefsLightnessCopy = [...dynamicDarkPrefs.lightness];
    dynamicLightPrefsLightnessCopy[e.target.name] = e.target.value;
    let newDarkPrefs = {
      ...dynamicDarkPrefs,
      lightness: dynamicLightPrefsLightnessCopy,
    };
    let newDynamicUserPrefs = { ...dynamicPrefs, dark: newDarkPrefs };
    setSingleThemePrefs("db8854e3-6753-4639-b244-c8091f3b9fcb", newDynamicUserPrefs);
  }

  return (
    <div
      css={css`
        width: 95%;
        max-width: 80%;
        background: #222;
        padding: 5px;
        border-radius: 3px;
        margin: 5px;
        color: #fff;

        .MuiSlider-root {
          padding: 0;
        }
      `}
    >
      <BrightnessSectionSlider
        name="0"
        icon={<TopBar />}
        handleChange={handleLightChange}
        value={dynamicDarkPrefs.lightness[0]}
        min={0}
        max={30}
        dark
      />
      <BrightnessSectionSlider
        name="1"
        icon={<PlayPage />}
        handleChange={handleLightChange}
        value={dynamicDarkPrefs.lightness[1]}
        min={0}
        max={30}
        dark
      />
      <BrightnessSectionSlider
        name="2"
        icon={<PlayBar />}
        handleChange={handleLightChange}
        value={dynamicDarkPrefs.lightness[2]}
        min={0}
        max={30}
        dark
      />
      <BrightnessSectionSlider
        name="3"
        icon={<Body />}
        handleChange={handleLightChange}
        value={dynamicDarkPrefs.lightness[3]}
        min={0}
        max={30}
        dark
      />
      <div
        css={css`
          display: flex;
          align-items: center;
          align-content: center;
          margin-top: 10px;
          .MuiSlider-rail {
            opacity: 1;
            background: linear-gradient(90deg, hsl(230 20% 50%) 20%, hsl(230 100% 50%) 80%);
          }
          input::-webkit-outer-spin-button,
          input::-webkit-inner-spin-button {
            -webkit-appearance: none;
            margin: 0;
          }

          // firefox
          input[type="number"] {
            appearance: textfield;
          }
        `}
      >
        <OpacityIcon sx={{ height: "16px", width: "16px", marginRight: "6px" }} />
        <SaturationSlider
          name="saturation"
          value={dynamicDarkPrefs.saturation}
          onChange={handleChange}
          step={0.1}
          min={0.5}
          max={1}
          css={css`
            width: 80%;
            height: 8px;
            border-radius: 2px;

            .MuiSlider-thumb {
              color: #444;
              border: 1px solid #fff;
              width: 12px;
              height: 12px;
            }
          `}
        />
        <input
          type="number"
          min={0.5}
          max={1}
          name="saturation"
          value={dynamicDarkPrefs.saturation}
          onChange={handleChange}
          css={{
            width: "26px",
            backgroundColor: "inherit",
            border: 0,
            marginLeft: "8px",
          }}
        />
      </div>
    </div>
  );
}

export default DynamicDarkSettings;
