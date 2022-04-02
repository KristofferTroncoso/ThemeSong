import * as Vibrant from "node-vibrant";
import logPalette from './modules/logPalette';
import themes from '../../themes';

// const songImg = document.querySelector('#song-image img#img');
const playerBarSongImgNode = document.querySelector(".middle-controls .thumbnail-image-wrapper img");

let storageObj = {};
let songChangeObserver;
let palette;
let mostPopulatedColor;

console.log('content script loaded');

setTimeout(() => {
  chrome.storage.sync.get(null, (res) => {
    console.log('chrome.storage.sync.get()')
    addSongChangeObserver();
    addStylesheet(res.activeTheme);

    storageObj = res;
    if (playerBarSongImgNode.src !== "https://music.youtube.com/") {
      processThemeOnInitialLoad(res.activeTheme);
    } else {
      processThemeOnInitialLoad(res.activeTheme);
    }
  });
}, 1000);


chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
  console.log(`content-script: message received`);
  console.log(message);
  let messageKey = Object.keys(message)[0];

  switch (messageKey) {
    case "message":
      console.log(message[messageKey]);
      storageObj && chrome.storage.sync.set(storageObj, res => console.log);
      sendResponse('yoyo')
      break;

    case "activeTheme":
      console.log('case activeTheme')
      console.log(message[messageKey]);
      addStylesheet(message[messageKey]);
      if (playerBarSongImgNode.src !== "https://music.youtube.com/") {
        processThemeOnInitialLoad(message[messageKey]);
        // processThemeOnPrefsChange(message[messageKey].activeTheme);
      } else {
        // processThemeOnPrefsChange(message[messageKey].activeTheme);
        processThemeOnInitialLoad(message[messageKey]);
      }
      break;

    case "themes":
      console.log('case themes')
      console.log(message[messageKey]);
      processThemeOnPrefsChange(storageObj.activeTheme)
      break;

    case "storageObj":
      console.log('received storageObj');
      console.log(message[messageKey]);
      storageObj = message[messageKey];

      sendResponse('received storageObj');
      break;
      
    default:
      console.log('default')
  }
});


function addStylesheet(themeId) {
  console.log('addStylesheet');
  console.log(themeId)
  const stylesheetNameObj = {
    "themeId:0": themes.off.css,
    "themeId:1": themes.dynamicdark.css,
    "themeId:2": themes.staticdark.css,
    "themeId:3": themes.glass.css,
    "themeId:4": themes.dynamiclight.css,
    "themeId:5": themes.staticlight.css
  };

  const tscustomstyle = document.getElementById("themesong-extension-active-theme-stylesheet");
  if (!tscustomstyle === true) {
    let style = document.createElement("style");
    style.id = "themesong-extension-active-theme-stylesheet";
    style.appendChild(document.createTextNode(stylesheetNameObj[themeId]));
    document.head.appendChild(style);
  } else {
    tscustomstyle.firstChild && tscustomstyle.removeChild(tscustomstyle.firstChild);
    tscustomstyle.appendChild(document.createTextNode(stylesheetNameObj[themeId]));
  }
}

function processThemeOnPrefsChange(activeThemeId) {
  switch (activeThemeId) {
    case "themeId:0":
      console.log('OFF. No theme active');
      themes.off.process();
      break;
    case "themeId:1":
      console.log('Dynamic Dark theme is active');
      themes.dynamicdark.process(storageObj, mostPopulatedColor.hsl);
      break;
    case "themeId:2":
      console.log('Static dark theme is active');
      themes.staticdark.process(storageObj);
      break;
    case "themeId:3":
      console.log('glass');
      themes.glass.process();
      break;
    case "themeId:4":
      console.log('dynamic light');
      themes.dynamiclight.process(storageObj, mostPopulatedColor.hsl);
      break;
    case "themeId:5":
      console.log('Static light theme is active');
      themes.staticlight.process(storageObj);
      break;
    default:
      console.log('no active theme');
  }
}

