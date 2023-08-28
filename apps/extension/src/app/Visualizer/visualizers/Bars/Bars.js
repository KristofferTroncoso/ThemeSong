import { css } from "@emotion/react";
import { useStore } from "/src/app/store";

import RGB from "./variants/RGB";
import Accent from "./variants/Accent";
import Palette from "./variants/Palette";
import DancingPalette from "./variants/DancingPalette";

function Bars({ analyser }) {
  const barsActiveVariant = useStore(
    (state) =>
      state.visualizer.prefs.find((visualizer) => visualizer.id === "51dc50c8-eb06-4086-ad9c-a89758f63db6")
        .activeVariant
  );
  const bufferLength = 1024;
  const dataArray = new Uint8Array(analyser.frequencyBinCount);

  function returnActiveVariant() {
    switch (barsActiveVariant) {
      case "12bfd49e-47a2-4cc8-90a9-3e669f7a0c78":
        return <RGB analyser={analyser} dataArray={dataArray} bufferLength={bufferLength} />;
      case "c67d53cf-d708-4d31-93e8-c01819e70248":
        return <Accent analyser={analyser} dataArray={dataArray} bufferLength={bufferLength} />;
      case "f1b5822f-32a1-4232-87fa-620963c49f0e":
        return <Palette analyser={analyser} dataArray={dataArray} bufferLength={bufferLength} />;
      case "f3015c0d-1528-4615-b74f-bd7ab4f91667":
        return <DancingPalette analyser={analyser} dataArray={dataArray} bufferLength={bufferLength} />;
      default:
        return <RGB analyser={analyser} dataArray={dataArray} bufferLength={bufferLength} />;
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
        background: linear-gradient(
          180deg,
          oklch(15% var(--ts-palette-dominant-c) var(--ts-palette-dominant-h) / 0.2) 0%,
          oklch(15% var(--ts-palette-dominant-c) var(--ts-palette-dominant-h) / 0.8) 73%,
          oklch(15% var(--ts-palette-dominant-c) var(--ts-palette-dominant-h) / 0.85) 100%
        );
      `}
    >
      {returnActiveVariant()}
    </div>
  );
}

export default Bars;
