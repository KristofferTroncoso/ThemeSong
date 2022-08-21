import React from 'react';
import { useSelector } from 'react-redux';
import { addStylesheet } from '../../addStylesheet';
import { static_dark_css } from './static-dark-css';

function StaticDark({processColors}) {
  const staticDarkPrefs = useSelector(state => state.themes.themes.find(theme => (theme.themeId === "themeId:7")).userPrefs.darkPrefs);

  React.useEffect(() => {
    addStylesheet(static_dark_css);
    processColors(staticDarkPrefs);
  }, [])

  React.useEffect(() => {
    processColors(staticDarkPrefs);
  }, [staticDarkPrefs])
  
  return <div id="StaticDark"></div>
}

export default StaticDark;


