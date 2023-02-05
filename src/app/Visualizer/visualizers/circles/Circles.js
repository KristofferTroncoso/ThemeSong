import { css } from "@emotion/react";
import { useStore } from "/src/app/store";

import RGB from "./variants/RGB";
import Accent from "./variants/Accent";
import Palette from "./variants/Palette";
import Party from "./variants/Party";
import Bubbles from "./variants/Bubbles";
import OT9 from "./variants/OT9";

function Circles({ analyser, dataArray, bufferLength }) {
  const circlesActiveVariant = useStore(
    (state) =>
      state.visualizer.visualizerPrefs.find(
        (visualizer) => visualizer.id === "685d0ec7-5c52-4e48-a43d-11184a39f3da"
      ).activeVariant
  );

  function returnActiveVariant() {
    switch (circlesActiveVariant) {
      case "2040b849-8c7c-4290-8ff8-c0d7716cca77":
        return (
          <RGB
            analyser={analyser}
            dataArray={dataArray}
            bufferLength={bufferLength}
          />
        );
      case "820e69c5-1531-44b7-8da4-5d43c1b17bfe":
        return (
          <Accent
            analyser={analyser}
            dataArray={dataArray}
            bufferLength={bufferLength}
          />
        );
      case "b82df5dd-c7f4-4cc1-ad23-9e2b70ca491b":
        return (
          <Palette
            analyser={analyser}
            dataArray={dataArray}
            bufferLength={bufferLength}
          />
        );
      case "6b14efe2-f082-4f23-9186-8dad394d0b55":
        return (
          <Party
            analyser={analyser}
            dataArray={dataArray}
            bufferLength={bufferLength}
          />
        );
      case "7dbd8080-84cc-47a8-b199-cfe12c3d9e67":
        return (
          <Bubbles
            analyser={analyser}
            dataArray={dataArray}
            bufferLength={bufferLength}
          />
        );
      case "aadb67e9-ee59-45f3-8335-d34a39223525":
        return (
          <OT9
            analyser={analyser}
            dataArray={dataArray}
            bufferLength={bufferLength}
          />
        );
      default:
        return <h1>Unknown Variant</h1>;
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
        background: rgba(0, 0, 0, 0.5);
      `}
    >
      {returnActiveVariant()}
    </div>
  );
}

export default Circles;
