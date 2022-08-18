import React from 'react';
import { useSelector } from 'react-redux';
import { addStylesheet } from '../../addStylesheet';
import { dynamiclight_css } from './dynamiclightCSS';

function DynamicLight({processColors}) {
  const mostPopulatedColor = useSelector(state => state.palette.mostPopulatedColor);
  const dynamicLightPrefs = useSelector(state => state.themes.themes.find(theme => (theme.themeId === "themeId:6")).userPrefs.lightPrefs);

  React.useEffect(() => {
    addStylesheet(dynamiclight_css);
    processColors(dynamicLightPrefs, mostPopulatedColor.hsl);
  }, [])

  React.useEffect(() => {
    processColors(dynamicLightPrefs, mostPopulatedColor.hsl);
  }, [mostPopulatedColor, dynamicLightPrefs])
  
  return <div id="DynamicDark"></div>
}

export default DynamicLight;