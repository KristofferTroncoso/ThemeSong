import React from 'react';
import { HuePicker } from 'react-color';
import PlayBar from '../../assets/font-icons/PlayBar.svg';
import TopBar from '../../assets/font-icons/TopBar.svg';
import PlayPage from '../../assets/font-icons/PlayPage.svg';
import Body from '../../assets/font-icons/Body.svg';
import OpacityIcon from '@mui/icons-material/Opacity';

export const StaticLightSettings = ({storageObj, handleNewObject, handleNewThemes}) => {
  const [staticLightUserPrefs, setStaticLightUserPrefs] = React.useState();

  React.useEffect(() => {
    const themeDetails = storageObj.themes.find(theme => (theme.themeId === "themeId:5"));
    setStaticLightUserPrefs(themeDetails.userPrefs);
    setReactColor({h: themeDetails.userPrefs.hslColorHue, s: 80, l: .40 })
  }, [storageObj]);


  function handleChange(e) {
    let y = {...staticLightUserPrefs, [e.target.name]: e.target.valueAsNumber};
    let newStorageObj = {...storageObj};
    let newThemesArr = storageObj.themes.map(theme => 
      theme.themeId === "themeId:5"
      ? theme = {...theme, userPrefs: y}
      : theme);
    newStorageObj.themes = newThemesArr;
    handleNewThemes(newThemesArr);
    handleNewObject(newStorageObj);
  }

  function handleSave(e) {
    e.preventDefault();
  }

  const [reactColor, setReactColor] = React.useState({ h: 314, s: 80, l: .40 });

  function handleChange2(color, e) {
    // setReactColor(color);

    let y = {...staticLightUserPrefs, hslColorHue: color.hsl.h};
    let newStorageObj = {...storageObj};
    let newThemesArr = storageObj.themes.map(theme => 
      theme.themeId === "themeId:5"
      ? theme = {...theme, userPrefs: y}
      : theme);
    newStorageObj.themes = newThemesArr;
    handleNewThemes(newThemesArr);
    handleNewObject(newStorageObj);
  }

  function handleOnChangeComplete(color, e) {
    console.log(color.hsl.h);

    // let y = {...staticLightUserPrefs, hslColorHue: color.hsl.h};
    // let newStorageObj = {...storageObj};
    // let newThemesArr = storageObj.themes.map(theme => 
    //   theme.id === 2
    //   ? theme = {...theme, userPrefs: y}
    //   : theme);
    // newStorageObj.themes = newThemesArr;
    // handleNewThemes(newThemesArr);
    // handleNewObject(newStorageObj);
  }

  if (!staticLightUserPrefs) {
    return <h1>loading</h1>
  } else {
    return (
      <div className="StaticLightTheme">
        <h2 style={{color: '#ff4f61'}}>Active Theme: Static Light</h2>
        <p style={{margin: '5px 0 0'}}>Pick and keep it on your favorite color.</p>
        <p style={{marginBottom: '10px'}}>Tip: For a white theme, turn saturation down to 0.</p>
        <form onSubmit={handleSave}>
          <div style={{height: '40px', display: 'flex', justifyContent: 'space-between', alignContent: 'center', alignItems: 'center'}}>
            <p>Hue:</p>
            <HuePicker width="250px" color={reactColor} onChange={handleChange2} onChangeComplete={handleOnChangeComplete} />
          </div>
          {/* <div style={{display: 'flex', justifyContent: 'space-between'}}>
            <label htmlFor="hslColorHue">Hue</label>
            <div>
              <input type="range" name="hslColorHue" min="50" max="360" value={staticLightUserPrefs.hslColorHue} step="10" onChange={handleChange} />
              <input type="number" min="50" max="360" name="hslColorHue" value={staticLightUserPrefs.hslColorHue} onChange={handleChange} style={{maxWidth: '40px'}} />
            </div>
          </div> */}
          <div style={{display: 'flex', justifyContent: 'space-between', height: '21px'}}>
            <label htmlFor="navbarLight">TopBar:</label>
            <div style={{display: 'flex', alignContent: 'center', alignItems: 'center'}}>
              <img src={TopBar} alt="svg" style={{height: '14px', width: '14px', marginRight: '8px'}} />
              <input type="range" name="navbarLight" min="50" max="100" value={staticLightUserPrefs.navbarLight} step="5" onChange={handleChange}  style={{width: '180px'}} />
              <input type="number" min="50" max="100" name="navbarLight" value={staticLightUserPrefs.navbarLight} onChange={handleChange} style={{maxWidth: '40px', backgroundColor: 'inherit', border: 0, borderBottom: '1px solid black', color: 'white'}} />
            </div>
          </div>
          <div style={{display: 'flex', justifyContent: 'space-between', height: '21px'}}>
            <label htmlFor="playPageLight">PlayPage:</label>
            <div style={{display: 'flex', alignContent: 'center', alignItems: 'center'}}>
              <img src={PlayPage} alt="svg" style={{height: '14px', width: '14px', marginRight: '8px'}} />
              <input type="range" name="playPageLight" min="50" max="100" value={staticLightUserPrefs.playPageLight} step="5" onChange={handleChange}  style={{width: '180px'}} />
              <input type="number" min="50" max="100" name="playPageLight" value={staticLightUserPrefs.playPageLight} onChange={handleChange} style={{maxWidth: '40px', backgroundColor: 'inherit', border: 0, borderBottom: '1px solid black', color: 'white'}} />
            </div>
          </div>
          <div style={{display: 'flex', justifyContent: 'space-between', height: '21px'}}>
            <label htmlFor="playBarLight">PlayBar:</label>
            <div style={{display: 'flex', alignContent: 'center', alignItems: 'center'}}>
              <img src={PlayBar} alt="svg" style={{height: '14px', width: '14px', marginRight: '8px'}} />
              <input type="range" name="playBarLight" min="50" max="100" value={staticLightUserPrefs.playBarLight} step="5" onChange={handleChange}  style={{width: '180px'}} />
              <input type="number" min="50" max="100" name="playBarLight" value={staticLightUserPrefs.playBarLight} onChange={handleChange} style={{maxWidth: '40px', backgroundColor: 'inherit', border: 0, borderBottom: '1px solid black', color: 'white'}} />
            </div>
          </div>
          <div style={{display: 'flex', justifyContent: 'space-between', height: '21px'}}>
            <label htmlFor="bgLight">Body:</label>
            <div style={{display: 'flex', alignContent: 'center', alignItems: 'center'}}>
              <img src={Body} alt="svg" style={{height: '14px', width: '14px', marginRight: '8px'}} />
              <input type="range" name="bgLight" min="50" max="100" value={staticLightUserPrefs.bgLight} step="5" onChange={handleChange}  style={{width: '180px'}} />
              <input type="number" min="50" max="100" name="bgLight" value={staticLightUserPrefs.bgLight} onChange={handleChange} style={{maxWidth: '40px', backgroundColor: 'inherit', border: 0, borderBottom: '1px solid black', color: 'white'}} />
            </div>
          </div>
          <div style={{display: 'flex', justifyContent: 'space-between', height: '21px'}}>
            <label htmlFor="saturation">Saturation:</label>
            <div style={{display: 'flex', alignContent: 'center', alignItems: 'center'}}>
              <OpacityIcon sx={{height: '18px', width: '18px', marginRight: '6px'}} />
              <input type="range" name="saturation" min="0" max="100" value={staticLightUserPrefs.saturation} step="5" onChange={handleChange}  style={{width: '180px'}} />
              <input type="number" min="0" max="100" name="saturation" value={staticLightUserPrefs.saturation} step="5" onChange={handleChange}  style={{maxWidth: '40px', backgroundColor: 'inherit', border: 0, borderBottom: '1px solid black', color: 'white'}} />
            </div>
          </div>
        </form>
      </div>
    );
  }
};

export default StaticLightSettings;
