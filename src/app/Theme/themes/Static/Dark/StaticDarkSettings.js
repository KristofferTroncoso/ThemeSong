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

const StyledSlider = styled(Slider)`
  width: 100%;
  color: #0215bd;

  .MuiSlider-thumb {
    color: #444;
    border: 1px solid #eee;
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

const StyledSaturationSlider = styled(Slider)`
  width: 100%;
  height: 12px;
  border-radius: 2px;

  .MuiSlider-thumb {
    color: #444;
    border: 1px solid #fff;
    width: 16px;
    height: 16px;
  }

  .MuiSlider-thumb::after {
    width: 1px;
    height: 1px;
  }

  .MuiSlider-track {
    border: none;
    background: rgba(0, 0, 0, 0);
  }
`;

function StaticDarkSettings() {
  const staticPrefs = useStore((state) =>
    state.theme.themePrefs.find(
      (theme) => theme.id === "b458eaae-0cbd-4a44-8847-c7a6a6ea1be8"
    )
  );
  const staticDarkPrefs = useStore(
    (state) =>
      state.theme.themePrefs.find(
        (theme) => theme.id === "b458eaae-0cbd-4a44-8847-c7a6a6ea1be8"
      ).darkPrefs
  );
  const themePrefs = useStore((state) => state.theme.themePrefs);
  const changeThemePrefs = useStore((state) => state.theme.changeThemePrefs);

  function handleChange(e) {
    let darkPrefs = { ...staticDarkPrefs, [e.target.name]: e.target.value };
    let staticUserPrefs = { ...staticPrefs, darkPrefs: darkPrefs };
    let newThemePrefsArr = themePrefs.map((themePrefs) =>
      themePrefs.id === "b458eaae-0cbd-4a44-8847-c7a6a6ea1be8"
        ? staticUserPrefs
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

  const [color, setColor] = useState({ h: staticDarkPrefs.hue, s: 80, l: 50 });

  function handleColorOnChange(hslObj) {
    let hue = hslObj.h;

    let darkPrefs = { ...staticDarkPrefs, hue };
    let staticUserPrefs = { ...staticPrefs, darkPrefs };
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
      className="StaticDarkTheme"
      css={css`
        width: 95%;
        max-width: 80%;
        background: #222;
        padding: 5px;
        border-radius: 5px;
        color: #ddd;
        margin: 5px;

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
          <DebouncedPicker color={color} onChange={handleColorOnChange} />
        </div>
        <div
          css={{
            display: "flex",
            justifyContent: "space-between",
            height: "21px",
            alignContent: "center",
            alignItems: "center",
          }}
        >
          <div
            css={css`
              width: 100%;
              display: flex;
              align-content: center;
              align-items: center;
              .MuiSlider-rail {
                opacity: 0.6;
                background: linear-gradient(
                  90deg,
                  #8a8a8a 0%,
                  hsl(${color.h} 100% 60%) 100%
                );
              }
            `}
          >
            <StyledSaturationSlider
              name="saturationSetting"
              value={staticDarkPrefs.saturationSetting}
              onChange={handleChange}
              step={5}
              min={0}
              max={100}
            />
          </div>
        </div>
        <div
          css={{
            display: "flex",
            justifyContent: "space-between",
            height: "21px",
            alignContent: "center",
            alignItems: "center",
          }}
        >
          <div
            css={{
              display: "flex",
              alignContent: "center",
              alignItems: "center",
              width: "100%",
            }}
          >
            <img
              src={TopBar}
              alt="svg"
              css={{ height: "12px", width: "12px", marginRight: "8px" }}
            />
            <StyledSlider
              name="lightnessSettingNavBar"
              value={staticDarkPrefs.lightnessSettingNavBar}
              onChange={handleChange}
              step={1}
              min={0}
              max={36}
            />
            <input
              type="number"
              min="0"
              max="36"
              name="lightnessSettingNavBar"
              value={staticDarkPrefs.lightnessSettingNavBar}
              onChange={handleChange}
              css={{
                width: "40px",
                backgroundColor: "inherit",
                border: 0,
                color: "#fff",
                marginLeft: "8px",
              }}
            />
          </div>
        </div>
        <div
          css={{
            display: "flex",
            justifyContent: "space-between",
            height: "21px",
            alignContent: "center",
            alignItems: "center",
          }}
        >
          <div
            css={{
              display: "flex",
              alignContent: "center",
              alignItems: "center",
              width: "100%",
            }}
          >
            <img
              src={PlayPage}
              alt="svg"
              css={{
                height: "12px",
                width: "12px",
                marginRight: "8px",
                color: "white",
              }}
            />
            <StyledSlider
              name="lightnessSettingPlayPage"
              value={staticDarkPrefs.lightnessSettingPlayPage}
              onChange={handleChange}
              step={1}
              min={0}
              max={36}
            />
            <input
              type="number"
              min="0"
              max="36"
              name="lightnessSettingPlayPage"
              value={staticDarkPrefs.lightnessSettingPlayPage}
              onChange={handleChange}
              css={{
                width: "40px",
                backgroundColor: "inherit",
                border: 0,
                color: "#fff",
                marginLeft: "8px",
              }}
            />
          </div>
        </div>
        <div
          css={{
            display: "flex",
            justifyContent: "space-between",
            height: "21px",
            alignContent: "center",
            alignItems: "center",
          }}
        >
          <div
            css={{
              display: "flex",
              alignContent: "center",
              alignItems: "center",
              width: "100%",
            }}
          >
            <img
              src={PlayBar}
              alt="svg"
              css={{ height: "12px", width: "12px", marginRight: "8px" }}
            />
            <StyledSlider
              name="lightnessSettingPlayerBar"
              value={staticDarkPrefs.lightnessSettingPlayerBar}
              onChange={handleChange}
              step={1}
              min={0}
              max={36}
            />
            <input
              type="number"
              min="0"
              max="36"
              name="lightnessSettingPlayerBar"
              value={staticDarkPrefs.lightnessSettingPlayerBar}
              onChange={handleChange}
              css={{
                width: "40px",
                backgroundColor: "inherit",
                border: 0,
                color: "#fff",
                marginLeft: "8px",
              }}
            />
          </div>
        </div>
        <div
          css={{
            display: "flex",
            justifyContent: "space-between",
            height: "21px",
            alignContent: "center",
            alignItems: "center",
          }}
        >
          <div
            css={{
              display: "flex",
              alignContent: "center",
              alignItems: "center",
              width: "100%",
            }}
          >
            <img
              src={Body}
              alt="svg"
              css={{ height: "12px", width: "12px", marginRight: "8px" }}
            />
            <StyledSlider
              name="lightnessSettingBody"
              value={staticDarkPrefs.lightnessSettingBody}
              onChange={handleChange}
              step={1}
              min={0}
              max={36}
            />
            <input
              type="number"
              min="0"
              max="36"
              name="lightnessSettingBody"
              value={staticDarkPrefs.lightnessSettingBody}
              onChange={handleChange}
              css={{
                width: "40px",
                backgroundColor: "inherit",
                border: 0,
                color: "#fff",
                marginLeft: "8px",
              }}
            />
          </div>
        </div>
      </form>
    </div>
  );
}

export default StaticDarkSettings;
