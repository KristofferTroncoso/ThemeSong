import { useEffect } from "react";

export default function useLightAppearance() {
  useEffect(() => {
    const htmlEl = document.querySelector("html");
    htmlEl.removeAttribute("dark");
    htmlEl.setAttribute("light", "true");

    return function cleanup() {
      htmlEl.setAttribute("dark", "true");
      htmlEl.removeAttribute("light");
    };
  }, []);
}
