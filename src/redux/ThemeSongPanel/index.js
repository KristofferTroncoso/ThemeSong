import React from 'react';
import ReactDOM from 'react-dom';
import Panel from './Panel';
import { store } from '../store';
import { Provider  } from 'react-redux';

function PanelContainer() {
  React.useEffect(() => {
    const middleControlButtonsDiv = document.querySelector(".middle-controls-buttons");
    let panelContainer;
  
    panelContainer = document.createElement('div');
    panelContainer.id = "ts-panel-container";
  
    if (document.getElementById("ts-panel-container") === null) {
      middleControlButtonsDiv.append(panelContainer);
    } else {
      document.getElementById("ts-panel-container").remove();
      middleControlButtonsDiv.append(panelContainer);
    }
  
    ReactDOM.render(<Provider store={store}><Panel /></Provider>, panelContainer);
  }, [])

  return null;
}

export default PanelContainer;

