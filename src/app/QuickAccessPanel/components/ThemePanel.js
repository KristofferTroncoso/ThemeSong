/** @jsx jsx */
import { jsx, css } from '@emotion/react';
import { useSelector, useDispatch } from 'react-redux';

import { changeActiveTheme } from '../../Theme/themesSlice';

import InvertColorsOffIcon from '@mui/icons-material/InvertColorsOff';
import { GiAtom } from 'react-icons/gi';
import ColorizeIcon from '@mui/icons-material/Colorize';

import PanelButton from './PanelButton';

function ThemePanel() {
  const dispatch = useDispatch();

  const activeTheme = useSelector(state => state.themes.activeTheme);

  const handleClick = (value) => {
    if (activeTheme !== value) {
      dispatch(changeActiveTheme(value));
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
            width: 60px;
            margin: 5px 4px 5px 5px;
            border: 0;
            border-radius: 8px 0 0 5px;
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
            width: 60px;
            margin: 0;
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
            min-width: 60px;
            width: 60px;
            margin: 5px 5px 5px 4px;
            border: 0;
            border-radius: 0 8px 5px 0;
            padding: 0;
          `}
          onClick={e => handleClick("themeId:7")}
        >
          <ColorizeIcon css={css`font-size: 24px;`} />
        </PanelButton>
      </div>
    </div>
  )
}

export default ThemePanel;