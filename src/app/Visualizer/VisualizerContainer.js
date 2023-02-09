import { useStore } from "/src/app/store";
import Visualizer from "./Visualizer";

function VisualizerContainer() {
  const isVisualizerOn = useStore((state) => state.visualizer.isVisualizerOn);

  return <div id="ThemeSong-VisualizerContainer">{isVisualizerOn && <Visualizer />}</div>;
}

export default VisualizerContainer;
