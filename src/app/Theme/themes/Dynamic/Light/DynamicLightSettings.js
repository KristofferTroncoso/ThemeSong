import { css } from "@emotion/react";
import { useStore } from "/src/app/store";
import SaturationSlider from "../../../components/SaturationSlider";
import TopBar from "../../../icons/TopBar";
import PlayBar from "../../../icons/PlayBar";
import PlayPage from "../../../icons/PlayPage";
import Body from "../../../icons/Body";
import BrightnessSectionSlider from "../../../components/BrightnessSectionSlider";
import OpacityIcon from "@mui/icons-material/Opacity";

function DynamicLightSettings() {
  const dynamicPrefs = useStore((state) =>
    state.theme.themePrefs.find((theme) => theme.id === "db8854e3-6753-4639-b244-c8091f3b9fcb")
  );
  const dynamicLightPrefs = useStore(
    (state) => state.theme.themePrefs.find((theme) => theme.id === "db8854e3-6753-4639-b244-c8091f3b9fcb").light
  );
  const themePrefs = useStore((state) => state.theme.themePrefs);
  const changeThemePrefs = useStore((state) => state.theme.changeThemePrefs);

  function handleChange(e) {
    let newLightPrefs = {
      ...dynamicLightPrefs,
      [e.target.name]: e.target.value,
    };
    let newDynamicUserPrefs = { ...dynamicPrefs, light: newLightPrefs };
    let newThemePrefsArr = themePrefs.map((themePrefs) =>
      themePrefs.id === "db8854e3-6753-4639-b244-c8091f3b9fcb" ? newDynamicUserPrefs : themePrefs
    );
    console.log(newThemePrefsArr);
    changeThemePrefs(newThemePrefsArr);
    chrome.storage.local.set({ themePrefs: newThemePrefsArr }, () =>
      console.log("chrome.storage.local.set({themePrefs}")
    );
  }

  function handleLightChange(e) {
    let dynamicLightPrefsLightnessCopy = [...dynamicLightPrefs.lightness];
    dynamicLightPrefsLightnessCopy[e.target.name] = e.target.value;
    let newLightPrefs = {
      ...dynamicLightPrefs,
      lightness: dynamicLightPrefsLightnessCopy,
    };
    let newDynamicUserPrefs = { ...dynamicPrefs, light: newLightPrefs };
    let newThemePrefsArr = themePrefs.map((themePrefs) =>
      themePrefs.id === "db8854e3-6753-4639-b244-c8091f3b9fcb" ? newDynamicUserPrefs : themePrefs
    );
    console.log(newThemePrefsArr);
    changeThemePrefs(newThemePrefsArr);
    chrome.storage.local.set({ themePrefs: newThemePrefsArr }, () =>
      console.log("chrome.storage.local.set({themePrefs}")
    );
  }

  return (
    <div
      css={css`
        width: 95%;
        max-width: 80%;
        background: #eee;
        padding: 5px;
        border-radius: 3px;
        margin: 5px;
        color: #222;

        .MuiSlider-root {
          padding: 0;
        }
      `}
    >
      <BrightnessSectionSlider
        name="0"
        icon={<TopBar />}
        handleChange={handleLightChange}
        value={dynamicLightPrefs.lightness[0]}
        min={50}
        max={100}
        light
      />
      <BrightnessSectionSlider
        name="1"
        icon={<PlayPage />}
        handleChange={handleLightChange}
        value={dynamicLightPrefs.lightness[1]}
        min={50}
        max={100}
        light
      />
      <BrightnessSectionSlider
        name="2"
        icon={<PlayBar />}
        handleChange={handleLightChange}
        value={dynamicLightPrefs.lightness[2]}
        min={50}
        max={100}
        light
      />
      <BrightnessSectionSlider
        name="3"
        icon={<Body />}
        handleChange={handleLightChange}
        value={dynamicLightPrefs.lightness[3]}
        min={50}
        max={100}
        light
      />
      <div
        css={css`
          display: flex;
          align-items: center;
          align-content: center;
          margin-top: 10px;
          .MuiSlider-rail {
            opacity: 1;
            background: linear-gradient(90deg, hsl(30 10% 55%) 20%, hsl(30 100% 50%) 80%);
          }
          input::-webkit-outer-spin-button,
          input::-webkit-inner-spin-button {
            -webkit-appearance: none;
            margin: 0;
          }
        `}
      >
        <OpacityIcon sx={{ height: "16px", width: "16px", marginRight: "6px" }} />
        <SaturationSlider
          name="saturation"
          value={dynamicLightPrefs.saturation}
          onChange={handleChange}
          step={0.1}
          min={0.5}
          max={1}
          css={css`
            width: 80%;
            height: 8px;
            border-radius: 2px;

            .MuiSlider-thumb {
              color: #fff;
              border: 1px solid #444;
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
          value={dynamicLightPrefs.saturation}
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

export default DynamicLightSettings;
