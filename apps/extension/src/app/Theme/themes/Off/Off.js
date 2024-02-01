import { useEffect } from "react";
import { menubar } from "../../selectors";
import { dark_base_colors } from "../../css/colors/dark_base_colors";

function Off() {
  useEffect(() => {
    menubar.content = "#131313";
  }, []);

  return <style>{dark_base_colors}</style>;
}

export default Off;
