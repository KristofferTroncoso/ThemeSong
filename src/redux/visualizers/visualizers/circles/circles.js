/** @jsx jsx */
import { jsx, css } from '@emotion/react';
import { useSelector } from 'react-redux';

import RGB from './variants/RGB';

function Circles({analyser, dataArray, bufferLength}) {
  const circlesActiveVariant = useSelector(state => (
    state.visualizers.visualizers.find(visualizer => (visualizer.visualizerId  === "visualizerId:2")).activeVariant
  ));

  function returnActiveVariant() {
    switch (circlesActiveVariant) {
      case "variantId:1":
        return <RGB analyser={analyser} dataArray={dataArray} bufferLength={bufferLength} />
      case "variantId:2":
        return <RGB analyser={analyser} dataArray={dataArray} bufferLength={bufferLength} />
      case "variantId:3":
        return <RGB analyser={analyser} dataArray={dataArray} bufferLength={bufferLength} />
      case "variantId:4":
        return <RGB analyser={analyser} dataArray={dataArray} bufferLength={bufferLength} />
      case "variantId:5":
        return <RGB analyser={analyser} dataArray={dataArray} bufferLength={bufferLength} />
      case "variantId:6":
        return <RGB analyser={analyser} dataArray={dataArray} bufferLength={bufferLength} />
      default:
        return <h1>Unknown Variant</h1>
    }
  }

  return (
    <div
      id="ts-Circles-container"
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

export default Circles;




