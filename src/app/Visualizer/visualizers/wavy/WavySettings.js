/** @jsx jsx */
// import React from 'react';

import { jsx } from '@emotion/react';

import { useSelector, useDispatch } from 'react-redux';
import { changeVisualizers } from '../../visualizersSlice';

import { styled } from '@mui/material/styles';
import Slider from '@mui/material/Slider';

const StyledSlider = styled(Slider)`
  width: 180px;
  color: royalblue;

  .MuiSlider-thumb {
    color: #fff;
    border: 1px solid #fff;
    width: 14px;
    height: 14px;
  }

  .MuiSlider-thumb::after {
    width: 1px;
    height: 1px;
  }
`;

function WavySettings() {
  const dispatch = useDispatch();

  const visualizers = useSelector(state => state.visualizers.visualizers);
  const wavyStorageObject = useSelector(state => state.visualizers.visualizers.find(visualizer => (visualizer.visualizerId === "visualizerId:0")));

  const handleWavySettingsChange = (e, id) => {
    let copy = {...wavyStorageObject};
    copy[e.target.name] = Number(e.target.value);
    let newVisualizersArr = visualizers.map(visualizer => (
      visualizer.visualizerId === "visualizerId:0"
      ? copy
      : visualizer
    ));
    dispatch(changeVisualizers(newVisualizersArr));
    chrome.storage.local.set({visualizers: newVisualizersArr}, () => console.log('chrome.storage.local.set({visualizers}'))
  }

  return (
    <div>
      <h2 style={{color: '#ff4f61'}}>Active Visualizer: Wavy</h2>
      <p style={{margin: '5px 0 10px'}}>🌊 🌊 🌊</p>
      <div>
        <form onSubmit={e => e.preventDefault()}>
            <div style={{display: 'flex', justifyContent: 'space-between', height: '21px'}}>
              <label htmlFor="lineWidth">Line Width:</label>
              <div style={{display: 'flex', alignContent: 'center', alignItems: 'center'}}>
                <StyledSlider name="lineWidth" value={wavyStorageObject.lineWidth} onChange={handleWavySettingsChange} step={1} min={4} max={14} />
                <input 
                  type="number" 
                  min="4" 
                  max="14" 
                  name="lineWidth" 
                  value={wavyStorageObject.lineWidth} 
                  onChange={handleWavySettingsChange} 
                  style={{maxWidth: '40px', backgroundColor: 'inherit', border: 0, borderBottom: '1px solid black', color: 'white', marginLeft: '8px'}} 
                />
              </div>
            </div>
          </form>
      </div>
    </div>
  )
  
}

export default WavySettings;