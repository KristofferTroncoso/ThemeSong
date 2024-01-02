import { useEffect, useState } from "react";
import DataStoreSync from "../Extension/DataStoreSync";
import SidePlayer from "./SidePlayer";
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
      {load && <ThiefColorPicker />}
      <SidePlayer />
    </div>
  );
}

export default SidePanel;
