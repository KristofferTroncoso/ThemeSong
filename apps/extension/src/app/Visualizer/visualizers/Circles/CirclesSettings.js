import { useStore } from "/src/app/store";
import VariantButton from "../../components/VariantButton";

function CirclesSettings() {
  const circlesVisualizer = useStore((state) =>
    state.visualizer.visualizers.find((visualizer) => visualizer.id === "685d0ec7-5c52-4e48-a43d-11184a39f3da")
  );
  const circlesPrefs = useStore((state) => state.visualizer.prefs["685d0ec7-5c52-4e48-a43d-11184a39f3da"]);
  const setSingleVisualizerPrefs = useStore((state) => state.visualizer.setSingleVisualizerPrefs);

  const handleVisualizersChange = (visualizerObject) => {
    setSingleVisualizerPrefs("685d0ec7-5c52-4e48-a43d-11184a39f3da", visualizerObject);
  };

  const handleVariantClick = (e, id) => {
    let copy = { ...circlesPrefs };
    copy.activeVariant = id;
    handleVisualizersChange(copy);
  };

  if (!circlesVisualizer) {
    return <h1>hi</h1>;
  } else {
    return (
      <div>
        <div>
          <p style={{ marginBottom: "6px" }}>Style Variant:</p>
          <div
            className="VariantsContainer"
            css={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr 1fr 1fr",
              gridAutoRows: "1fr",
              gap: "10px",
            }}
          >
            {circlesVisualizer.variants.map((variant) => (
              <VariantButton
                key={variant.id}
                id={variant.id}
                onClick={(e) => handleVariantClick(e, variant.id)}
                isActive={variant.id === circlesPrefs.activeVariant}
                name={variant.name}
              />
            ))}
          </div>
        </div>
      </div>
    );
  }
}

export default CirclesSettings;
