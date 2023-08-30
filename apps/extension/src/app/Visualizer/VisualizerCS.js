import { useEffect } from "react";
import { createRoot } from "react-dom/client";
import { useStore } from "/src/app/store";
import { css } from "@emotion/react";

import VisualizerToggleButton from "./components/VisualizerToggleButton";
import HideCaptions from "../Pieces/pieces/HideCaptions";
import Visualizer from "./Visualizer";

function addVisualizerContainer() {
  let ytmusicplayer = document.querySelector("ytmusic-player");
  let tsvisualizercontainer;

  if (document.getElementById("ts-visualizer-container")) {
    document.getElementById("ts-visualizer-container").remove();
  }

  ytmusicplayer.appendChild(document.createElement("div")).id = "ts-visualizer-container";
  tsvisualizercontainer = document.getElementById("ts-visualizer-container");
  tsvisualizercontainer.style.borderRadius = "inherit";

  ytmusicplayer.append(tsvisualizercontainer);

  const root = createRoot(tsvisualizercontainer);
  root.render(<VisualizerContainer />);
}

function addThemesongControlButtonsContainer() {
  const topRowButtons = document.querySelector(".top-row-buttons");
  let themesongControlButtonsContainer;

  if (document.getElementById("themesongControlButtonsContainer")) {
    document.getElementById("themesongControlButtonsContainer").remove();
  }

  themesongControlButtonsContainer = document.createElement("span");
  themesongControlButtonsContainer.id = "themesongControlButtonsContainer";

  topRowButtons.prepend(themesongControlButtonsContainer);

  const root = createRoot(themesongControlButtonsContainer);
  root.render(
    <div
      css={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        alignContent: "center",
        padding: "2px 0",
      }}
    >
      <HideCaptions />
      <VisualizerToggleButton />
    </div>
  );
}

function VisualizerCS() {
  useEffect(() => {
    addVisualizerContainer();
    addThemesongControlButtonsContainer();
  }, []);

  return null;
}

function VisualizerContainer() {
  const isVisualizerOn = useStore((state) => state.visualizer.isVisualizerOn);

  return (
    <div
      id="ThemeSong-VisualizerContainer"
      css={css`
        border-radius: inherit;

        div,
        canvas {
          border-radius: inherit;
        }
      `}
    >
      {isVisualizerOn && <Visualizer />}
    </div>
  );
}

export default VisualizerCS;
