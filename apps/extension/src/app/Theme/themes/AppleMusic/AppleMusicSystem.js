import AppleMusicDark from "./AppleMusicDark";
import AppleMusicLight from "./AppleMusicLight";
import useSystemPrefColorScheme from "../../useSystemPrefColorScheme";

function AppleMusicSystem() {
  const sysPrefColorScheme = useSystemPrefColorScheme();

  return <div id="AppleMusicSystem">{sysPrefColorScheme === "dark" ? <AppleMusicDark /> : <AppleMusicLight />}</div>;
}

export default AppleMusicSystem;
