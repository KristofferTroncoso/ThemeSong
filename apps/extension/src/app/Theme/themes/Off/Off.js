import { useEffect } from "react";
import { menubar } from "../../selectors";

function Off() {
  useEffect(() => {
    menubar.content = "#131313";
  }, []);

  return null;
}

export default Off;
