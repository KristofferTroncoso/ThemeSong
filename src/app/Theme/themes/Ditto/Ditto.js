import YouTubeMusicMobile from './YouTubeMusicMobile/YouTubeMusicMobile';
import AppleMusic from './AppleMusic/AppleMusic';
import { useStore } from '../../../store';

function Ditto() {
  const activeVariant = useStore(state => (
    state.theme.themePrefs.find(theme => (theme.themeId === "themeId:9")).activeVariant
  ));

  function returnVariant() {
    switch (activeVariant) {
      case "variantId:1":
        return <YouTubeMusicMobile />
      case "variantId:2":
        return <AppleMusic />
      default:
        return <AppleMusic />
    }
  }

  return (
    <div id="Ditto">
      {returnVariant()}
    </div>
  )
}

export default Ditto;