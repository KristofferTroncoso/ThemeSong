import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import Options from "./Options";
import "./index.css";

createRoot(document.getElementById("app-container")).render(
  <StrictMode>
    <Options />
  </StrictMode>
);
