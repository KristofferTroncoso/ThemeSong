import React from 'react';
import { createRoot } from 'react-dom/client';
import Logo from './Logo';
import { store } from '../../../../../store';
import { Provider  } from 'react-redux';

export function addLogoContainer() {
  console.log('addLogoContainer')
  const logoNode = document.querySelector("ytmusic-nav-bar #left-content");
  let logoContainer;

  if (document.getElementById("logoContainer")) {
    document.getElementById("logoContainer").remove();
  }

  logoContainer = document.createElement("div");
  logoContainer.id = "logoContainer";

  logoNode.append(logoContainer);

  const root = createRoot(logoContainer)
  root.render(<Provider store={store}><Logo /></Provider>)
}

export default addLogoContainer;

