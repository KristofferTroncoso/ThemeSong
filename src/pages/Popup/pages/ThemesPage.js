/** @jsx jsx */
// import React from 'react';
import { jsx } from '@emotion/react';

import { useSelector } from 'react-redux';
import { GlassSettings } from '../../../themes/frosted-glass/';
import { OffSettings } from '../../../themes/off/';
import { DynamicSettings } from '../../../themes/dynamic/DynamicSettings'; 
import { StaticSettings } from '../../../themes/static/StaticSettings';

import ThemeButton from '../components/ThemeButton';

function ThemesPage() {
  const themes = useSelector(state => state.themes.themes);
  const activeTheme = useSelector(state => state.themes.activeTheme);

  let activeThemeSettings = () => {
    switch (activeTheme) {
      case "themeId:0":
        return <OffSettings />
      case "themeId:3":
        return <GlassSettings />
      case "themeId:6":
        return <DynamicSettings />
      case "themeId:7":
        return <StaticSettings />
      default:
        break;
    }
  };

  return (
    <div>
      <div 
        className="ActiveThemeSettingsContainer" 
        css={{
          background: '#111111', 
          borderRadius: '5px', 
          border: '2px solid #135eeb',
          margin: '10px 5px 5px 5px', 
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
        {themes.map(theme => <ThemeButton key={theme.themeId} theme={theme} />)}
      </div>
    </div>
  )
}

export default ThemesPage;