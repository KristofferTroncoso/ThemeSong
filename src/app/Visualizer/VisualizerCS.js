import { useEffect } from "react";
import { createRoot } from "react-dom/client";

import VisualizerToggleButton from "./components/VisualizerToggleButton";
import HideCaptions from "./components/HideCaptions";
import VisualizerContainer from "./VisualizerContainer";

function addVisualizerContainer() {
  let ytmusicplayer = document.querySelector("ytmusic-player");
  let tsvisualizercontainer;

  if (document.getElementById("ts-visualizer-container")) {
    document.getElementById("ts-visualizer-container").remove();
  }

  ytmusicplayer.appendChild(document.createElement("div")).id = "ts-visualizer-container";
  tsvisualizercontainer = document.getElementById("ts-visualizer-container");
  tsvisualizercontainer.style.borderRadius = "inherit";
  // tsvisualizercontainer.style.border = "1px solid lightgreen";

  if (!tsvisualizercontainer) {
    ytmusicplayer.appendChild(document.createElement("canvas")).id = "ts-visualizer-canvas";
  }

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
        margin: "8px 0",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        alignContent: "center",
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

export default VisualizerCS;
