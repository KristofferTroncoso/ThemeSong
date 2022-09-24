/** @jsx jsx */
import { jsx, css } from '@emotion/react';
import { useSelector } from 'react-redux';

import White from './variants/White';
import Black from './variants/Black';
import RGB from './variants/RGB';
import Accent from './variants/Accent';
import Palette from './variants/Palette';
import DancingPalette from './variants/DancingPalette';

function Bars({analyser, dataArray, bufferLength}) {
  const barsActiveVariant = useSelector(state => (
    state.visualizers.visualizers.find(visualizer => (visualizer.visualizerId  === "visualizerId:1")).activeVariant
  ));

  function returnActiveVariant() {
    switch (barsActiveVariant) {
      case "variantId:1":
        return <White analyser={analyser} dataArray={dataArray} bufferLength={bufferLength} />
      case "variantId:2":
        return <Black analyser={analyser} dataArray={dataArray} bufferLength={bufferLength} />
      case "variantId:3":
        return <RGB analyser={analyser} dataArray={dataArray} bufferLength={bufferLength} />
      case "variantId:4":
        return <Accent analyser={analyser} dataArray={dataArray} bufferLength={bufferLength} />
      case "variantId:5":
        return <Palette analyser={analyser} dataArray={dataArray} bufferLength={bufferLength} />
      case "variantId:6":
        return <DancingPalette analyser={analyser} dataArray={dataArray} bufferLength={bufferLength} />
      default:
        return <h1>Unknown Variant</h1>
    }
  }

  return (
    <div
      id="ts-Bars-container"
      css={css`
        position: absolute;
        bottom: 0;
        left: 0;
        height: 100%;
        width: 100%;
        border-radius: inherit;
      `}
    >
      {returnActiveVariant()}
    </div>
  )
}

export default Bars;




