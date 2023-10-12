import { useEffect, useState } from "react";

function useSystemPrefColorScheme() {
  const [isDark, setIsDark] = useState(window.matchMedia("(prefers-color-scheme: dark)").matches);

  useEffect(() => {
    console.log("adding event listener");
    returnDarkOrLightTheme();
    window.matchMedia("(prefers-color-scheme: dark)").addEventListener("change", returnDarkOrLightTheme);

    return function cleanup() {
      console.log("removing");
      window.matchMedia("(prefers-color-scheme: dark)").removeEventListener("change", returnDarkOrLightTheme);
    };
  }, []);

  function returnDarkOrLightTheme(event) {
    window.matchMedia("(prefers-color-scheme: dark)").matches ? setIsDark(true) : setIsDark(false);
  }

  return isDark ? "dark" : "light";
}

export default useSystemPrefColorScheme;
