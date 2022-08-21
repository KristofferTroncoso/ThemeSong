import React from 'react';
import ReactDOM from 'react-dom';
import Themes from './Theme';
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

  ReactDOM.render(<Provider store={store}><Themes /></Provider>, themesContainer);
}

export default addThemesContainer;

