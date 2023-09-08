import { useEffect } from "react";
import { useStore } from "/src/app/store";

function IconColor() {
  const sortedPalette = useStore((state) => state.palette.sortedPalette);

  useEffect(() => {
    chrome.runtime.sendMessage({
      iconColor: {
        lightDominant: `oklch(70% ${sortedPalette[0].oklch[1] * 1.2} ${sortedPalette[0].oklch[2]})`,
        darkDominant: `oklch(50% ${sortedPalette[0].oklch[1] * 1.2} ${sortedPalette[0].oklch[2]})`,
        secondary: `hsl(${sortedPalette[1].hsl[0] * 360} ${sortedPalette[1].hsl[1] * 200}% 85%)`,
      },
    });
  }, [sortedPalette]);
}

export default IconColor;
