import React from 'react';
import ReactDOM from 'react-dom';

import { store } from '../../store';
import { Provider } from 'react-redux';

import VisualizerToggleButton from './components/VisualizerToggleButton';
import Visualizer from './Visualizer';

function addVisualizerContainer() {
  let ytmusicplayer = document.querySelector("ytmusic-player")
  let tsvisualizercontainer;

  /* if i want to do the audioCtx.close() trick in Visualizer.js, i have to
    comment out or remove the following 3 lines. */
  if (document.getElementById("ts-visualizer-container")) {
    document.getElementById("ts-visualizer-container").remove();
  }

  ytmusicplayer.appendChild(document.createElement('div')).id = 'ts-visualizer-container';
  tsvisualizercontainer = document.getElementById("ts-visualizer-container");
  tsvisualizercontainer.style.borderRadius = "inherit";
  // tsvisualizercontainer.style.border = "1px solid lightgreen";
  tsvisualizercontainer.style.height = "100%";
  tsvisualizercontainer.style.width = "100%";

  if (!tsvisualizercontainer) {
    ytmusicplayer.appendChild(document.createElement('canvas')).id = 'ts-visualizer-canvas';
  }

  ytmusicplayer.append(tsvisualizercontainer);

  ReactDOM.render(
    <Provider store={store}>
      <Visualizer />
    </Provider>, 
    tsvisualizercontainer
  );
}

function addVisualizerButton() {
  const topRowButtons = document.querySelector('.top-row-buttons');
  let visualizerDivContainer;

  if (document.getElementById("visualizerDivContainer")) {
    document.getElementById("visualizerDivContainer").remove();
  }

  visualizerDivContainer = document.createElement("span");
  visualizerDivContainer.id = "visualizerDivContainer";

  topRowButtons.prepend(visualizerDivContainer);

  ReactDOM.render(<Provider store={store}><VisualizerToggleButton /></Provider>, visualizerDivContainer);
}


export function addVisualizerFeature() {
  addVisualizerContainer();
  addVisualizerButton();
}

export default addVisualizerFeature;
