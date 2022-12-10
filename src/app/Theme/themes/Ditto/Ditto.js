import React from 'react';
import YouTubeMusicMobile from './YouTubeMusicMobile/YouTubeMusicMobile';
import AppleMusic from './AppleMusic/AppleMusic';
import { useStore } from '../../../store';

function Ditto() {
  const activeVariant = useStore(state => (
    state.theme.themePrefs.find(theme => (theme.themeId === "themeId:9")).activeVariant
  ));

  return (
    <div id="Ditto">
      {{
        "variantId:1": <YouTubeMusicMobile />,
        "variantId:2": <AppleMusic />,
      }[activeVariant]}
    </div>
  )
}

export default Ditto;