/** @jsx jsx */
import { jsx, css } from '@emotion/react';
import { useStore } from '../../../store';

import RGB from './variants/RGB';
import Accent from './variants/Accent';
import Palette from './variants/Palette';
import Party from './variants/Party';
import Bubbles from './variants/Bubbles';
import OT9 from './variants/OT9';

function Circles({analyser, dataArray, bufferLength}) {
  const circlesActiveVariant = useStore(state => (
    state.visualizer.visualizerPrefs.find(visualizer => (visualizer.visualizerId  === "visualizerId:2")).activeVariant
  ));

  function returnActiveVariant() {
    switch (circlesActiveVariant) {
      case "variantId:1":
        return <RGB analyser={analyser} dataArray={dataArray} bufferLength={bufferLength} />
      case "variantId:2":
        return <Accent analyser={analyser} dataArray={dataArray} bufferLength={bufferLength} />
      case "variantId:3":
        return <Palette analyser={analyser} dataArray={dataArray} bufferLength={bufferLength} />
      case "variantId:4":
        return <Party analyser={analyser} dataArray={dataArray} bufferLength={bufferLength} />
      case "variantId:5":
        return <Bubbles analyser={analyser} dataArray={dataArray} bufferLength={bufferLength} />
      case "variantId:6":
        return <OT9 analyser={analyser} dataArray={dataArray} bufferLength={bufferLength} />
      default:
        return <h1>Unknown Variant</h1>
    }
  }

  return (
    <div
      id="ThemeSong-Visualizer-Circles-Container"
      css={css`
        position: absolute;
        bottom: 0;
        left: 0;
        height: 100%;
        width: 100%;
        border-radius: inherit;
        background: rgba(0,0,0,0.5);
      `}
    >
      {returnActiveVariant()}
    </div>
  )
}

export default Circles;




