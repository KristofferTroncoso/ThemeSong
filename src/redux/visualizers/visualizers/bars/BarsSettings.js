/** @jsx jsx */
import React from 'react';
import { jsx } from '@emotion/react';
import VariantButton from '../components/VariantButton';

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
      <div>
        <h2 style={{color: '#ff4f61', marginBottom: '4px'}}>Active Visualizer: Bars</h2>
        <div>
          <form onSubmit={e => e.preventDefault()}>
            <div style={{display: 'flex', justifyContent: 'space-between', height: '21px'}}>
              <label htmlFor="barWidth">Bar Width:</label>
              <div style={{display: 'flex', alignContent: 'center', alignItems: 'center'}}>
                <input type="range" name="barWidth" min="5" max="80" value={barsStorageObject.barWidth} step="5" onChange={handleBarSettingsChange} style={{width: '180px'}} />
                <input type="number" min="5" max="80" name="barWidth" value={barsStorageObject.barWidth} onChange={handleBarSettingsChange} style={{maxWidth: '40px', backgroundColor: 'inherit', border: 0, borderBottom: '1px solid black', color: 'white'}} />
              </div>
            </div>
            <div style={{display: 'flex', justifyContent: 'space-between', height: '21px'}}>
              <label htmlFor="borderWidth">Border Width:</label>
              <div style={{display: 'flex', alignContent: 'center', alignItems: 'center'}}>
                <input type="range" name="borderWidth" min="0" max="10" value={barsStorageObject.borderWidth} step="1" onChange={handleBarSettingsChange} style={{width: '180px'}} />
                <input type="number" min="0" max="10" name="borderWidth" value={barsStorageObject.borderWidth} onChange={handleBarSettingsChange} style={{maxWidth: '40px', backgroundColor: 'inherit', border: 0, borderBottom: '1px solid black', color: 'white'}} />
              </div>
            </div>
            <div style={{display: 'flex', justifyContent: 'space-between', height: '21px'}}>
              <label htmlFor="gap">Gap Width:</label>
              <div style={{display: 'flex', alignContent: 'center', alignItems: 'center'}}>
                <input type="range" name="gap" min="0" max="20" value={barsStorageObject.gap} step="2" onChange={handleBarSettingsChange} style={{width: '180px'}} />
                <input type="number" min="0" max="20" name="gap" value={barsStorageObject.gap} onChange={handleBarSettingsChange} style={{maxWidth: '40px', backgroundColor: 'inherit', border: 0, borderBottom: '1px solid black', color: 'white'}} />
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
              gap: '6px'
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