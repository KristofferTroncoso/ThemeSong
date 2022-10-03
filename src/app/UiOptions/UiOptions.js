import React from 'react';

import RemoveDislikeButton from './features/RemoveDislikeButton';
import RemoveCastButton from './features/RemoveCastButton';
import RemoveUpgradeButton from './features/RemoveUpgradeButton';
import AddConfirmUnlike from './features/AddConfirmUnlike';
import AddSongChangeNotification from './features/AddSongChangeNotification';

function UiOptions() {
  return (
    <div id="ThemeSong-UiOptions">
      <RemoveDislikeButton />
      <RemoveCastButton />
      <RemoveUpgradeButton />
      <AddConfirmUnlike />
      <AddSongChangeNotification />
    </div>
  )
}

export default UiOptions;