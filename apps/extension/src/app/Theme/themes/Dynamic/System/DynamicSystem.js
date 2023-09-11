import DynamicDark from "../Dark/DynamicDark";
import DynamicLight from "../Light/DynamicLight";
import useSystemPrefColorScheme from "../../../components/useSystemPrefColorScheme";

function DynamicSystem() {
  const sysPrefColorScheme = useSystemPrefColorScheme();

  return <div id="DynamicSystem">{sysPrefColorScheme === "dark" ? <DynamicDark /> : <DynamicLight />}</div>;
}

export default DynamicSystem;
