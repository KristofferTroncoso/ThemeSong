import React from 'react';
import PlayBar from '../../assets/font-icons/PlayBar.svg';
import TopBar from '../../assets/font-icons/TopBar.svg';
import PlayPage from '../../assets/font-icons/PlayPage.svg';
import Body from '../../assets/font-icons/Body.svg';
import OpacityIcon from '@mui/icons-material/Opacity';


export const DynamicLightSettings = ({storageObj, handleNewObject, handleNewThemes}) => {
  const [dynamicLightUserPrefs, setDynamicLightUserPrefs] = React.useState(
    {
      saturationSetting: 0.8, 
      lightnessSettingNavBar: 70,
      lightnessSettingPlayPage: 80,
      lightnessSettingBody: 90,
      lightnessSettingPlayerBar: 70,
    }
  );

  React.useEffect(() => {
      const themeDetails = storageObj.themes.find(theme => (theme.themeId === "themeId:4"));
      setDynamicLightUserPrefs(themeDetails.userPrefs);
  }, [storageObj]);


  function handleChange(e) {
    // setdynamicLightUserPrefs({...dynamicLightUserPrefs, [e.target.name]: e.target.valueAsNumber});
    console.log('changing')
    let y = {...dynamicLightUserPrefs, [e.target.name]: e.target.valueAsNumber};
    let newStorageObj = {...storageObj};
    let newThemesArr = storageObj.themes.map(theme => 
      theme.themeId === "themeId:4"
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
      theme.themeId === "themeId:4"
      ? theme = {...theme, userPrefs: dynamicLightUserPrefs}
      : theme);
    newStorageObj.themes = newThemesArr;
    handleNewObject(newStorageObj);
  }


  if (!dynamicLightUserPrefs) {
    return <h1>loading</h1>
  } else {
    return (
      <div className="DynamicTheme">
        <h2 style={{color: '#ff4f61'}}>Active Theme: Dynamic Light</h2>
        <p style={{margin: '5px 0 0'}}>Colors change dynamically based on album art. Play any song to get started.</p>
        <p style={{marginBottom: '10px'}}>Adjust brightness and saturation below.</p>
        <form onSubmit={handleSave}>
          <div style={{display: 'flex', justifyContent: 'space-between', height: '21px'}}>
            <label htmlFor="lightnessSettingNavBar">TopBar:</label>
            <div style={{display: 'flex', alignContent: 'center', alignItems: 'center'}}>
              <img src={TopBar} alt="svg" style={{height: '14px', width: '14px', marginRight: '8px'}} />
              <input type="range" name="lightnessSettingNavBar" min="50" max="100" value={dynamicLightUserPrefs.lightnessSettingNavBar} step="5" onChange={handleChange} style={{width: '180px'}} />
              <input type="number" min="50" max="100" name="lightnessSettingNavBar" value={dynamicLightUserPrefs.lightnessSettingNavBar} onChange={handleChange} style={{maxWidth: '40px', backgroundColor: 'inherit', border: 0, borderBottom: '1px solid black', color: 'white'}} />
            </div>
          </div>
          <div style={{display: 'flex', justifyContent: 'space-between', height: '21px'}}>
            <label htmlFor="lightnessSettingPlayPage">PlayPage:</label>
            <div style={{display: 'flex', alignContent: 'center', alignItems: 'center'}}>
              <img src={PlayPage} alt="svg" style={{height: '14px', width: '14px', marginRight: '8px'}} />
              <input type="range" name="lightnessSettingPlayPage" min="50" max="100" value={dynamicLightUserPrefs.lightnessSettingPlayPage} step="5" onChange={handleChange} style={{width: '180px'}} />
              <input type="number" min="50" max="100" name="lightnessSettingPlayPage" value={dynamicLightUserPrefs.lightnessSettingPlayPage} onChange={handleChange} style={{maxWidth: '40px', backgroundColor: 'inherit', border: 0, borderBottom: '1px solid black', color: 'white'}} />
            </div>
          </div>
          <div style={{display: 'flex', justifyContent: 'space-between', height: '21px'}}>
            <label htmlFor="lightnessSettingPlayerBar">PlayBar:</label>
            <div style={{display: 'flex', alignContent: 'center', alignItems: 'center'}}>
              <img src={PlayBar} alt="svg" style={{height: '14px', width: '14px', marginRight: '8px'}} />
              <input type="range" name="lightnessSettingPlayerBar" min="50" max="100" value={dynamicLightUserPrefs.lightnessSettingPlayerBar} step="5" onChange={handleChange} style={{width: '180px'}} />
              <input type="number" min="50" max="100" name="lightnessSettingPlayerBar" value={dynamicLightUserPrefs.lightnessSettingPlayerBar} onChange={handleChange} style={{maxWidth: '40px', backgroundColor: 'inherit', border: 0, borderBottom: '1px solid black', color: 'white'}} />
            </div>
          </div>
          <div style={{display: 'flex', justifyContent: 'space-between', height: '21px'}}>
            <label htmlFor="lightnessSettingBody">Body:</label>
            <div style={{display: 'flex', alignContent: 'center', alignItems: 'center'}}>
              <img src={Body} alt="svg" style={{height: '14px', width: '14px', marginRight: '8px'}} />
              <input type="range" name="lightnessSettingBody" min="50" max="100" value={dynamicLightUserPrefs.lightnessSettingBody} step="5" onChange={handleChange} style={{width: '180px'}} />
              <input type="number" min="50" max="100" name="lightnessSettingBody" value={dynamicLightUserPrefs.lightnessSettingBody} onChange={handleChange} style={{maxWidth: '40px', backgroundColor: 'inherit', border: 0, borderBottom: '1px solid black', color: 'white'}} />
            </div>
          </div>
          <div style={{display: 'flex', justifyContent: 'space-between', height: '21px'}}>
            <label htmlFor="saturationSetting">Saturation:</label>
            <div style={{display: 'flex', alignContent: 'center', alignItems: 'center'}}>
              <OpacityIcon sx={{height: '18px', width: '18px', marginRight: '6px'}} />
              <input type="range" name="saturationSetting" min="0.5" max="1" value={dynamicLightUserPrefs.saturationSetting} step="0.1" onChange={handleChange} style={{width: '180px'}} />
              <input type="number" min="0.5" max="1" name="saturationSetting" value={dynamicLightUserPrefs.saturationSetting} step="0.1" onChange={handleChange} style={{maxWidth: '40px', backgroundColor: 'inherit', border: 0, borderBottom: '1px solid black', color: 'white'}} />
            </div>
          </div>
        </form>
      </div>
    );
  }
};

export default DynamicLightSettings;
