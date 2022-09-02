import React from 'react';
import ReactDOM from 'react-dom';
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

  ReactDOM.render(<Provider store={store}><Logo /></Provider>, logoContainer);
}

export default addLogoContainer;