function processThemeOnInitialLoad(activeThemeId) {
  switch (activeThemeId) {
    case "themeId:0":
      console.log('OFF. No theme active');
      themes.off.process();
      break;
    case "themeId:1":
      console.log('Dynamic Dark theme is active');
      getVibrantPalette()
      .then((palette) => {
        console.log('palette received');
        console.log(palette);
        mostPopulatedColor = getMostPopulatedColor(palette);
        themes.dynamicdark.process(storageObj, mostPopulatedColor.hsl);
        logPalette(palette);
      })
      .catch((err) => {
        console.log('vibrant error');
        console.log(err);
      });
      break;
    case "themeId:2":
      console.log('Static dark theme is active');
      themes.staticdark.process(storageObj);
      break;
    case "themeId:3":
      console.log('glass');
      themes.glass.processInitial();
      break;
    case "themeId:4":
      console.log('dynamic light');
      getVibrantPalette()
      .then((palette) => {
        console.log('palette received');
        console.log(palette);
        mostPopulatedColor = getMostPopulatedColor(palette);
        themes.dynamiclight.process(storageObj, mostPopulatedColor.hsl);
        logPalette(palette);
      })
      .catch((err) => {
        console.log('vibrant error');
        console.log(err);
      });
      break;
    case "themeId:5":
      console.log('Static light theme is active');
      themes.staticlight.process(storageObj);
      break;
    default:
      console.log('no active theme');
  }
};


function processThemeOnSongChange(activeThemeId) {
  switch (activeThemeId) {
    case "themeId:1":
      console.log('Dynamic Dark theme is active');
      themes.dynamicdark.process(storageObj, mostPopulatedColor.hsl);
      logPalette(palette);
      break;
    case "themeId:3":
      console.log('glass');
      themes.glass.processSongChange(playerBarSongImgNode.src);
      break;
    case "themeId:4":
      console.log('dynamic light');
      themes.dynamiclight.process(storageObj, mostPopulatedColor.hsl);
      logPalette(palette);
      break;
    default:
      console.log('no processing required.')
  }
};


function addSongChangeObserver() {
  playerBarSongImgNode.crossOrigin = "anonymous";

  function handleSongChange(mutationList) {
    console.log('song changed');
    try {
      chrome.runtime.sendMessage('r u still there?');

      if (playerBarSongImgNode.src !== "https://music.youtube.com/") {
        if (mutationList[0].oldValue === playerBarSongImgNode.src) {
          console.log('same song image')
        } else {
          console.log('song image changed');
          setTimeout(() => {
            getVibrantPalette()
            .then((vPalette) => {
              console.log('palette received');
              console.log(vPalette);
              palette = vPalette;
              mostPopulatedColor = getMostPopulatedColor(vPalette);
              processThemeOnSongChange(storageObj.activeTheme);
            })
            .catch((err) => {
              console.log('vibrant error');
              console.log(err);
            });
          }, 1);
        }
      }
    } catch {
      songChangeObserver.disconnect();
    }
  }
  
  songChangeObserver = new MutationObserver(handleSongChange);

  songChangeObserver.observe(playerBarSongImgNode, {
    attributeFilter: ["src"],
    attributeOldValue: true
  });
};

function getVibrantPalette() {
  console.log('getting palette hsl');
  console.log(playerBarSongImgNode.src);
  return Vibrant.from(playerBarSongImgNode.src)
  .quality(1)
  // .addFilter(brownFilter)
  .getPalette();

  function yellowFilter(r, g, b, a) {
    // taking out browns, yellows, and accidentally oranges... i want to allow some orange though.
    return a >= 125 && !(r > 50 && g > 50 && b < 120)
  }

  function updatedYellowFilter(r, g, b, a) {
    return a >= 180 && !(r > 150 && g > 150 && b < 100)
  }

  function brownFilter(r, g, b, a) {
    // taking out some muted browns
    return a >= 125 && !(r > 50 && r < 150 && g > 50 && g < 180 && b < 40)
  }
}

function getMostPopulatedColor(palette) {
	let mostPopulatedColor = {population: 0};
	
	for (const [key, value] of Object.entries(palette)) {
		if (value.population >= mostPopulatedColor.population) {
			mostPopulatedColor = value;
		}
	}
	return mostPopulatedColor;
}