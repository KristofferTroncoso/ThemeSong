import React from 'react';
import ReactDOM from 'react-dom';
import Panel from './Panel';
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

ReactDOM.render(<Panel />, panelContainer);

