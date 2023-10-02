import { useStore } from "/src/app/store";

export default function QapIconAltSettings() {
  const icons = useStore(
    (state) => state.piece.pieces.find((piece) => piece.id === "34637b81-0c1a-4982-b130-0ff9ac232e4d").icons
  );
  const setPiecePrefs = useStore((state) => state.piece.setPiecePrefs);
  const selectedIcon = useStore((state) => state.piece.prefs["34637b81-0c1a-4982-b130-0ff9ac232e4d"].icon);

  function handleChange(e) {
    let newPref = { enabled: true, icon: e.target.value };
    setPiecePrefs("34637b81-0c1a-4982-b130-0ff9ac232e4d", newPref);
  }

  return (
    <div>
      <select name="icons" id="icons" value={selectedIcon} onChange={handleChange}>
        {icons.map((icon) => (
          <option value={icon} key={icon}>
            {icon}
          </option>
        ))}
      </select>
    </div>
  );
}
