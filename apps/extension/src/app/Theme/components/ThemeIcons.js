import InvertColorsOffIcon from "@mui/icons-material/InvertColorsOff";
import { GiAtom } from "react-icons/gi";
import ColorizeIcon from "@mui/icons-material/Colorize";
import AppleIcon from "@mui/icons-material/Apple";
import { SiYoutubemusic } from "react-icons/si";

function ThemeIcons({ themeId, ...props }) {
  return (
    <span {...props}>
      {
        {
          "416034f2-bfb8-46e8-9929-5805dd59a688": <InvertColorsOffIcon />,
          "db8854e3-6753-4639-b244-c8091f3b9fcb": <GiAtom />,
          "b458eaae-0cbd-4a44-8847-c7a6a6ea1be8": <ColorizeIcon />,
          "76dd54c5-78a2-4ca3-9c16-3d0d1aab367f": <AppleIcon />,
          "55f83bbd-d794-49a8-8912-2b53af3f1d3f": <SiYoutubemusic />,
        }[themeId]
      }
    </span>
  );
}

export default ThemeIcons;
