import { useState, useEffect } from "react";
import AppleMusicDark from "./AppleMusicDark";
import AppleMusicLight from "./AppleMusicLight";

function AppleMusicSystem() {
  const [isDark, setIsDark] = useState(window.matchMedia("(prefers-color-scheme: dark)").matches);

  useEffect(() => {
    console.log("Apple Music System");
    console.log("adding event listener");
    returnDarkOrLightTheme();
    window.matchMedia("(prefers-color-scheme: dark)").addEventListener("change", returnDarkOrLightTheme);

    return function cleanup() {
      console.log("removing");
      window.matchMedia("(prefers-color-scheme: dark)").removeEventListener("change", returnDarkOrLightTheme);
    };
  }, []);

  function returnDarkOrLightTheme(event) {
    console.log("AppleMusicSystem: returnDarkOrLightTheme");
    window.matchMedia("(prefers-color-scheme: dark)").matches ? setIsDark(true) : setIsDark(false);
  }

  return <div id="AppleMusicSystem">{isDark ? <AppleMusicDark /> : <AppleMusicLight />}</div>;
}

export default AppleMusicSystem;
