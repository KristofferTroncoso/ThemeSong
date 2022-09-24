import React from 'react';
import { createRoot } from 'react-dom/client';
import { store } from '../store';
import { Provider  } from 'react-redux';

import ContentScript from './ContentScript';
import { addCloudSyncStorageSyncer } from '../cloudStorageSyncer';

console.log('Content Script loaded');

addCloudSyncStorageSyncer();
insertContentScriptContainer();

function insertContentScriptContainer() {
  const ytmusicapp = document.querySelector("ytmusic-app");
  let themesongContainer;

  if (document.getElementById("ThemeSong-Container")) {
    document.getElementById("ThemeSong-Container").remove();
  }

  themesongContainer = document.createElement("div");
  themesongContainer.id = "ThemeSong-Container";

  ytmusicapp.append(themesongContainer);

  const root = createRoot(themesongContainer)
  root.render(<Provider store={store}><ContentScript /></Provider>)
}
