/** @jsx jsx */
import React from 'react';
import { jsx, css } from '@emotion/react';
import VisualizerButton from '../../components/VisualizerButton';
import WavySettings from '../../visualizers/wavy/WavySettings';
import BarsSettings from '../../visualizers/bars/BarsSettings';

function VisualizersPage() {
  const [activeVisualizer, setActiveVisualizer] = React.useState();
  const [visualizers, setVisualizers] = React.useState([
    {
      visualizerId: "visualizerId:0",
      name: "Wavy"
    },
    {
      visualizerId: "visualizerId:1",
      name: "Bars",
      activeVariant: "variantId:5",
      variants: [
        {
          variantId: "variantId:1",
          name: "Static White"
        },
        {
          variantId: "variantId:2",
          name: "RGB"
        },
        {
          variantId: "variantId:3",
          name: "Accent"
        },
        {
          variantId: "variantId:4",
          name: "Palette"
        },
        {
          variantId: "variantId:5",
          name: "Dancing Palette"
        }
      ]
    }
  ]);

  React.useEffect(() => {
    chrome.storage.sync.get(["activeVisualizer", "visualizers"], (res) => {
      console.log('Visualizers page useeffect')
      console.log(res);
      setActiveVisualizer(res.activeVisualizer);
      setVisualizers(res.visualizers);
      console.log(res.visualizers);
    });
  }, []);

  const handleVisualizerClick = (e, id) => {
    setActiveVisualizer(id);
    console.log(id);
    chrome.storage.sync.set({activeVisualizer: id});
    chrome.tabs.query({url: "https://music.youtube.com/*"}, tabs => {
      for (let tab of tabs) {
        chrome.tabs.sendMessage(tab.id, {activeVisualizer: id}, (res) => {
          console.log(res)
        });
      }
    });
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
    setVisualizers(newCopy);
    chrome.storage.sync.set({visualizers: newCopy});
    chrome.tabs.query({url: "https://music.youtube.com/*"}, tabs => {
      for (let tab of tabs) {
        chrome.tabs.sendMessage(tab.id, {visualizers: newCopy}, (res) => {
          console.log(res)
        });
      }
    });
  }

  let activeVisualizerSettings = () => {
    switch (activeVisualizer) {
      case "visualizerId:0":
        return <WavySettings />
      case "visualizerId:1":
        return <BarsSettings visualizers={visualizers} handleVisualizersChange={visualizerObject => handleVisualizersChange(visualizerObject)} />
      default:
        break;
    }
  };


  if (!activeVisualizer) {
    return <h1>hello</h1>
  } else {
    return (
      <div>
        <h2 css={css`font-size: 12px; font-weight: 400; padding: 4px 5px 0;`}>Toggle on the visualizer by hovering the album art and clicking on the 🥽 visualizer icon</h2>
        <div 
          className="ActiveVisualizerSettingsContainer" 
          css={{
            background: '#111111', 
            borderRadius: '5px', 
            border: '1px solid #135eeb',
            margin: '10px 5px 5px 5px', 
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
}

export default VisualizersPage;