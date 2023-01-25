import { css } from '@emotion/react';

import InvertColorsOffIcon from '@mui/icons-material/InvertColorsOff';
import { GiAtom } from 'react-icons/gi';
import ColorizeIcon from '@mui/icons-material/Colorize';
import TheaterComedyIcon from '@mui/icons-material/TheaterComedy';

import PanelButton from '../QuickAccessPanel/components/PanelButton';
import { useStore } from '../store';

function ThemePanel() {
  const activeTheme = useStore(state => state.theme.activeTheme);
  const changeActiveTheme = useStore(state => state.theme.changeActiveTheme);

  const handleClick = (value) => {
    if (activeTheme !== value) {
      changeActiveTheme(value);
      chrome.storage.local.set({activeTheme: value}, () => console.log('chrome.storage.local.set({activeTheme}'));
    } else {
      console.log('Already active')
    }
  }

  return (
    <div css={css`margin-bottom: 2px;`}>
      <h3 css={css`padding: 2px 5px;`}>Theme</h3>
      <div css={css`display: flex; justify-content: start; align-items: center;`}>
        <PanelButton
          title="Off / YTM Default"
          bgColor={activeTheme === "themeId:0" && 'rgba(255,255,255,0.8)'}
          color={activeTheme === "themeId:0" && '#000'}
          hoverColor="#000"
          css={css`
            height: 42px;
            min-width: 45px;
            width: 54px;
            margin: 0 2px;
            border: 0;
            border-radius: 5px 0 0 5px;
          `}
          onClick={e => handleClick("themeId:0")}
        >
          <InvertColorsOffIcon css={css`font-size: 20px;`} />
        </PanelButton>
        <PanelButton
          title="Dynamic"
          bgColor={activeTheme === "themeId:6" && 'rgba(255,255,255,0.8)'}
          color={activeTheme === "themeId:6" && '#1565e6'}
          hoverColor="#1565e6"
          css={css`
            height: 42px;
            min-width: 45px;
            width: 54px;
            margin: 0 2px;
            border: 0;
            border-radius: 0;
          `}
          onClick={e => handleClick("themeId:6")}
        >
          <GiAtom size={28} css={css`font-weight: 700;`} />
        </PanelButton>
        <PanelButton
          title="Static"
          bgColor={activeTheme === "themeId:7" && 'rgba(255,255,255,0.8)'}
          color={activeTheme === "themeId:7" && '#ff3700'}
          hoverColor="#ff3700"
          css={css`
            height: 42px;
            min-width: 45px;
            width: 54px;
            margin: 0 2px;
            border: 0;
            border-radius: 0;
          `}
          onClick={e => handleClick("themeId:7")}
        >
          <ColorizeIcon css={css`font-size: 24px;`} />
        </PanelButton>
        <PanelButton
          title="Ditto"
          bgColor={activeTheme === "themeId:9" && 'rgba(255,255,255,0.8)'}
          color={activeTheme === "themeId:9" && '#9c5cad'}
          hoverColor="#9c5cad"
          css={css`
            height: 42px;
            min-width: 45px;
            width: 54px;
            margin: 0 2px;
            border: 0;
            border-radius: 0 5px 5px 0;
            padding: 0;
          `}
          onClick={e => handleClick("themeId:9")}
        >
          <TheaterComedyIcon css={css`font-size: 28px;`} />
        </PanelButton>
      </div>
    </div>
  )
}

export default ThemePanel;