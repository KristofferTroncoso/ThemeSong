import { useState } from "react";
import { css } from "@emotion/react";
import { useStore } from "/src/app/store";
import SaturationSlider from "../../../components/SaturationSlider";
import DebouncedPicker from "../DebouncedPicker";
import TopBar from "../../../icons/TopBar";
import PlayBar from "../../../icons/PlayBar";
import PlayPage from "../../../icons/PlayPage";
import Body from "../../../icons/Body";
import BrightnessSectionSlider from "../../../components/BrightnessSectionSlider";

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
      ).dark
  );
  const themePrefs = useStore((state) => state.theme.themePrefs);
  const changeThemePrefs = useStore((state) => state.theme.changeThemePrefs);

  function handleChange(e) {
    let dark = { ...staticDarkPrefs, [e.target.name]: e.target.value };
    let staticUserPrefs = { ...staticPrefs, dark: dark };
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

  const [color, setColor] = useState({ h: staticDarkPrefs.hue, s: 80, l: 50 });

  function handleColorOnChange(hslObj) {
    let hue = hslObj.h;

    let dark = { ...staticDarkPrefs, hue };
    let staticUserPrefs = { ...staticPrefs, dark };
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

  function handleLightChange(e) {
    let staticDarkPrefsLightnessCopy = [...staticDarkPrefs.lightness];
    staticDarkPrefsLightnessCopy[e.target.name] = e.target.value;
    let newDarkPrefs = {
      ...staticDarkPrefs,
      lightness: staticDarkPrefsLightnessCopy,
    };
    let newStaticUserPrefs = { ...staticPrefs, dark: newDarkPrefs };
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
      <div
        css={css`
          margin: 4px 0 10px;
        `}
      >
        <DebouncedPicker color={color} onChange={handleColorOnChange} />
      </div>
      <div
        css={css`
          .MuiSlider-rail {
            opacity: 0.6;
            background: linear-gradient(
              90deg,
              #888 10%,
              hsl(${color.h} 100% 30%) 90%
            );
          }
        `}
      >
        <SaturationSlider
          name="saturation"
          value={staticDarkPrefs.saturation}
          onChange={handleChange}
          step={5}
          min={0}
          max={100}
        />
      </div>
      <BrightnessSectionSlider
        name="0"
        icon={<TopBar />}
        handleChange={handleLightChange}
        value={staticDarkPrefs.lightness[0]}
        min={0}
        max={50}
        dark
      />
      <BrightnessSectionSlider
        name="1"
        icon={<PlayPage />}
        handleChange={handleLightChange}
        value={staticDarkPrefs.lightness[1]}
        min={0}
        max={50}
        dark
      />
      <BrightnessSectionSlider
        name="2"
        icon={<PlayBar />}
        handleChange={handleLightChange}
        value={staticDarkPrefs.lightness[2]}
        min={0}
        max={50}
        dark
      />
      <BrightnessSectionSlider
        name="3"
        icon={<Body />}
        handleChange={handleLightChange}
        value={staticDarkPrefs.lightness[3]}
        min={0}
        max={50}
        dark
      />
    </div>
  );
}

export default StaticDarkSettings;
