import { useEffect } from "react";

function DisableContextMenu() {
  useEffect(() => {
    if (document.getElementById("contents")) {
      document.getElementById("contents").addEventListener("contextmenu", (event) => {
        event.preventDefault();
      });
    }
    if (document.getElementById("queue")) {
      document.getElementById("queue").addEventListener("contextmenu", (event) => {
        event.preventDefault();
      });
    }
  }, []);

  return null;
}

export default DisableContextMenu;
