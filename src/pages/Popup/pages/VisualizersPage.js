/** @jsx jsx */
import React from 'react';
import { jsx, css } from '@emotion/react';
import VisualizerButton from '../../../components/VisualizerButton';
import WavySettings from '../../../visualizers/wavy/WavySettings';
import BarsSettings from '../../../visualizers/bars/BarsSettings';
import CirclesSettings from '../../../visualizers/circles/CirclesSettings';

import { useSelector, useDispatch } from 'react-redux';
import { changeActiveVisualizer, changeVisualizers } from '../../../redux/visualizers/visualizersSlice';

function VisualizersPage() {
  const dispatch = useDispatch();
  
  const activeVisualizer = useSelector(state => state.visualizers.activeVisualizer);
  const visualizers = useSelector(state => state.visualizers.visualizers)

  const handleVisualizerClick = (e, id) => {
    dispatch(changeActiveVisualizer(id));
  }

  const handleVisualizersChange = visualizerObject => {
    console.log(visualizerObject);
    let visualizersCopy = [...visualizers];
    let newCopy = visualizersCopy.map(visualizer => {
      if (visualizer.visualizerId === visualizerObject.visualizerId) {
        return visualizerObject;
      } else {
        return visualizer;
      }
    });
    dispatch(changeVisualizers(newCopy));
  }

  let activeVisualizerSettings = () => {
    switch (activeVisualizer) {
      case "visualizerId:0":
        return <WavySettings visualizers={visualizers} handleVisualizersChange={visualizerObject => handleVisualizersChange(visualizerObject)} />
      case "visualizerId:1":
        return <BarsSettings visualizers={visualizers} handleVisualizersChange={visualizerObject => handleVisualizersChange(visualizerObject)} />
      case "visualizerId:2":
        return <CirclesSettings visualizers={visualizers} handleVisualizersChange={visualizerObject => handleVisualizersChange(visualizerObject)} />
      default:
        break;
    }
  };



  return (
    <div>
      <h2 css={css`font-size: 12px; font-weight: 400; padding: 4px 5px 0;`}>Toggle on the visualizer by hovering the album art and clicking on the 🥽 visualizer icon.</h2>
      <h2 
        css={css`
          font-size: 11px; 
          font-weight: 400; 
          padding: 0 5px; 
          text-align: right;
        `}
      >
        <span
          css={css`
            padding: 0 3px 3px; 
            background-color: #820101; 
            border-radius: 3px;
            border: 1px solid #a30000;
            color: white;
          `}
        >
          ⚠ Warnings: Photosensitivity 😵, Energy Usage 🔋
        </span>
      </h2>
      <div 
        className="ActiveVisualizerSettingsContainer" 
        css={{
          background: '#111111', 
          borderRadius: '5px', 
          border: '2px solid #135eeb',
          margin: '6px 5px 5px 5px', 
          minHeight: '150px', 
          padding: '5px 10px 10px'
        }}
      >
        {activeVisualizerSettings()}
      </div>
      <div 
        className="VisualizersContainer" 
        css={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr 1fr',
          gridAutoRows: '1fr',
          gap: '16px',
          padding: '12px'
        }}
      >
        {visualizers.map(visualizer => (
          <VisualizerButton
            key={visualizer.visualizerId} 
            id={visualizer.visualizerId} 
            onClick={e => handleVisualizerClick(e, visualizer.visualizerId)}
            isActive={visualizer.visualizerId === activeVisualizer}
            name={visualizer.name}
          />
        ))}
      </div>      
    </div>
  )
  
}

export default VisualizersPage;