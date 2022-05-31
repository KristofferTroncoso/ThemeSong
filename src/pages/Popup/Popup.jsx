/** @jsx jsx */
import React from 'react';
import { jsx, css } from '@emotion/react';
import { DynamicDarkSettings } from '../themes/dynamic-dark/';
import { DynamicLightSettings } from '../themes/dynamic-light/';
import { StaticDarkSettings } from '../themes/static-dark/';
import { StaticLightSettings } from '../themes/static-light/';
import { GlassSettings } from '../themes/frosted-glass/';
import { OffSettings } from '../themes/off/';
import ThemeButton from '../components/ThemeButton';
import TabButton from '../components/TabButton';
import TopBar from '../components/TopBar';
import BottomBar from '../components/BottomBar';

import VisualizerPage from './pages/VisualizersPage';

console.log('Popup.jsx mounted')
const Popup = () => {
  const [storageObj, setStorageObj] = React.useState();
  const [activeTheme, setActiveTheme] = React.useState();
  const [activePage, setActivePage] = React.useState(1);
  const [experimentalAutoUseDeviceDarkLightMode, setExperimentalAutoUseDeviceDarkLightMode] = React.useState();
  const [themes, setThemes] = React.useState();

  React.useEffect(() => {
    console.log('first useEffect to set initial storage only supposedly')
    chrome.storage.sync.get(["activePage", "activeTheme", "activeVisualizer", "extensionVersion", "options", "themes", "experimentalAutoUseDeviceDarkLightMode"], (res) => {
      console.log(res);
      setStorageObj(res);
      setActivePage(res.activePage);
      setActiveTheme(res.activeTheme);
      setExperimentalAutoUseDeviceDarkLightMode(res.experimentalAutoUseDeviceDarkLightMode);
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

  let activePageCalc = () => {
    console.log('active page is');
    console.log(activePage);
    switch (activePage) {
      case 1:
        return (
          <div>
            <div 
              className="ActiveThemeSettingsContainer" 
              css={{
                background: '#111111', 
                borderRadius: '5px', 
                border: '2px solid #135eeb',
                margin: '10px 5px 5px 5px', 
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
            <div id="ThemesExtraOptions" style={{border: '2px solid #135eeb', padding: '5px', margin: '15px 5px 5px'}}>
              <span>experimentalAutoUseDeviceDarkLightMode: </span>
              <input 
                type="checkbox" 
                checked={experimentalAutoUseDeviceDarkLightMode} 
                onChange={e => {
                  chrome.storage.sync.set({experimentalAutoUseDeviceDarkLightMode: !experimentalAutoUseDeviceDarkLightMode});
                  setExperimentalAutoUseDeviceDarkLightMode(!experimentalAutoUseDeviceDarkLightMode);
                }} 
              />
            </div>
          </div>
        );
      case 2:
        return <VisualizerPage />;
      default:
        return <h1>mama mia</h1>
    }
  }

  function handleTabButtonClick(e, id) {
    console.log('tab button click');
    console.log(storageObj);
    console.log(activePage);
    setActivePage(id);
    chrome.storage.sync.set({activePage: id}, () => {
      console.log('storage set')
    });
    chrome.storage.sync.get(["activePage"], res => console.log(res))
  }

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
        <div id="TabBar" css={css`padding-top: 4px; background-color: #000;`}>
          <TabButton key={1} id={1} isActive={activePage === 1} onClick={e => handleTabButtonClick(e, 1)}>Themes</TabButton>
          <TabButton key={2} id={2} isActive={activePage === 2} onClick={e => handleTabButtonClick(e, 2)}>Visualizers</TabButton>
        </div>
        {activePageCalc()}
        <BottomBar fetchSyncStorage={fetchSyncStorage} />
      </div>
    );
  }
};

export default Popup;
