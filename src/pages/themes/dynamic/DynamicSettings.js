import React from 'react';
import { DynamicDarkSettings } from './dynamic-dark';
import { DynamicLightSettings } from './dynamic-light';

export function DynamicSettings({storageObj, handleNewObject, handleNewThemes}) {

  const [dynamicUserPrefs, setDynamicUserPrefs] = React.useState({
    darkLightSetting: 'dark', // 'dark', 'light', 'system'
    darkPrefs: {
      saturationSetting: 0.8, // percentage of chosen color's saturation.
      lightnessSettingNavBar: 20,
      lightnessSettingPlayPage: 15,
      lightnessSettingBody: 10,
      lightnessSettingPlayerBar: 25
    },
    lightPrefs: {
      saturationSetting: 1,
      lightnessSettingNavBar: 85,
      lightnessSettingPlayPage: 80,
      lightnessSettingBody: 95,
      lightnessSettingPlayerBar: 85
    }
  });

  React.useEffect(() => {
      const themeDetails = storageObj.themes.find(theme => (theme.themeId === "themeId:6"));
      setDynamicUserPrefs(themeDetails.userPrefs);
  }, [storageObj]);

  return (
    <div>
      <h2 style={{color: '#ff4f61'}}>Active Theme: Dynamic</h2>
      <p style={{margin: '5px 0 0'}}>Colors change dynamically based on album art. Play any song to get started.</p>
      <p style={{marginBottom: '10px'}}>Adjust brightness and saturation below.</p>
      <form>
        <label for="darklight">DarkLight:</label>
        <select id="darklight" name="darklight">
          <option value="dark">Dark</option>
          <option value="light">Light</option>
          <option value="system">System</option>
        </select>
        <input type="submit" />
      </form>
      {(dynamicUserPrefs.darkLightSetting === "dark")
      ? <DynamicDarkSettings storageObj={storageObj} handleNewObject={handleNewObject} handleNewThemes={handleNewThemes} />
      : <DynamicLightSettings storageObj={storageObj} handleNewObject={handleNewObject} handleNewThemes={handleNewThemes} />
      }
    </div>
  )
}

export default DynamicSettings;