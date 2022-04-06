/** @jsx jsx */
import React from 'react';
import { jsx } from '@emotion/react';
import { DynamicDarkSettings } from '../../themes/dynamic-dark/';
import { DynamicLightSettings } from '../../themes/dynamic-light/';
import { StaticDarkSettings } from '../../themes/static-dark/';
import { StaticLightSettings } from '../../themes/static-light/';
import { GlassSettings } from '../../themes/frosted-glass/';
import { OffSettings } from '../../themes/off/';
import ThemeButton from '../../components/ThemeButton';
import TopBar from '../../components/TopBar';
import BottomBar from '../../components/BottomBar';

console.log('Popup.jsx mounted')
const Popup = () => {
  const [storageObj, setStorageObj] = React.useState();
  const [activeTheme, setActiveTheme] = React.useState();
  const [themes, setThemes] = React.useState();

  React.useEffect(() => {
    console.log('first useEffect to set initial storage only supposedly')
    chrome.storage.sync.get(null, (res) => {
      setStorageObj(res);
      setActiveTheme(res.activeTheme);
      setThemes(res.themes);
    });

    addSaveOnExitListener();
  }, []);

  function addSaveOnExitListener() {
    window.addEventListener("blur", function(event) { 
      console.log('blur event')
      chrome.tabs.query({url: "https://music.youtube.com/*"}, tabs => {
        for (let tab of tabs) {
          chrome.tabs.sendMessage(tab.id, {message: 'save'}, (res) => {
            console.log(res)
          });
        }
      });
    });
  }

  React.useEffect(() => {
    console.log('hi')
    storageObj && chrome.tabs.query({url: "https://music.youtube.com/*"}, tabs => {
      for (let tab of tabs) {
        chrome.tabs.sendMessage(tab.id, {storageObj}, (res) => {
          console.log(res)
        });
      }
    });
  }, [storageObj])

  React.useEffect(() => {
    console.log('useEffect: activeTheme')
    chrome.tabs.query({url: "https://music.youtube.com/*"}, tabs => {
      for (let tab of tabs) {
        chrome.tabs.sendMessage(tab.id, {activeTheme}, (res) => {
          console.log(res)
        });
      }
    });
  }, [activeTheme])

  React.useEffect(() => {
    console.log('useEffect: themes')
    themes && chrome.tabs.query({url: "https://music.youtube.com/*"}, tabs => {
      for (let tab of tabs) {
        chrome.tabs.sendMessage(tab.id, {themes}, (res) => {
          console.log(res)
        });
      }
    });
  }, [themes])

  function handleActiveThemeChange(id) {
    console.log(id);
    let newStorageObj = {...storageObj};
    newStorageObj.activeTheme = id;
    setActiveTheme(id);
    setStorageObj(newStorageObj);
  }

  function handleNewObject(newObject) {
    setStorageObj(newObject);
  }

  function handleNewThemes(newThemes) {
    setThemes(newThemes);
  }

  function fetchSyncStorage() {
    chrome.storage.sync.get(null, (res) => {
      setStorageObj(res);
      setActiveTheme(res.activeTheme);
      setThemes(res.themes);
    });
  }

  let activeThemeSettings = () => {
    switch (storageObj.activeTheme) {
    case "themeId:0":
      return <OffSettings />
    case "themeId:1":
      return <DynamicDarkSettings storageObj={storageObj} handleNewObject={handleNewObject} handleNewThemes={handleNewThemes} />
    case "themeId:2":
      return <StaticDarkSettings storageObj={storageObj} handleNewObject={handleNewObject} handleNewThemes={handleNewThemes} />
    case "themeId:3":
      return <GlassSettings />
    case "themeId:4":
      return <DynamicLightSettings storageObj={storageObj} handleNewObject={handleNewObject} handleNewThemes={handleNewThemes} />
    case "themeId:5":
      return <StaticLightSettings storageObj={storageObj} handleNewObject={handleNewObject} handleNewThemes={handleNewThemes} />
    default:
      break;
    }
  };

  if (!storageObj) {
    return (
      <div>
        <h1>loading</h1>
        <BottomBar fetchSyncStorage={fetchSyncStorage} />
      </div>
    )
  } else {
    return (
      <div className="Popup">
        <TopBar storageObj={storageObj} />
        <div 
          className="ActiveThemeSettingsContainer" 
          css={{
            background: '#313131', 
            borderRadius: '5px', 
            margin: '5px', 
            minHeight: '150px', 
            padding: '5px 10px 10px'
          }}
        >
          {activeThemeSettings()}
        </div>
        <div 
          className="ThemesContainer" 
          css={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr 1fr',
            gridAutoRows: '1fr',
            gap: '16px',
            padding: '12px'
          }}
        >
          {storageObj.themes.map(theme => (
            <ThemeButton key={theme.themeId} themeDetails={theme} handleActiveThemeChange={handleActiveThemeChange} isActive={storageObj.activeTheme === theme.themeId} />
          ))}
        </div>
        <BottomBar fetchSyncStorage={fetchSyncStorage} />
      </div>
    );
  }
};

export default Popup;
