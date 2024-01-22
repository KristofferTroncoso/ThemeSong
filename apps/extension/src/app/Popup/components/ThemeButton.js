import { css } from "@emotion/react";
import { useStore } from "/src/app/store";

function ThemeButton({ theme, children, ...props }) {
  const [activeTheme, setActiveTheme] = useStore((state) => [
    state.theme.prefs.activeTheme,
    state.theme.setActiveTheme,
  ]);

  return (
    <button
      css={css`
        border-radius: 24px;
        border: 4px solid ${activeTheme === theme.id ? "#135eeb" : "#2d2d2d"};
        width: 100%;
        min-height: 60px;
        height: 100%;
        background: #111;
        color: white;
        padding: 10px;
        :hover {
          border: 4px solid ${activeTheme === theme.id ? "#135eeb" : "#3d5b91"};
        }
      `}
      disabled={activeTheme === theme.id}
      onClick={(e) => {
        setActiveTheme(theme.id);
      }}
      {...props}
    >
      {children}
    </button>
  );
}

export default ThemeButton;
