import StaticDark from "../Dark/StaticDark";
import StaticLight from "../Light/StaticLight";
import useSystemPrefColorScheme from "../../../components/useSystemPrefColorScheme";

function StaticSystem() {
  const sysPrefColorScheme = useSystemPrefColorScheme();

  return <div id="StaticSystem">{sysPrefColorScheme === "dark" ? <StaticDark /> : <StaticLight />}</div>;
}

export default StaticSystem;
