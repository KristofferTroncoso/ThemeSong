import DynamicDark from './Dark/DynamicDark';
import DynamicLight from './Light/DynamicLight';
import DynamicSystem from './System/DynamicSystem';
import { useStore } from '../../../store';

function Dynamic() {
  const appearanceSetting = useStore(state => (
    state.theme.themePrefs.find(theme => (theme.themeId === "themeId:6")).appearanceSetting
  ));
  
  function returnVariant() {
    switch (appearanceSetting) {
      case "dark":
        return <DynamicDark />
      case "light":
        return <DynamicLight />
      case "system":
        return <DynamicSystem />
      default:
        return <DynamicDark />
    }
  }

  return (
    <div id="Dynamic">
      {returnVariant()}
    </div>
  )
}

export default Dynamic;