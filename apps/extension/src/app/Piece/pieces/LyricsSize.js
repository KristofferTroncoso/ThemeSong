import { useStore } from "/src/app/store";
import { css } from "@emotion/react";
import StyledSlider from "../../Theme/components/StyledSlider";

export default function LyricsSize() {
  const lyricsFontSize = useStore((state) => state.piece.prefs["895e0c50-c0a0-4752-8014-bd4cb5029e9b"].size);
  return <style>{`.description.ytmusic-description-shelf-renderer {font-size: ${lyricsFontSize}px;}`}</style>;
}

export function LyricsSizeSettings() {
  const lyricsFontSize = useStore((state) => state.piece.prefs["895e0c50-c0a0-4752-8014-bd4cb5029e9b"].size);
  const setPiecePrefs = useStore((state) => state.piece.setPiecePrefs);

  function handleChange(e) {
    setPiecePrefs("895e0c50-c0a0-4752-8014-bd4cb5029e9b", { enabled: true, size: e.target.value });
  }

  return (
    <div
      css={css`
        width: 100px;
        display: flex;
        justify-content: center;
        align-items: center;
      `}
    >
      <StyledSlider value={lyricsFontSize} onChange={handleChange} step={1} min={16} max={24} marks />
      <span style={{ marginLeft: "10px" }}>{lyricsFontSize}px</span>
    </div>
  );
}
