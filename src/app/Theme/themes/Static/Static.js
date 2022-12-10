import React from 'react';
import StaticDark from './Dark/StaticDark';
import StaticLight from './Light/StaticLight';
import StaticSystem from './System/StaticSystem';
import { useStore } from '../../../store';

function Static() {
  const appearanceSetting = useStore(state => (
    state.theme.themePrefs.find(theme => (theme.themeId === "themeId:7")).appearanceSetting
  ));

  function returnVariant() {
    switch (appearanceSetting) {
      case "dark":
        return <StaticDark />
      case "light":
        return <StaticLight />
      case "system":
        return <StaticSystem />
      default:
        return <StaticDark />
    }
  }

  return (
    <div id="Static">
      {returnVariant()}
    </div>
  )
}

export default Static;