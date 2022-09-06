import React from 'react';
import { useSelector } from 'react-redux';
import DynamicDark from './Dark/DynamicDark';
import DynamicLight from './Light/DynamicLight';
import DynamicSystem from './System/DynamicSystem';

function Dynamic() {
  const appearanceSetting = useSelector(state => (
    state.themes.themes.find(theme => (theme.themeId === "themeId:6")).userPrefs.appearanceSetting
  ));
  
  function returnVariant() {
    switch (appearanceSetting) {
      case "dark":
        return <DynamicDark />
      case "light":
        return <DynamicLight />
      case "system":
        return <DynamicSystem />
      default:
        return <DynamicDark />
    }
  }

  return (
    <div id="Dynamic">
      {returnVariant()}
    </div>
  )
}

export default Dynamic;