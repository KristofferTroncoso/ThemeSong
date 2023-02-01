import StaticDark from "./Dark/StaticDark";
import StaticLight from "./Light/StaticLight";
import StaticSystem from "./System/StaticSystem";
import { useStore } from "../../../store";

function Static() {
  const appearanceSetting = useStore(
    (state) =>
      state.theme.themePrefs.find(
        (theme) => theme.id === "b458eaae-0cbd-4a44-8847-c7a6a6ea1be8"
      ).appearanceSetting
  );

  function returnVariant() {
    switch (appearanceSetting) {
      case "dark":
        return <StaticDark />;
      case "light":
        return <StaticLight />;
      case "system":
        return <StaticSystem />;
      default:
        return <StaticDark />;
    }
  }

  return <div id="Static">{returnVariant()}</div>;
}

export default Static;
