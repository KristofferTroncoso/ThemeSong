import { useStore } from "../../store";
import Visualizer from "./Visualizer";

function VisualizerContainer() {
  const isVisualizerOn = useStore((state) => state.visualizer.isVisualizerOn);

  return <div>{isVisualizerOn && <Visualizer />}</div>;
}

export default VisualizerContainer;
