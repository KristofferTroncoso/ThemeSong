import React from 'react';
import { useSelector } from 'react-redux';
import { static_dark_css } from './static-dark-css';

function StaticDark({processColors}) {
  const staticDarkPrefs = useSelector(state => state.themes.themes.find(theme => (theme.themeId === "themeId:7")).userPrefs.darkPrefs);

  React.useEffect(() => {
    processColors(staticDarkPrefs);
  }, [])

  React.useEffect(() => {
    processColors(staticDarkPrefs);
  }, [staticDarkPrefs])
  
  return <style id="StaticDark">{static_dark_css}</style>
}

export default StaticDark;


