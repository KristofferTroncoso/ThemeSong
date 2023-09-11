import { css } from "@emotion/react";
import { useStore } from "/src/app/store";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import LightModeIcon from "@mui/icons-material/LightMode";
import { CgDarkMode } from "react-icons/cg";
import PanelButton from "../../../QuickAccessPanel/components/PanelButton";

function AppleMusicSettings() {
  const appleMusicPrefs = useStore((state) => state.theme.prefs["76dd54c5-78a2-4ca3-9c16-3d0d1aab367f"]);
  const setSingleThemePrefs = useStore((state) => state.theme.setSingleThemePrefs);

  function handleDarkLightChange(value) {
    if (appleMusicPrefs.appearance !== value) {
      setSingleThemePrefs("76dd54c5-78a2-4ca3-9c16-3d0d1aab367f", { appearance: value });
    }
  }

  return (
    <div>
      <div
        css={css`
          display: flex;
          justify-content: center;
          align-items: center;
        `}
      >
        <PanelButton
          title="Dark Mode"
          css={css`
            height: 38px;
            min-width: 45px;
            width: 60px;
            margin: 0 2px;
            background: rgb(255 255 255 / 0.2);
            background: ${appleMusicPrefs.appearance === "dark" && "rgb(255 255 255 / 0.8)"};
            color: ${appleMusicPrefs.appearance === "dark" && "#9d00ff"};
            border: 0;
            border-radius: 6px;
            :hover {
              color: #9d00ff;
            }
          `}
          value="dark"
          onClick={(e) => handleDarkLightChange("dark")}
        >
          <DarkModeIcon fontSize="medium" />
        </PanelButton>
        <PanelButton
          title="Light Mode"
          css={css`
            height: 38px;
            min-width: 45px;
            width: 60px;
            margin: 0 2px;
            background: rgb(255 255 255 / 0.2);
            background: ${appleMusicPrefs.appearance === "light" && "rgb(255 255 255 / 0.8)"};
            color: ${appleMusicPrefs.appearance === "light" && "#de9800"};
            border: 0;
            border-radius: 6px;
            :hover {
              color: #fcad00;
            }
          `}
          value="light"
          onClick={(e) => handleDarkLightChange("light")}
        >
          <LightModeIcon
            css={css`
              font-size: 26px;
            `}
          />
        </PanelButton>
        <PanelButton
          title="Use Device Setting"
          css={css`
            height: 38px;
            min-width: 45px;
            width: 60px;
            margin: 0 2px;
            background: rgb(255 255 255 / 0.2);
            background: ${appleMusicPrefs.appearance === "system" && "rgb(255 255 255 / 0.8)"};
            color: ${appleMusicPrefs.appearance === "system" && "#009961"};
            border: 0;
            border-radius: 6px;
            :hover {
              color: #009961;
            }
          `}
          value="system"
          onClick={(e) => handleDarkLightChange("system")}
        >
          <CgDarkMode size={24} />
        </PanelButton>
      </div>
    </div>
  );
}

// function AppleMusicSettings() {
//   const appleMusicPrefs = useStore((state) => state.theme.prefs["76dd54c5-78a2-4ca3-9c16-3d0d1aab367f"]);
//   const setSingleThemePrefs = useStore((state) => state.theme.setSingleThemePrefs);

//   function handleDarkLightChange(e) {
//     setSingleThemePrefs("76dd54c5-78a2-4ca3-9c16-3d0d1aab367f", { appearance: e.target.value });
//   }

//   return (
//     <div>
//       <form
//         onSubmit={(e) => e.preventDefault()}
//         css={css`
//           margin: 20px 0;
//           text-align: left;
//         `}
//       >
//         <label
//           htmlFor="appearance"
//           css={css`
//             margin-right: 8px;
//           `}
//         >
//           Appearance:
//         </label>
//         <select
//           id="appearance"
//           name="appearance"
//           value={appleMusicPrefs.appearance}
//           onChange={handleDarkLightChange}
//           css={css`
//             background-color: #333;
//             color: white;
//             border: 1px solid #888;
//             border-radius: 4px;
//             outline: 0;
//           `}
//         >
//           <option value="light">Light</option>
//           <option value="dark">Dark</option>
//           <option value="system">Use Device Setting</option>
//         </select>
//       </form>
//     </div>
//   );
// }

export default AppleMusicSettings;
