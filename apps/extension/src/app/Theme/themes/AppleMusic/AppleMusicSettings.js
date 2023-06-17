import { css } from "@emotion/react";
import { useStore } from "/src/app/store";

function AppleMusicSettings() {
  const themePrefs = useStore((state) => state.theme.themePrefs);
  const changeThemePrefs = useStore((state) => state.theme.changeThemePrefs);
  const appleMusicPrefs = useStore((state) =>
    state.theme.themePrefs.find((theme) => theme.id === "76dd54c5-78a2-4ca3-9c16-3d0d1aab367f")
  );

  function handleDarkLightChange(e) {
    let newAppleMusicUserPrefs = {
      id: "76dd54c5-78a2-4ca3-9c16-3d0d1aab367f",
      appearance: e.target.value,
    };
    let newThemePrefsArr = themePrefs.map((themePrefs) =>
      themePrefs.id === "76dd54c5-78a2-4ca3-9c16-3d0d1aab367f" ? newAppleMusicUserPrefs : themePrefs
    );
    changeThemePrefs(newThemePrefsArr);
    chrome.storage.local.set({ themePrefs: newThemePrefsArr }, () =>
      console.log("chrome.storage.local.set({themePrefs}")
    );
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
