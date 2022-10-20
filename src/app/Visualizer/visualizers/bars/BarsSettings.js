/** @jsx jsx */
import React from 'react';
import { jsx, css } from '@emotion/react';
import VariantButton from '../components/VariantButton';

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

function BarsSettings({visualizers, handleVisualizersChange}) {
  const [barsStorageObject, setBarsStorageObject] = React.useState();

  React.useEffect(() => {
    let obj = visualizers.find(visualizer => visualizer.visualizerId === "visualizerId:1")
    setBarsStorageObject(obj);
  }, [visualizers])

  const handleVariantClick = (e, id) => {
    let copy = {...barsStorageObject};
    copy.activeVariant = id;
    console.log(copy);
    setBarsStorageObject(copy);
    handleVisualizersChange(copy);
  }

  const handleBarSettingsChange = (e, id) => {
    let copy = {...barsStorageObject};
    copy[e.target.name] = Number(e.target.value);
    console.log(copy);
    setBarsStorageObject(copy);
    handleVisualizersChange(copy);
  }

  if (!barsStorageObject) {
    return <h1>hi</h1>
  } else {
    return (
      <div
        css={css`
          .MuiSlider-root {
            padding: 0;
          }
        `}
      >
        <h2 css={css`color: #ff3232; font-size: 16px; margin-bottom: 4px;`}>Active Visualizer: Bars</h2>
        <div>
          <form onSubmit={e => e.preventDefault()}>
            <div style={{display: 'flex', justifyContent: 'space-between', height: '21px'}}>
              <label htmlFor="barWidth">Bar Width:</label>
              <div style={{display: 'flex', alignContent: 'center', alignItems: 'center'}}>
                <StyledSlider name="barWidth" value={barsStorageObject.barWidth} onChange={handleBarSettingsChange} step={5} min={5} max={80} />
                <input type="number" min="5" max="80" name="barWidth" value={barsStorageObject.barWidth} onChange={handleBarSettingsChange} style={{maxWidth: '40px', backgroundColor: 'inherit', border: 0, borderBottom: '1px solid black', color: 'white', marginLeft: '8px'}} />
              </div>
            </div>
            <div style={{display: 'flex', justifyContent: 'space-between', height: '21px'}}>
              <label htmlFor="borderWidth">Border Width:</label>
              <div style={{display: 'flex', alignContent: 'center', alignItems: 'center'}}>
                <StyledSlider name="borderWidth" value={barsStorageObject.borderWidth} onChange={handleBarSettingsChange} step={1} min={0} max={10} />
                <input type="number" min="0" max="10" name="borderWidth" value={barsStorageObject.borderWidth} onChange={handleBarSettingsChange} style={{maxWidth: '40px', backgroundColor: 'inherit', border: 0, borderBottom: '1px solid black', color: 'white', marginLeft: '8px'}} />
              </div>
            </div>
            <div style={{display: 'flex', justifyContent: 'space-between', height: '21px'}}>
              <label htmlFor="gap">Gap Width:</label>
              <div style={{display: 'flex', alignContent: 'center', alignItems: 'center'}}>
                <StyledSlider name="gap" value={barsStorageObject.gap} onChange={handleBarSettingsChange} step={2} min={0} max={20} />
                <input type="number" min="0" max="20" name="gap" value={barsStorageObject.gap} onChange={handleBarSettingsChange} style={{maxWidth: '40px', backgroundColor: 'inherit', border: 0, borderBottom: '1px solid black', color: 'white', marginLeft: '8px'}} />
              </div>
            </div>
          </form>
          <p style={{marginBottom: '6px'}}>Style Variant:</p>
          <div 
            className="VariantsContainer" 
            css={{
              display: 'grid',
              gridTemplateColumns: '1fr 1fr 1fr',
              gridAutoRows: '1fr',
              gap: '10px'
            }}
          >
            {barsStorageObject.variants.map(variant => (
              <VariantButton
                key={variant.variantId} 
                id={variant.variantId} 
                onClick={e => handleVariantClick(e, variant.variantId)}
                isActive={variant.variantId === barsStorageObject.activeVariant}
                name={variant.name}
              />
            ))}
          </div>  
        </div>
      </div>
    )   
  }
}

export default BarsSettings;