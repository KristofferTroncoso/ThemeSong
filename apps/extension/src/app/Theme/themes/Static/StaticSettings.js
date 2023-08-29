import { css } from "@emotion/react";
import StaticDarkSettings from "./Dark/StaticDarkSettings";
import StaticLightSettings from "./Light/StaticLightSettings";
import { useStore } from "/src/app/store";

export function StaticSettings() {
  const staticUserPrefs = useStore((state) => state.theme.prefs["b458eaae-0cbd-4a44-8847-c7a6a6ea1be8"]);
  const setSingleThemePrefs = useStore((state) => state.theme.setSingleThemePrefs);

  function handleDarkLightChange(e) {
    let newStaticUserPrefs = {
      ...staticUserPrefs,
      [e.target.name]: e.target.value,
    };
    setSingleThemePrefs("b458eaae-0cbd-4a44-8847-c7a6a6ea1be8", newStaticUserPrefs);
  }

  function returnSettingSliders() {
    switch (staticUserPrefs.appearance) {
      case "dark":
        return <StaticDarkSettings />;
      case "light":
        return <StaticLightSettings />;
      case "system":
        return (
          <div
            css={css`
              width: 100%;
              display: flex;
              justify-content: space-evenly;
            `}
          >
            <StaticLightSettings />
            <StaticDarkSettings />
          </div>
        );
      default:
        return (
          <div
            css={css`
              width: 100%;
              display: flex;
              justify-content: space-evenly;
            `}
          >
            <StaticLightSettings />
            <StaticDarkSettings />
          </div>
        );
    }
  }

  return (
    <div>
      <p
        css={css`
          margin: 5px 0 10px;
        `}
      >
        Pick a color, any color. 🖍️
      </p>
      <form
        onSubmit={(e) => e.preventDefault()}
        css={css`
          margin-bottom: 8px;
          text-align: right;
        `}
      >
        <label
          htmlFor="appearance"
          css={css`
            margin-right: 8px;
          `}
        >
          Appearance:
        </label>
        <select
          id="appearance"
          name="appearance"
          value={staticUserPrefs.appearance}
          onChange={handleDarkLightChange}
          css={css`
            background-color: #333;
            color: white;
            border: 1px solid #888;
            border-radius: 4px;
            outline: 0;
          `}
        >
          <option value="light">Light</option>
          <option value="dark">Dark</option>
          <option value="system">Use Device Setting</option>
        </select>
      </form>
      <div
        css={css`
          display: flex;
          justify-content: center;
          width: 100%;
        `}
      >
        {returnSettingSliders()}
      </div>
    </div>
  );
}

export default StaticSettings;
