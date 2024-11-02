import { useEffect } from "react";
import { createRoot } from "react-dom/client";
import YtmLogo from "./YtmLogo";

function LogoContainer() {
  useEffect(() => {
    const observer = new MutationObserver(() => {
      let targetNode = document.querySelector("ytmusic-nav-bar .left-content a");

      if (targetNode) {
        observer.disconnect(); // Stop observing once the element is found

        let testNode = targetNode.querySelector("picture");

        if (testNode) {
          targetNode.removeChild(testNode);
        }

        let logoContainer = document.createElement("div");
        logoContainer.id = "ts-logo-container";

        if (!document.getElementById("ts-logo-container")) {
          targetNode.append(logoContainer);
        } else {
          document.getElementById("ts-logo-container").remove();
          targetNode.append(logoContainer);
        }

        createRoot(logoContainer).render(<YtmLogo />);
      }
    });

    // Observe changes to the entire document
    observer.observe(document.body, { childList: true, subtree: true });

    return () => observer.disconnect();
  }, []);

  return null;
}

export default LogoContainer;
