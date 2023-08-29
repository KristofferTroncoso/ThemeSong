import { css } from "@emotion/react";
import { useStore } from "/src/app/store";

function AppleMusicSettings() {
  const appleMusicPrefs = useStore((state) => state.theme.prefs["76dd54c5-78a2-4ca3-9c16-3d0d1aab367f"]);
  const setSingleThemePrefs = useStore((state) => state.theme.setSingleThemePrefs);

  function handleDarkLightChange(e) {
    setSingleThemePrefs("76dd54c5-78a2-4ca3-9c16-3d0d1aab367f", { appearance: e.target.value });
  }

  return (
    <div>
      <form
        onSubmit={(e) => e.preventDefault()}
        css={css`
          margin: 20px 0;
          text-align: left;
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
          value={appleMusicPrefs.appearance}
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
    </div>
  );
}

export default AppleMusicSettings;
