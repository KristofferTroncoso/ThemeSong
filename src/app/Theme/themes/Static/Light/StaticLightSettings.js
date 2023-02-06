import { useState } from "react";
import { css } from "@emotion/react";
import { useStore } from "/src/app/store";
import { styled } from "@mui/material/styles";
import Slider from "@mui/material/Slider";
import DebouncedPicker from "../DebouncedPicker";
import PlayBar from "../../../icons/PlayBar.svg";
import TopBar from "../../../icons/TopBar.svg";
import PlayPage from "../../../icons/PlayPage.svg";
import Body from "../../../icons/Body.svg";
import OpacityIcon from "@mui/icons-material/Opacity";

const StyledSlider = styled(Slider)`
  width: 200px;
  color: #f58002;

  .MuiSlider-thumb {
    color: #eee;
    border: 1px solid #fff;
    width: 12px;
    height: 12px;
  }

  .MuiSlider-thumb::after {
    width: 1px;
    height: 1px;
  }

  .MuiSlider-rail {
    opacity: 0.6;
  }
`;

function StaticLightSettings() {
  const staticPrefs = useStore((state) =>
    state.theme.themePrefs.find(
      (theme) => theme.id === "b458eaae-0cbd-4a44-8847-c7a6a6ea1be8"
    )
  );
  const staticLightPrefs = useStore(
    (state) =>
      state.theme.themePrefs.find(
        (theme) => theme.id === "b458eaae-0cbd-4a44-8847-c7a6a6ea1be8"
      ).lightPrefs
  );
  const themePrefs = useStore((state) => state.theme.themePrefs);
  const changeThemePrefs = useStore((state) => state.theme.changeThemePrefs);

  function handleChange(e) {
    let newLightPrefs = {
      ...staticLightPrefs,
      [e.target.name]: e.target.value,
    };
    let newStaticUserPrefs = { ...staticPrefs, lightPrefs: newLightPrefs };
    let newThemePrefsArr = themePrefs.map((themePrefs) =>
      themePrefs.id === "b458eaae-0cbd-4a44-8847-c7a6a6ea1be8"
        ? newStaticUserPrefs
        : themePrefs
    );
    console.log(newThemePrefsArr);
    changeThemePrefs(newThemePrefsArr);
    chrome.storage.local.set({ themePrefs: newThemePrefsArr }, () =>
      console.log("chrome.storage.local.set({themePrefs}")
    );
  }

  function handleSave(e) {
    e.preventDefault();
  }

  const [color, setColor] = useState({ h: staticLightPrefs.hue, s: 80, l: 50 });

  function handleColorOnChange(hslObj) {
    let hue = hslObj.h;

    let lightPrefs = { ...staticLightPrefs, hue };
    let staticUserPrefs = { ...staticPrefs, lightPrefs };
    let newThemesArr = themePrefs.map((themePrefs) =>
      themePrefs.id === "b458eaae-0cbd-4a44-8847-c7a6a6ea1be8"
        ? staticUserPrefs
        : themePrefs
    );
    console.log(newThemesArr);
    changeThemePrefs(newThemesArr);
    chrome.storage.local.set({ themePrefs: newThemesArr }, () =>
      console.log("chrome.storage.local.set({themePrefs}")
    );

    setColor(hslObj);
  }

  return (
    <div
      className="StaticLightTheme"
      css={css`
        background: #333333;
        padding: 5px;
        border-radius: 2px;
        color: #ddd;

        .MuiSlider-root {
          padding: 0;
        }
      `}
    >
      <form onSubmit={handleSave}>
        <div
          css={css`
            height: 25px;
            display: flex;
            justify-content: space-between;
            align-content: center;
            align-items: center;
            .hue-horizontal div div {
              height: 15px !important;
              width: 15px !important;
              border: 1px solid #555 !important;
              transform: translate(-9px, -2px) !important;
            }
          `}
        >
          <p>Hue:</p>
          <DebouncedPicker color={color} onChange={handleColorOnChange} />
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            height: "21px",
            alignContent: "center",
            alignItems: "center",
          }}
        >
          <label htmlFor="lightnessSettingNavBar">TopBar:</label>
          <div
            style={{
              display: "flex",
              alignContent: "center",
              alignItems: "center",
            }}
          >
            <img
              src={TopBar}
              alt="svg"
              style={{ height: "12px", width: "12px", marginRight: "8px" }}
            />
            <StyledSlider
              name="lightnessSettingNavBar"
              value={staticLightPrefs.lightnessSettingNavBar}
              onChange={handleChange}
              step={1}
              min={50}
              max={100}
            />
            <input
              type="number"
              min="50"
              max="100"
              name="lightnessSettingNavBar"
              value={staticLightPrefs.lightnessSettingNavBar}
              onChange={handleChange}
              style={{
                width: "40px",
                backgroundColor: "inherit",
                border: 0,
                color: "white",
                marginLeft: "8px",
              }}
            />
          </div>
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            height: "21px",
            alignContent: "center",
            alignItems: "center",
          }}
        >
          <label htmlFor="lightnessSettingPlayPage">PlayPage:</label>
          <div
            style={{
              display: "flex",
              alignContent: "center",
              alignItems: "center",
            }}
          >
            <img
              src={PlayPage}
              alt="svg"
              style={{ height: "12px", width: "12px", marginRight: "8px" }}
            />
            <StyledSlider
              name="lightnessSettingPlayPage"
              value={staticLightPrefs.lightnessSettingPlayPage}
              onChange={handleChange}
              step={1}
              min={50}
              max={100}
            />
            <input
              type="number"
              min="50"
              max="100"
              name="lightnessSettingPlayPage"
              value={staticLightPrefs.lightnessSettingPlayPage}
              onChange={handleChange}
              style={{
                width: "40px",
                backgroundColor: "inherit",
                border: 0,
                color: "white",
                marginLeft: "8px",
              }}
            />
          </div>
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            height: "21px",
            alignContent: "center",
            alignItems: "center",
          }}
        >
          <label htmlFor="lightnessSettingPlayerBar">PlayBar:</label>
          <div
            style={{
              display: "flex",
              alignContent: "center",
              alignItems: "center",
            }}
          >
            <img
              src={PlayBar}
              alt="svg"
              style={{ height: "12px", width: "12px", marginRight: "8px" }}
            />
            <StyledSlider
              name="lightnessSettingPlayerBar"
              value={staticLightPrefs.lightnessSettingPlayerBar}
              onChange={handleChange}
              step={1}
              min={50}
              max={100}
            />
            <input
              type="number"
              min="50"
              max="100"
              name="lightnessSettingPlayerBar"
              value={staticLightPrefs.lightnessSettingPlayerBar}
              onChange={handleChange}
              style={{
                width: "40px",
                backgroundColor: "inherit",
                border: 0,
                color: "white",
                marginLeft: "8px",
              }}
            />
          </div>
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            height: "21px",
            alignContent: "center",
            alignItems: "center",
          }}
        >
          <label htmlFor="lightnessSettingBody">Body:</label>
          <div
            style={{
              display: "flex",
              alignContent: "center",
              alignItems: "center",
            }}
          >
            <img
              src={Body}
              alt="svg"
              style={{ height: "12px", width: "12px", marginRight: "8px" }}
            />
            <StyledSlider
              name="lightnessSettingBody"
              value={staticLightPrefs.lightnessSettingBody}
              onChange={handleChange}
              step={1}
              min={50}
              max={100}
            />
            <input
              type="number"
              min="50"
              max="100"
              name="lightnessSettingBody"
              value={staticLightPrefs.lightnessSettingBody}
              onChange={handleChange}
              style={{
                width: "40px",
                backgroundColor: "inherit",
                border: 0,
                color: "white",
                marginLeft: "8px",
              }}
            />
          </div>
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            height: "21px",
            alignContent: "center",
            alignItems: "center",
          }}
        >
          <label htmlFor="saturationSetting">Saturation:</label>
          <div
            style={{
              display: "flex",
              alignContent: "center",
              alignItems: "center",
            }}
          >
            <OpacityIcon
              sx={{ height: "16px", width: "16px", marginRight: "6px" }}
            />
            <StyledSlider
              name="saturationSetting"
              value={staticLightPrefs.saturationSetting}
              onChange={handleChange}
              step={5}
              min={0}
              max={100}
            />
            <input
              type="number"
              min="0"
              max="100"
              name="saturationSetting"
              value={staticLightPrefs.saturationSetting}
              step="5"
              onChange={handleChange}
              style={{
                width: "40px",
                backgroundColor: "inherit",
                border: 0,
                color: "white",
                marginLeft: "8px",
              }}
            />
          </div>
        </div>
      </form>
    </div>
  );
}

export default StaticLightSettings;
