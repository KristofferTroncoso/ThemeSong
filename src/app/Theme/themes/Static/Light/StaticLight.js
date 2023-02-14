import { useEffect } from "react";
import { static_light_css } from "./static-light-css";
import { useStore } from "/src/app/store";
import { menubar } from "../../selectors";

function StaticLight() {
  const { hue, saturation, lightness } = useStore(
    (state) => state.theme.themePrefs.find((theme) => theme.id === "b458eaae-0cbd-4a44-8847-c7a6a6ea1be8").light
  );

  useEffect(() => {
    menubar.content = `hsl(${hue}, ${saturation}%, ${lightness[0]}%)`;
  }, [hue, saturation, lightness]);

  return (
    <style id="StaticLight">
      {`:root {
        --ts-theme-static-hue: ${hue};
        --ts-theme-static-saturation: ${saturation}%;
        --ts-theme-static-topbarbg-light: ${lightness[0]}%;
        --ts-theme-static-playpagebg-light: ${lightness[1]}%;
        --ts-theme-static-playpageavtoggle-light: ${21 + (lightness[1] / 25) * 14}%;
        --ts-theme-static-playbarbg-light: ${lightness[2]}%;
        --ts-theme-static-bodybg-light: ${lightness[3]}%;
      }`}
      {static_light_css}
    </style>
  );
}

export default StaticLight;
