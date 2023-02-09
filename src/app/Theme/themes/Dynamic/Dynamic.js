import DynamicDark from "./Dark/DynamicDark";
import DynamicLight from "./Light/DynamicLight";
import DynamicSystem from "./System/DynamicSystem";
import { useStore } from "/src/app/store";

function Dynamic() {
  const appearance = useStore(
    (state) => state.theme.themePrefs.find((theme) => theme.id === "db8854e3-6753-4639-b244-c8091f3b9fcb").appearance
  );

  function returnVariant() {
    switch (appearance) {
      case "dark":
        return <DynamicDark />;
      case "light":
        return <DynamicLight />;
      case "system":
        return <DynamicSystem />;
      default:
        return <DynamicDark />;
    }
  }

  return <div id="Dynamic">{returnVariant()}</div>;
}

export default Dynamic;
