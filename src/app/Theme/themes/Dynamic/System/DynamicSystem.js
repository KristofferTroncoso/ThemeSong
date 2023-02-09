import { useState, useEffect } from "react";
import DynamicDark from "../Dark/DynamicDark";
import DynamicLight from "../Light/DynamicLight";

function DynamicSystem() {
  const [isDark, setIsDark] = useState(window.matchMedia("(prefers-color-scheme: dark)").matches);

  useEffect(() => {
    console.log("Dynamic System");
    console.log("adding event listener");
    returnDarkOrLightTheme();
    window.matchMedia("(prefers-color-scheme: dark)").addEventListener("change", returnDarkOrLightTheme);

    return function cleanup() {
      console.log("removing");
      window.matchMedia("(prefers-color-scheme: dark)").removeEventListener("change", returnDarkOrLightTheme);
    };
  }, []);

  function returnDarkOrLightTheme(event) {
    console.log("DynamicSystem: returnDarkOrLightTheme");
    window.matchMedia("(prefers-color-scheme: dark)").matches ? setIsDark(true) : setIsDark(false);
  }

  return <div id="DynamicSystem">{isDark ? <DynamicDark /> : <DynamicLight />}</div>;
}

export default DynamicSystem;
