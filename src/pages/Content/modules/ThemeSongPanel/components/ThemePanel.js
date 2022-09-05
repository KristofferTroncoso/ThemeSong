/** @jsx jsx */
import { jsx, css } from '@emotion/react';
import { useSelector, useDispatch } from 'react-redux';

import { changeActiveTheme } from '../../../../../redux/themes/themesSlice';

import InvertColorsOffIcon from '@mui/icons-material/InvertColorsOff';
import { GiAtom } from 'react-icons/gi';
import ColorizeIcon from '@mui/icons-material/Colorize';

function ThemePanel() {
  const dispatch = useDispatch();

  const activeTheme = useSelector(state => state.themes.activeTheme);

  const handleClick = (value) => {
    dispatch(changeActiveTheme(value));
    chrome.storage.local.set({activeTheme: value}, () => console.log('chrome.storage.local.set({activeTheme}'));
  }

  return (
    <div css={css`margin-bottom: 2px;`}>
      <h3 css={css`padding: 2px 5px;`}>Theme</h3>
      <div css={css`display: flex; justify-content: start; align-items: center;`}>
        <button
          title="Off / YTM Default"
          css={css`
            height: 42px;
            min-width: 45px;
            width: 60px;
            margin: 5px 4px 5px 5px;
            background: ${activeTheme === "themeId:0" ? 'rgba(255,255,255,0.8)' : 'rgba(0,0,0,0.4)'};
            color: ${activeTheme === "themeId:0" ? '#1565e6' : 'white'};
            border: 0;
            border-radius: 8px 0 0 5px;
            :hover {
              background-color: rgba(255, 255, 255, 0.4);
              color: #000;
            }
          `}
          onClick={e => handleClick("themeId:0")}
        >
          <InvertColorsOffIcon title="Off / YTM Default" css={css`font-size: 20px;`} />
        </button>
        <button
          title="Dynamic"
          css={css`
            height: 42px;
            min-width: 45px;
            width: 60px;
            margin: 0;
            background: ${activeTheme === "themeId:6" ? 'rgba(255,255,255,0.8)' : 'rgba(0,0,0,0.4)'};
            color: ${activeTheme === "themeId:6" ? '#1565e6' : 'white'};
            border: 0;
            :hover {
              background-color: rgba(255, 255, 255, 0.4);
              color: #fcad00;
            }
          `}
          onClick={e => handleClick("themeId:6")}
        >
          <GiAtom title="Dynamic" size={28} css={css`font-weight: 700;`} />
        </button>
        <button
          title="Static"
          css={css`
            height: 42px;
            min-width: 60px;
            width: 60px;
            margin: 5px 5px 5px 4px;
            background: ${activeTheme === "themeId:7" ? 'rgba(255,255,255,0.8)' : 'rgba(0,0,0,0.4)'};
            color: ${activeTheme === "themeId:7" ? '#1565e6' : 'white'};
            border: 0;
            border-radius: 0 8px 5px 0;
            padding: 0;
            :hover {
              background-color: rgba(255, 255, 255, 0.4);
              color: #fcad00;
            }
          `}
          onClick={e => handleClick("themeId:7")}
        >
          <ColorizeIcon title="Static" css={css`font-size: 24px;`} />
        </button>
      </div>
    </div>
  )
}

export default ThemePanel;