import { createRoot } from "react-dom/client";

import ContentScript from "./ContentScript";

console.log("Content Script loaded");

insertContentScriptContainer();

function insertContentScriptContainer() {
  const body = document.querySelector("body");

  let themesongMainContainer;

  if (!document.getElementById("ThemeSong-MainContainer")) {
    themesongMainContainer = document.createElement("div");
    themesongMainContainer.id = "ThemeSong-MainContainer";
    body.append(themesongMainContainer);
  }

  let themesongContainer;

  themesongContainer = document.createElement("div");
  themesongContainer.id = "ThemeSong-Container";

  themesongMainContainer = document.getElementById("ThemeSong-MainContainer");
  themesongMainContainer.append(themesongContainer);

  let root = createRoot(themesongContainer);
  root.render(<ContentScript root={root} />);
}
