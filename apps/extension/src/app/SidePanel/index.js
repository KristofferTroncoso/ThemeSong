import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import SidePanel from "./SidePanel";
import "./index.css";

createRoot(document.getElementById("app-container")).render(
  <StrictMode>
    <SidePanel />
  </StrictMode>
);
