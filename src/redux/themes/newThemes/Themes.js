import React from 'react';
// import { jsx, css } from '@emotion/react';
import { useSelector } from 'react-redux';

import Off from './Off/Off';
import Dynamic from './Dynamic/Dynamic';
import Static from './Static/Static';

function Themes() {
  const activeTheme = useSelector(state => state.themes.activeTheme);

  function returnTheme() {
    switch (activeTheme) {
      case "themeId:0":
        return <Off />
      case "themeId:6":
        return <Dynamic />
      case "themeId:7":
        return <Static />
      default:
        return <Dynamic />
    }
  }

  return (
    <div id="Themes">{returnTheme()}</div>
  )
}

export default Themes;