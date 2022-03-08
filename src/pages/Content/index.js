import { off, processOffTheme } from '../../themes/off/';
import { glassCSS, processGlassThemeOnInitial, processGlassThemeOnSongChange} from '../../themes/frosted-glass/';
import { dynamicdark, getVibrantHSL, processColors } from '../../themes/dynamic-dark/';
import { processStaticDark, static_dark_css } from '../../themes/static-dark/';

// const songImg = document.querySelector('#song-image img#img');
const playerBarSongImg = document.querySelector(".middle-controls .thumbnail-image-wrapper img");

let storageObj = {};
let songChangeObserver;
let bestImgAvailable;
let vibrantHSL;

console.log('content script loaded');

setTimeout(() => {
  chrome.storage.sync.get(null, (res) => {
    console.log('chrome.storage.sync.get()')
    addSongChangeObserver(res.activeTheme);
    addStylesheet(res.activeTheme);
    turnOnSongChangeObserver();
    storageObj = res;
    if (playerBarSongImg.src !== "https://music.youtube.com/") {
      getSongImg();
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
      if (playerBarSongImg.src !== "https://music.youtube.com/") {
        getSongImg();
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
    "themeId:0": off,
    "themeId:1": dynamicdark,
    "themeId:2": static_dark_css,
    "themeId:3": glassCSS
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
      processOffTheme();
      break;
    case "themeId:1":
      console.log('Dynamic Dark theme is active');
      // turnOnSongChangeObserver();
      processColors(storageObj, vibrantHSL);
      break;
    case "themeId:2":
      console.log('Static dark theme is active');
      processStaticDark(storageObj);
      break;
    case "themeId:3":
      console.log('glass');
      // turnOnSongChangeObserver();
      processGlassThemeOnInitial();
      break;
    default:
      console.log('no active theme');
  }
}

function processThemeOnInitialLoad(activeThemeId) {
  switch (activeThemeId) {
    case "themeId:0":
      console.log('OFF. No theme active');
      processOffTheme();
      break;
    case "themeId:1":
      console.log('Dynamic Dark theme is active');
      // processDynamicDark(storageObj, bestImgAvailable);
      setTimeout(() => {
        getVibrantHSL(bestImgAvailable)
        .then((palette) => {
          console.log('palette received')
          console.log(palette);
          vibrantHSL = palette.Vibrant.hsl;
          processColors(storageObj, palette.Vibrant.hsl);
        })
        .catch((err) => {
          console.log('vibrant error')
          console.log(err)
        });
      }, 1)
      break;
    case "themeId:2":
      console.log('Static dark theme is active');
      processStaticDark(storageObj);
      break;
    case "themeId:3":
      console.log('glass');
      // turnOnSongChangeObserver();
      processGlassThemeOnInitial();
      break;
    default:
      console.log('no active theme');
  }
};


function processThemeOnSongChange(activeThemeId) {
  // turnOnSongChangeObserver();
  switch (activeThemeId) {
    case "themeId:1":
      console.log('Dynamic Dark theme is active');
      // processDynamicDark(storageObj, bestImgAvailable);
      setTimeout(() => {
        getVibrantHSL(bestImgAvailable)
        .then((palette) => {
          console.log('palette received');
          console.log(palette);
          vibrantHSL = palette.Vibrant.hsl;
          processColors(storageObj, palette.Vibrant.hsl);
        })
        .catch((err) => {
          console.log('vibrant error');
          console.log(err);
        });
      }, 1);
      break;
    case "themeId:3":
      console.log('glass');
      processGlassThemeOnSongChange(bestImgAvailable);
      break;
    default:
      console.log('no processing required.')
  }
};


function getSongImg() {
    // prioritizes large album artwork but if not available, (e.g. if it's a video) its best to go for playBar img.
    // i disabled it since the smaller playerBarSongImg works just fine with my themes.

    // if (songImg.src.charAt(0) === "d") {
    //   bestImgAvailable = playerBarSongImg.src;
    // } else {
    //   bestImgAvailable = songImg.src;
    // }

    bestImgAvailable = playerBarSongImg.src;
    console.log(`best available img is ${bestImgAvailable}`);
}


function addSongChangeObserver(activeThemeId) {
  // songImg.crossOrigin = "anonymous";
  playerBarSongImg.crossOrigin = "anonymous";
  
  songChangeObserver = new MutationObserver(handleSongChange);
};

function turnOnSongChangeObserver() {
  console.log(`turnOnSongChangeObserver`);

  songChangeObserver.observe(playerBarSongImg, {
    attributeFilter: ["src"],
    attributeOldValue: true
  });
}

function handleSongChange(mutationList) {
  console.log('song changed');
  setTimeout(() => {
    if (playerBarSongImg.src !== "https://music.youtube.com/") {
      if (mutationList[0].oldValue === playerBarSongImg.src) {
        console.log('same song image')
      } else {
        console.log('song image changed');
        getSongImg();
        processThemeOnSongChange(storageObj.activeTheme);
      }
    }
  }, 1);
}
