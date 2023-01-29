import { useStore } from "../../store";

import OffSettings from "../../Theme/themes/Off/OffSettings";
import DynamicSettings from "../../Theme/themes/Dynamic/DynamicSettings";
import StaticSettings from "../../Theme/themes/Static/StaticSettings";
import CustomSettings from "../../Theme/themes/Custom/CustomSettings";
import DittoSettings from "../../Theme/themes/Ditto/DittoSettings";

import ThemeButton from "../components/ThemeButton";

function ThemesPage() {
  const themes = useStore((state) => state.theme.themes);
  const activeTheme = useStore((state) => state.theme.activeTheme);

  let activeThemeSettings = () => {
    switch (activeTheme) {
      case "themeId:0":
        return <OffSettings />;
      case "themeId:6":
        return <DynamicSettings />;
      case "themeId:7":
        return <StaticSettings />;
      case "themeId:8":
        return <CustomSettings />;
      case "themeId:9":
        return <DittoSettings />;
      default:
        break;
    }
  };

  return (
    <div>
      <div
        className="ActiveThemeSettingsContainer"
        css={{
          background: "#111111",
          borderRadius: "5px",
          border: "2px solid #135eeb",
          margin: "5px",
          minHeight: "150px",
          padding: "5px 10px 10px",
        }}
      >
        {activeThemeSettings()}
      </div>
      <div
        className="ThemesContainer"
        css={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr 1fr",
          gridAutoRows: "1fr",
          gap: "16px",
          padding: "12px",
        }}
      >
        {themes.map((theme) => (
          <ThemeButton key={theme.themeId} theme={theme} />
        ))}
      </div>
    </div>
  );
}

export default ThemesPage;
