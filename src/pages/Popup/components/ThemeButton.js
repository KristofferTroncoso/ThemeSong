/** @jsx jsx */
import React from 'react';
import { jsx, css } from '@emotion/react'

import { useSelector, useDispatch } from 'react-redux';
import { changeActiveTheme } from '../../../redux/themes/themesSlice';

function ThemeButton({theme}) {
  const dispatch = useDispatch();

  const activeTheme = useSelector(state => state.themes.activeTheme);

  return (
    <button 
      css={css`
        border-radius: 16px;
        border: 4px solid ${activeTheme === theme.themeId ? '#135eeb' : '#454545'};
        width: 100%;
        min-height: 80px;
        height: 100%;
        background: #111;
        color: white;
        padding: 10px;
        :hover {
          background: ${activeTheme === theme.themeId ? '#111' : '#082a69'};
        }
      `} 
      disabled={activeTheme === theme.themeId}
      onClick={e => {
        dispatch(changeActiveTheme(theme.themeId))
      }}
    >
      <h4>{theme.name}</h4>
    </button>
  )
}

export default ThemeButton;


