import { useStore } from "/src/app/store";
import RemoveDislikeButton from "./pieces/RemoveDislikeButton";
import RemoveCastButton from "./pieces/RemoveCastButton";
// import RemoveUpgradeButton from "./pieces/RemoveUpgradeButton";
// import AddConfirmUnlike from "./pieces/AddConfirmUnlike";
import UserSnippet from "./pieces/UserSnippet";
import LyricsSize from "./pieces/LyricsSize";
import HighResSongImage from "./pieces/HighResSongImage";
import CenterSongControls from "./pieces/CenterSongControls";

function Piece() {
  const piecePrefs = useStore((state) => state.piece.prefs);

  return (
    <div id="ThemeSong-Piece">
      {piecePrefs["a2c1185b-1d9b-4c0f-aef3-8c7887374cc5"].enabled && <RemoveDislikeButton />}
      {piecePrefs["bf472cf5-689f-4be0-9eef-67c5cc8715e9"].enabled && <RemoveCastButton />}
      {/* {piecePrefs["2706684f-a566-4ad0-8341-50acb366ad7a"] && <AddConfirmUnlike />} */}
      {piecePrefs["2a606045-80f3-4aee-93de-cf3cd39d2920"].enabled && <UserSnippet />}
      {piecePrefs["895e0c50-c0a0-4752-8014-bd4cb5029e9b"].enabled && <LyricsSize />}
      {piecePrefs["f900c555-d735-439f-b926-d5e407ba25f8"].enabled && <HighResSongImage />}
      {piecePrefs["084b2bee-0686-4cc1-be6f-a9a6f87b8ee8"].enabled && <CenterSongControls />}
    </div>
  );
}

export default Piece;
