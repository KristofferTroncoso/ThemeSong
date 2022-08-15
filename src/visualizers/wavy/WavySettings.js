/** @jsx jsx */
// import React from 'react';

import { jsx } from '@emotion/react';

import { useSelector, useDispatch } from 'react-redux';
import { changeVisualizers } from '../../redux/visualizers/visualizersSlice';

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
                <input 
                  type="range" 
                  name="lineWidth" 
                  min="4" 
                  max="14" 
                  value={wavyStorageObject.lineWidth} 
                  step="1" 
                  onChange={handleWavySettingsChange} 
                  style={{width: '180px'}} 
                />
                <input 
                  type="number" 
                  min="4" 
                  max="14" 
                  name="lineWidth" 
                  value={wavyStorageObject.lineWidth} 
                  onChange={handleWavySettingsChange} 
                  style={{maxWidth: '40px', backgroundColor: 'inherit', border: 0, borderBottom: '1px solid black', color: 'white'}} 
                />
              </div>
            </div>
          </form>
      </div>
    </div>
  )
  
}

export default WavySettings;