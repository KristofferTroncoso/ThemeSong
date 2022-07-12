import React from 'react';
import ReactDOM from 'react-dom';
import Panel from './Panel';
import { store } from '../../app/store';
import { Provider  } from 'react-redux';

const middleControlButtonsDiv = document.querySelector(".middle-controls-buttons");

let panelContainer;

function addPanelContainer() {
  panelContainer = document.createElement('div');
  panelContainer.id = "ts-panel-container";

  if (document.getElementById("ts-panel-container") === null) {
    middleControlButtonsDiv.append(panelContainer);
  } else {
    document.getElementById("ts-panel-container").remove();
    middleControlButtonsDiv.append(panelContainer);
  }
}

addPanelContainer();

ReactDOM.render(<Provider store={store}><Panel /></Provider>, panelContainer);

