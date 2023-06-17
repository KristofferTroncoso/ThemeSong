import { css } from "@emotion/react";
import { useStore } from "/src/app/store";

import E1 from "./variants/E1";
import E2 from "./variants/E2";
import E3 from "./variants/E3";
import E4 from "./variants/E4";
import E5 from "./variants/E5";
import E6 from "./variants/E6";
import E7 from "./variants/E7";
import E8 from "./variants/E8";
import E9 from "./variants/E9";
import E10 from "./variants/E10";
import E11 from "./variants/E11";
import E12 from "./variants/E12";
import E13 from "./variants/E13";
import E14 from "./variants/E14";
import E15 from "./variants/E15";
import E16 from "./variants/E16";

function Experimental({ analyser }) {
  const experimentalActiveVariant = useStore(
    (state) =>
      state.visualizer.visualizerPrefs.find((visualizer) => visualizer.id === "8315ac5f-0de5-4ef1-ac5d-a4bc6d7b21ae")
        .activeVariant
  );

  return (
    <div
      id="ThemeSong-Visualizer-Experimental-Container"
      css={css`
        position: absolute;
        bottom: 0;
        left: 0;
        height: 100%;
        width: 100%;
        border-radius: inherit;
        background-color: rgba(0, 0, 0, 0.4);
      `}
    >
      {
        [
          <E1 analyser={analyser} />,
          <E1 analyser={analyser} />,
          <E2 analyser={analyser} />,
          <E3 analyser={analyser} />,
          <E4 analyser={analyser} />,
          <E5 analyser={analyser} />,
          <E6 analyser={analyser} />,
          <E7 analyser={analyser} />,
          <E8 analyser={analyser} />,
          <E9 analyser={analyser} />,
          <E10 analyser={analyser} />,
          <E11 analyser={analyser} />,
          <E12 analyser={analyser} />,
          <E13 analyser={analyser} />,
          <E14 analyser={analyser} />,
          <E15 analyser={analyser} />,
          <E16 analyser={analyser} />,
        ][experimentalActiveVariant]
      }
    </div>
  );
}

export default Experimental;
