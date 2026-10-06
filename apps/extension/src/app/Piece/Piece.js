import { useStore } from "/src/app/store";
import UserSnippet from "./pieces/UserSnippet";
import LyricsSize from "./pieces/LyricsSize";
import HighResSongImage from "./pieces/HighResSongImage";

function Piece() {
  const piecePrefs = useStore((state) => state.piece.prefs);

  return (
    <div id="ThemeSong-Piece">
      {piecePrefs["2a606045-80f3-4aee-93de-cf3cd39d2920"].enabled && <UserSnippet />}
      {piecePrefs["895e0c50-c0a0-4752-8014-bd4cb5029e9b"].enabled && <LyricsSize />}
      {piecePrefs["f900c555-d735-439f-b926-d5e407ba25f8"].enabled && <HighResSongImage />}
    </div>
  );
}

export default Piece;
