import React from 'react';
import { useSelector } from 'react-redux';
import { addStylesheet } from '../../addStylesheet';
import { dynamicdark_css }from './dynamicdarkCSS';

function DynamicDark({processColors}) {
  const mostPopulatedColor = useSelector(state => state.palette.mostPopulatedColor);
  const dynamicDarkPrefs = useSelector(state => state.themes.themes.find(theme => (theme.themeId === "themeId:6")).userPrefs.darkPrefs);

  React.useEffect(() => {
    addStylesheet(dynamicdark_css);
    processColors(dynamicDarkPrefs, mostPopulatedColor.hsl);
  }, [])

  React.useEffect(() => {
    processColors(dynamicDarkPrefs, mostPopulatedColor.hsl);
  }, [mostPopulatedColor, dynamicDarkPrefs])
  
  return <div id="DynamicDark"></div>
}

export default DynamicDark;


