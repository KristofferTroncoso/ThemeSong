import React from 'react';
import { useSelector } from 'react-redux';
import { addStylesheet } from '../../addStylesheet';
import { static_light_css } from './static-light-css';

function StaticLight({processColors}) {
  const staticLightPrefs = useSelector(state => state.themes.themes.find(theme => (theme.themeId === "themeId:7")).userPrefs.lightPrefs);

  React.useEffect(() => {
    addStylesheet(static_light_css);
    processColors(staticLightPrefs);
  }, [])

  React.useEffect(() => {
    processColors(staticLightPrefs);
  }, [staticLightPrefs])
  
  return <div id="StaticLight"></div>
}

export default StaticLight;


