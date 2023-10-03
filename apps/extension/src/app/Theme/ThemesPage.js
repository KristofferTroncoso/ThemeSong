import { css } from "@emotion/react";
import { useStore } from "/src/app/store";

import DynamicSettings from "./themes/Dynamic/DynamicSettings";
import StaticSettings from "./themes/Static/StaticSettings";
import AppleMusicSettings from "./themes/AppleMusic/AppleMusicSettings";

import ThemeButton from "../Popup/components/ThemeButton";
import ThemeIcons from "./components/ThemeIcons";

function ThemesPage() {
  const themes = useStore((state) => state.theme.themes);
  const activeTheme = useStore((state) => state.theme.prefs.activeTheme);
  const activeThemeDetails = useStore((state) => state.theme.themes.find((theme) => theme.id === activeTheme));

  let activeThemeSettings = () => {
    switch (activeTheme) {
      case "db8854e3-6753-4639-b244-c8091f3b9fcb":
        return <DynamicSettings />;
      case "b458eaae-0cbd-4a44-8847-c7a6a6ea1be8":
        return <StaticSettings />;
      case "76dd54c5-78a2-4ca3-9c16-3d0d1aab367f":
        return <AppleMusicSettings />;
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
          minHeight: "40px",
          padding: "5px 10px 10px",
        }}
      >
        <h2
          css={css`
            color: #ff3232;
            font-size: 16px;
            margin-bottom: 4px;
          `}
        >
          Theme: {activeThemeDetails.name}
        </h2>
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
          <ThemeButton
            key={theme.id}
            theme={theme}
            style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center" }}
          >
            <ThemeIcons themeId={theme.id} style={{ fontSize: 24 }} />
            <span style={{ fontSize: 10 }}>{theme.name}</span>
          </ThemeButton>
        ))}
      </div>
    </div>
  );
}

export default ThemesPage;
