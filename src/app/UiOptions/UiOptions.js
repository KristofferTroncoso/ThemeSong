import React from 'react';
// import { useSelector } from 'react-redux';
// import create from 'zustand'

import RemoveDislikeButton from './features/RemoveDislikeButton';
import RemoveCastButton from './features/RemoveCastButton';
import RemoveUpgradeButton from './features/RemoveUpgradeButton';
import AddConfirmUnlike from './features/AddConfirmUnlike';
import AddSongChangeNotification from './features/AddSongChangeNotification';

// const useOptionsStore = create((set) => ({
//   removeDislikeButton: true,
//   removeCastButton: true,
//   removeUpgradeButton: true,
//   confirmOnUnlike: true,
//   toggleRemoveDislikeButton: () => set((state) => ({ removeDislikeButton: !state.removeDislikeButton }))
// }))

function UiOptions() {
  // const uiOptions = useSelector(state => state.uiOptions);

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