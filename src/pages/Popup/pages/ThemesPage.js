/** @jsx jsx */
import React from 'react';
import { jsx } from '@emotion/react';
import { DynamicDarkSettings } from '../../themes/dynamic-dark/';
import { DynamicLightSettings } from '../../themes/dynamic-light/';
import { StaticDarkSettings } from '../../themes/static-dark/';
import { StaticLightSettings } from '../../themes/static-light/';
import { GlassSettings } from '../../themes/frosted-glass/';
import { OffSettings } from '../../themes/off/';
import ThemeButton from '../../components/ThemeButton';

function ThemesPage() {

  const [activeTheme, setActiveTheme] = React.useState();
  const [themes, setThemes] = React.useState();

  function handleActiveThemeChange(id) {
    console.log(id);
    let newStorageObj = {...storageObj};
    newStorageObj.activeTheme = id;
    setActiveTheme(id);
    setStorageObj(newStorageObj);
  }

  function handleNewObject(newObject) {
    setStorageObj(newObject);
  }

  function handleNewThemes(newThemes) {
    setThemes(newThemes);
  }

  let activeThemeSettings = () => {
    switch (storageObj.activeTheme) {
    case "themeId:0":
      return <OffSettings />
    case "themeId:1":
      return <DynamicDarkSettings storageObj={storageObj} handleNewObject={handleNewObject} handleNewThemes={handleNewThemes} />
    case "themeId:2":
      return <StaticDarkSettings storageObj={storageObj} handleNewObject={handleNewObject} handleNewThemes={handleNewThemes} />
    case "themeId:3":
      return <GlassSettings />
    case "themeId:4":
      return <DynamicLightSettings storageObj={storageObj} handleNewObject={handleNewObject} handleNewThemes={handleNewThemes} />
    case "themeId:5":
      return <StaticLightSettings storageObj={storageObj} handleNewObject={handleNewObject} handleNewThemes={handleNewThemes} />
    default:
      break;
    }
  };

  return (
    <div>
      <div 
        className="ActiveThemeSettingsContainer" 
        css={{
          background: '#313131', 
          borderRadius: '5px', 
          margin: '5px', 
          minHeight: '150px', 
          padding: '5px 10px 10px'
        }}
      >
        {activeThemeSettings()}
      </div>
      <div 
        className="ThemesContainer" 
        css={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr 1fr',
          gridAutoRows: '1fr',
          gap: '16px',
          padding: '12px'
        }}
      >
        {storageObj.themes.map(theme => (
          <ThemeButton key={theme.themeId} themeDetails={theme} handleActiveThemeChange={handleActiveThemeChange} isActive={storageObj.activeTheme === theme.themeId} />
        ))}
      </div>
    </div>
  )
}