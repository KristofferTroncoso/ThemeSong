import React from 'react';
import PlayBar from '../../../../assets/font-icons/PlayBar.svg';
import TopBar from '../../../../assets/font-icons/TopBar.svg';
import PlayPage from '../../../../assets/font-icons/PlayPage.svg';
import Body from '../../../../assets/font-icons/Body.svg';
import OpacityIcon from '@mui/icons-material/Opacity';


export const DynamicDarkSettings = ({storageObj, handleNewObject, handleNewThemes}) => {
  const [dynamicDarkUserPrefs, setDynamicDarkUserPrefs] = React.useState(
    {
      saturationSetting: 0.8, 
      lightnessSettingNavBar: 21,
      lightnessSettingPlayPage: 21,
      lightnessSettingBody: 21,
      lightnessSettingPlayerBar: 21,
    }
  );

  React.useEffect(() => {
      const themeDetails = storageObj.themes.find(theme => (theme.themeId === "themeId:1"));
      setDynamicDarkUserPrefs(themeDetails.userPrefs);
  }, [storageObj]);


  function handleChange(e) {
    // setDynamicDarkUserPrefs({...dynamicDarkUserPrefs, [e.target.name]: e.target.valueAsNumber});
    console.log('changing')
    let y = {...dynamicDarkUserPrefs, [e.target.name]: e.target.valueAsNumber};
    let newStorageObj = {...storageObj};
    let newThemesArr = storageObj.themes.map(theme => 
      theme.themeId === "themeId:1"
      ? theme = {...theme, userPrefs: y}
      : theme);
    newStorageObj.themes = newThemesArr;
    handleNewThemes(newThemesArr);
    handleNewObject(newStorageObj);
  }

  function handleSave(e) {
    e.preventDefault();
    let newStorageObj = {...storageObj};
    let newThemesArr = storageObj.themes.map(theme => 
      theme.themeId === "themeId:1"
      ? theme = {...theme, userPrefs: dynamicDarkUserPrefs}
      : theme);
    newStorageObj.themes = newThemesArr;
    handleNewObject(newStorageObj);
  }


  if (!dynamicDarkUserPrefs) {
    return <h1>loading</h1>
  } else {
    return (
      <div className="DynamicTheme">
        <h4 style={{color: '#ff4f61'}}>Active Theme: Dynamic Dark</h4>
        <form onSubmit={handleSave}>
          <div style={{display: 'flex', justifyContent: 'space-between', height: '21px'}}>
            <label htmlFor="lightnessSettingNavBar">TopBar:</label>
            <div style={{display: 'flex', alignContent: 'center', alignItems: 'center'}}>
              <img src={TopBar} alt="svg" style={{height: '14px', width: '14px', marginRight: '8px'}} />
              <input type="range" name="lightnessSettingNavBar" min="0" max="30" value={dynamicDarkUserPrefs.lightnessSettingNavBar} step="5" onChange={handleChange} style={{width: '180px'}} />
              <input type="number" min="0" max="30" name="lightnessSettingNavBar" value={dynamicDarkUserPrefs.lightnessSettingNavBar} onChange={handleChange} style={{maxWidth: '40px', backgroundColor: 'inherit', border: 0, borderBottom: '1px solid black', color: 'white'}} />
            </div>
          </div>
          <div style={{display: 'flex', justifyContent: 'space-between', height: '21px'}}>
            <label htmlFor="lightnessSettingPlayPage">PlayPage:</label>
            <div style={{display: 'flex', alignContent: 'center', alignItems: 'center'}}>
              <img src={PlayPage} alt="svg" style={{height: '14px', width: '14px', marginRight: '8px'}} />
              <input type="range" name="lightnessSettingPlayPage" min="0" max="30" value={dynamicDarkUserPrefs.lightnessSettingPlayPage} step="5" onChange={handleChange} style={{width: '180px'}} />
              <input type="number" min="0" max="30" name="lightnessSettingPlayPage" value={dynamicDarkUserPrefs.lightnessSettingPlayPage} onChange={handleChange} style={{maxWidth: '40px', backgroundColor: 'inherit', border: 0, borderBottom: '1px solid black', color: 'white'}} />
            </div>
          </div>
          <div style={{display: 'flex', justifyContent: 'space-between', height: '21px'}}>
            <label htmlFor="lightnessSettingPlayerBar">PlayBar:</label>
            <div style={{display: 'flex', alignContent: 'center', alignItems: 'center'}}>
              <img src={PlayBar} alt="svg" style={{height: '14px', width: '14px', marginRight: '8px'}} />
              <input type="range" name="lightnessSettingPlayerBar" min="0" max="30" value={dynamicDarkUserPrefs.lightnessSettingPlayerBar} step="5" onChange={handleChange} style={{width: '180px'}} />
              <input type="number" min="0" max="30" name="lightnessSettingPlayerBar" value={dynamicDarkUserPrefs.lightnessSettingPlayerBar} onChange={handleChange} style={{maxWidth: '40px', backgroundColor: 'inherit', border: 0, borderBottom: '1px solid black', color: 'white'}} />
            </div>
          </div>
          <div style={{display: 'flex', justifyContent: 'space-between', height: '21px'}}>
            <label htmlFor="lightnessSettingBody">Body:</label>
            <div style={{display: 'flex', alignContent: 'center', alignItems: 'center'}}>
              <img src={Body} alt="svg" style={{height: '14px', width: '14px', marginRight: '8px'}} />
              <input type="range" name="lightnessSettingBody" min="0" max="30" value={dynamicDarkUserPrefs.lightnessSettingBody} step="5" onChange={handleChange} style={{width: '180px'}} />
              <input type="number" min="0" max="30" name="lightnessSettingBody" value={dynamicDarkUserPrefs.lightnessSettingBody} onChange={handleChange} style={{maxWidth: '40px', backgroundColor: 'inherit', border: 0, borderBottom: '1px solid black', color: 'white'}} />
            </div>
          </div>
          <div style={{display: 'flex', justifyContent: 'space-between', height: '21px'}}>
            <label htmlFor="saturationSetting">Saturation:</label>
            <div style={{display: 'flex', alignContent: 'center', alignItems: 'center'}}>
              <OpacityIcon sx={{height: '18px', width: '18px', marginRight: '6px'}} />
              <input type="range" name="saturationSetting" min="0.5" max="1" value={dynamicDarkUserPrefs.saturationSetting} step="0.1" onChange={handleChange} style={{width: '180px'}} />
              <input type="number" min="0.5" max="1" name="saturationSetting" value={dynamicDarkUserPrefs.saturationSetting} step="0.1" onChange={handleChange} style={{maxWidth: '40px', backgroundColor: 'inherit', border: 0, borderBottom: '1px solid black', color: 'white'}} />
            </div>
          </div>
        </form>
      </div>
    );
  }
};

export default DynamicDarkSettings;
