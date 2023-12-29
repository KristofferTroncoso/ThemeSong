// import { css } from "@emotion/react";
import { useEffect, useState } from "react";
import DataStoreSync from "../Extension/DataStoreSync";
// import PlayerPage from "../Popup/components/PlayerPage";
import SidePlayer from "./SidePlayer";
// import FacColorPicker from "./FacColorPicker";
import ThiefColorPicker from "./ThiefColorPicker";

function SidePanel() {
  const [load, setLoad] = useState(false);
  useEffect(() => {
    setTimeout(() => {
      setLoad(true);
    }, 100);
  }, []);

  return (
    <div>
      <DataStoreSync />
      <SidePlayer />
      {/* {load && <FacColorPicker />} */}
      {load && <ThiefColorPicker />}
    </div>
  );
}

export default SidePanel;
