import React from 'react';
import { createRoot } from 'react-dom/client';
import Themes from './Themes';
import { store } from '../../store';
import { Provider  } from 'react-redux';

export function addThemesContainer() {
  const ytmusicapp = document.querySelector("ytmusic-app");
  let themesContainer;

  if (document.getElementById("themesContainer")) {
    document.getElementById("themesContainer").remove();
  }

  themesContainer = document.createElement("div");
  themesContainer.id = "themesContainer";

  ytmusicapp.prepend(themesContainer);

  const root = createRoot(themesContainer)
  root.render(<Provider store={store}><Themes /></Provider>)
}

export default addThemesContainer;

