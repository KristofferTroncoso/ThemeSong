import { css } from '@emotion/react';
import StaticDarkSettings from './Dark/StaticDarkSettings';
import StaticLightSettings from './Light/StaticLightSettings';
import { useStore } from '../../../store';

export function StaticSettings() {
  const themePrefs = useStore(state => state.theme.themePrefs);
  const staticUserPrefs = useStore(state => state.theme.themePrefs.find(theme => (theme.themeId === "themeId:7")));
  const changeThemePrefs = useStore(state => state.theme.changeThemePrefs);

  function handleDarkLightChange(e) {
    let newStaticUserPrefs = {...staticUserPrefs, [e.target.name]: e.target.value};
    let newThemePrefsArr = themePrefs.map(themePrefs => 
      themePrefs.themeId === "themeId:7"
    ? newStaticUserPrefs
    : themePrefs);
    changeThemePrefs(newThemePrefsArr);
    chrome.storage.local.set({themePrefs: newThemePrefsArr}, () => console.log('chrome.storage.local.set({themePrefs}'));
  }

  function returnSettingSliders() {
    switch (staticUserPrefs.appearanceSetting) {
      case "dark":
        return <StaticDarkSettings />
      case "light":
        return <StaticLightSettings />
      case "system":
        return <div><StaticDarkSettings /><StaticLightSettings /></div>
      default:
        return <div><StaticDarkSettings /><StaticLightSettings /></div>
    }
  }

  return (
    <div>
      <h2 css={css`color: #ff3232; font-size: 16px;`}>Active Theme: Static</h2>
      <p css={css`margin: 5px 0 0;`}>Pick a color, any color.</p>
      <p css={css`margin-bottom: 10px;`}>Adjust brightness and saturation below.</p>
      <form onSubmit={e => e.preventDefault()} css={css`margin-bottom: 8px; text-align: right;`}>
        <label htmlFor="appearanceSetting" css={css`margin-right: 8px;`}>Appearance:</label>
        <select 
          id="appearanceSetting" 
          name="appearanceSetting" 
          value={staticUserPrefs.appearanceSetting} 
          onChange={handleDarkLightChange} 
            css={css`
            background-color: #333;
            color: white;
            border: 1px solid #888;
            border-radius: 4px;
            outline: 0;
          `}
        >
          <option value="dark">Dark</option>
          <option value="light">Light</option>
          <option value="system">Use Device Setting</option>
        </select>
      </form>
      {returnSettingSliders()}
    </div>
  )
}

export default StaticSettings;