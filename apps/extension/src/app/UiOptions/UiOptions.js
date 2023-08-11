import RemoveDislikeButton from "./features/RemoveDislikeButton";
import RemoveCastButton from "./features/RemoveCastButton";
import RemoveUpgradeButton from "./features/RemoveUpgradeButton";
import AddConfirmUnlike from "./features/AddConfirmUnlike";

function UiOptions() {
  return (
    <div id="ThemeSong-UiOptions">
      <RemoveDislikeButton />
      <RemoveCastButton />
      <RemoveUpgradeButton />
      <AddConfirmUnlike />
    </div>
  );
}

export default UiOptions;
