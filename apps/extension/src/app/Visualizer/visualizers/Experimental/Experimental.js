import { css } from "@emotion/react";
import { useStore } from "/src/app/store";

import E1 from "./variants/E1";
import E2 from "./variants/E2";
import E4 from "./variants/E4";
import E5 from "./variants/E5";
import E7 from "./variants/E7";
import E8 from "./variants/E8";
// import E13 from "./variants/E13";
import E14 from "./variants/E14";
// import Fire from "./variants/Fire";

function Experimental({ analyser }) {
  const experimentalActiveVariant = useStore(
    (state) => state.visualizer.prefs["8315ac5f-0de5-4ef1-ac5d-a4bc6d7b21ae"].activeVariant
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
        background-color: rgb(0 0 0 / 0.6);
      `}
    >
      {
        [
          <E1 analyser={analyser} />,
          <E8 analyser={analyser} />,
          <E1 analyser={analyser} />,
          <E2 analyser={analyser} />,
          <E4 analyser={analyser} />,
          <E5 analyser={analyser} />,
          <E7 analyser={analyser} />,
          <E14 analyser={analyser} />,
        ][experimentalActiveVariant]
      }
    </div>
  );
}

export default Experimental;
