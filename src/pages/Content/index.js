import React from 'react';
import ReactDOM from 'react-dom';
import { store } from '../../redux/store';
import { Provider  } from 'react-redux';

import ContentScript from './ContentScript';
import { addCloudSyncStorageSyncer } from '../../redux/cloudStorageSyncer';

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

  ReactDOM.render(
    <Provider store={store}>
      <ContentScript />
    </Provider>, 
    themesongContainer
  );
}
