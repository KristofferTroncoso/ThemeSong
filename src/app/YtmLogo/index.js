import { useEffect } from "react";
import { createRoot } from "react-dom/client";
import YtmLogo from "./YtmLogo";

function LogoContainer() {
  useEffect(() => {
    const ytLogoDiv = document.querySelector("ytmusic-nav-bar .left-content a");
    let testNode = document.querySelector("ytmusic-nav-bar .left-content a picture");

    if (testNode) {
      ytLogoDiv.removeChild(testNode);
    }

    let logoContainer = document.createElement("div");
    logoContainer.id = "ts-logo-container";

    if (document.getElementById("ts-logo-container") === null) {
      ytLogoDiv.append(logoContainer);
    } else {
      document.getElementById("ts-logo-container").remove();
      ytLogoDiv.append(logoContainer);
    }

    createRoot(logoContainer).render(<YtmLogo />);
  }, []);

  return null;
}

export default LogoContainer;
