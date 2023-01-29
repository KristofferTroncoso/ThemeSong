import { useEffect } from "react";
import { menubar } from "../selectors";

function Off() {
  useEffect(() => {
    menubar.content = "#131313";
  }, []);

  return (
    <style id="Off">
      {`
      /* ThemeSong */
      /* Off Theme */

      /* custom styles are off */
      `}
    </style>
  );
}

export default Off;
