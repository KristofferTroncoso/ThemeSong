import { createRoot } from "react-dom/client";

import ContentScript from "./ContentScript";

console.log("Content Script loaded");

insertContentScriptContainer();

function insertContentScriptContainer() {
  const body = document.querySelector("body");
  let themesongContainer;

  if (document.getElementById("ThemeSong-Container")) {
    document.getElementById("ThemeSong-Container").remove();
  }

  themesongContainer = document.createElement("div");
  themesongContainer.id = "ThemeSong-Container";

  body.append(themesongContainer);

  createRoot(themesongContainer).render(<ContentScript />);
}
