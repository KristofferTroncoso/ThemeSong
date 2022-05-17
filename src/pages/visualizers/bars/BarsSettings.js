/** @jsx jsx */
import React from 'react';
import { jsx, css } from '@emotion/react';
import VariantButton from '../../components/VariantButton';

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

  if (!barsStorageObject) {
    return <h1>hi</h1>
  } else {
    return (
      <div>
        <h2 style={{color: '#ff4f61'}}>Active Visualizer: Bars</h2>
        <p style={{margin: '5px 0 0'}}>Bars for bars.</p>
        <p style={{marginBottom: '10px'}}>Choose a variant for the Bars visualizer below.</p>
        <div>
          <div 
            className="VariantsContainer" 
            css={{
              display: 'grid',
              gridTemplateColumns: '1fr 1fr',
              gridAutoRows: '1fr',
              gap: '6px',
              padding: '2px'
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