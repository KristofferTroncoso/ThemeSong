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

  let themesongContentContainer;

  themesongContentContainer = document.createElement("div");
  themesongContentContainer.id = "ThemeSong-ContentContainer";

  themesongMainContainer = document.getElementById("ThemeSong-MainContainer");
  themesongMainContainer.append(themesongContentContainer);

  let root = createRoot(themesongContentContainer);
  root.render(<ContentScript root={root} />);
}
