import StaticDark from "../Dark/StaticDark";
import StaticLight from "../Light/StaticLight";
import useSystemPrefColorScheme from "../../../useSystemPrefColorScheme";

function StaticSystem() {
  const sysPrefColorScheme = useSystemPrefColorScheme();

  return <div id="StaticSystem">{sysPrefColorScheme === "dark" ? <StaticDark /> : <StaticLight />}</div>;
}

export default StaticSystem;
