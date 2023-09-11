import { useEffect } from "react";

export default function useLightAppearance() {
  useEffect(() => {
    const htmlEl = document.querySelector("html");
    htmlEl.setAttribute("dark", "false");
    htmlEl.setAttribute("light", "true");

    return function cleanup() {
      htmlEl.setAttribute("dark", "true");
      htmlEl.removeAttribute("light");
    };
  }, []);
}
