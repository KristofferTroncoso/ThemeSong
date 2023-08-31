import { useStore } from "/src/app/store";
import RemoveDislikeButton from "./pieces/RemoveDislikeButton";
import RemoveCastButton from "./pieces/RemoveCastButton";
// import RemoveUpgradeButton from "./pieces/RemoveUpgradeButton";
// import AddConfirmUnlike from "./pieces/AddConfirmUnlike";
import UserSnippet from "./pieces/UserSnippet";

function Pieces() {
  const piecesPrefs = useStore((state) => state.pieces.prefs);

  return (
    <div id="ThemeSong-Pieces">
      {piecesPrefs["a2c1185b-1d9b-4c0f-aef3-8c7887374cc5"].enabled && <RemoveDislikeButton />}
      {piecesPrefs["bf472cf5-689f-4be0-9eef-67c5cc8715e9"].enabled && <RemoveCastButton />}
      {/* {piecesPrefs["2706684f-a566-4ad0-8341-50acb366ad7a"] && <AddConfirmUnlike />} */}
      {piecesPrefs["2a606045-80f3-4aee-93de-cf3cd39d2920"].enabled && <UserSnippet />}
    </div>
  );
}

export default Pieces;
