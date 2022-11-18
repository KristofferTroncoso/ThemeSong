/** @jsx jsx */
import { jsx, css } from '@emotion/react';
import { useStore } from '../../../store';

import White from './variants/White';
import Black from './variants/Black';
import RGB from './variants/RGB';
import Accent from './variants/Accent';
import Palette from './variants/Palette';
import DancingPalette from './variants/DancingPalette';

function Bars({analyser, dataArray, bufferLength}) {
  const barsActiveVariant = useStore(state => (
    state.visualizer.visualizers.find(visualizer => (visualizer.visualizerId  === "visualizerId:1")).activeVariant
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
      id="ThemeSong-Visualizer-Bars-Container"
      css={css`
        position: absolute;
        bottom: 0;
        left: 0;
        height: 100%;
        width: 100%;
        border-radius: inherit;
        background: linear-gradient(180deg, rgba(0,0,0,0.2) 0%, rgba(0,0,0,0.6) 70%,  rgba(0,0,0,0.8) 100%);
      `}
    >
      {returnActiveVariant()}
    </div>
  )
}

export default Bars;




