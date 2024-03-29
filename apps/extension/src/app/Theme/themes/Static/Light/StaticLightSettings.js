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

function StaticLightSettings() {
  const themePrefs = useStore((state) => state.theme.prefs);
  const staticPrefs = themePrefs["b458eaae-0cbd-4a44-8847-c7a6a6ea1be8"];
  const staticLightPrefs = staticPrefs.light;
  const setSingleThemePrefs = useStore((state) => state.theme.setSingleThemePrefs);

  const [color, setColor] = useState({ h: staticLightPrefs.hue, s: 80, l: 50 });

  function handleChange(e) {
    let newLightPrefs = {
      ...staticLightPrefs,
      [e.target.name]: e.target.value,
    };
    let newStaticUserPrefs = { ...staticPrefs, light: newLightPrefs };
    setSingleThemePrefs("b458eaae-0cbd-4a44-8847-c7a6a6ea1be8", newStaticUserPrefs);
  }

  function handleLightChange(e) {
    let staticLightPrefsLightnessCopy = [...staticLightPrefs.lightness];
    staticLightPrefsLightnessCopy[e.target.name] = e.target.value;
    let newLightPrefs = {
      ...staticLightPrefs,
      lightness: staticLightPrefsLightnessCopy,
    };
    let newStaticUserPrefs = { ...staticPrefs, light: newLightPrefs };
    setSingleThemePrefs("b458eaae-0cbd-4a44-8847-c7a6a6ea1be8", newStaticUserPrefs);
  }

  function handleColorOnChange(hslObj) {
    let hue = hslObj.h;

    let light = { ...staticLightPrefs, hue };
    let staticUserPrefs = { ...staticPrefs, light };
    setSingleThemePrefs("b458eaae-0cbd-4a44-8847-c7a6a6ea1be8", staticUserPrefs);

    setColor(hslObj);
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
            opacity: 1;
            background: linear-gradient(90deg, #888 10%, hsl(${color.h} 100% 40%) 90%);
          }
        `}
      >
        <SaturationSlider
          name="saturation"
          value={staticLightPrefs.saturation}
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
        value={staticLightPrefs.lightness[0]}
        min={50}
        max={100}
        light
      />
      <BrightnessSectionSlider
        name="1"
        icon={<PlayPage />}
        handleChange={handleLightChange}
        value={staticLightPrefs.lightness[1]}
        min={50}
        max={100}
        light
      />
      <BrightnessSectionSlider
        name="2"
        icon={<PlayBar />}
        handleChange={handleLightChange}
        value={staticLightPrefs.lightness[2]}
        min={50}
        max={100}
        light
      />
      <BrightnessSectionSlider
        name="3"
        icon={<Body />}
        handleChange={handleLightChange}
        value={staticLightPrefs.lightness[3]}
        min={50}
        max={100}
        light
      />
    </div>
  );
}

export default StaticLightSettings;
