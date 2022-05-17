/** @jsx jsx */
import { jsx, css } from '@emotion/react'

function ThemeButton({themeDetails, handleActiveThemeChange, isActive}) {
  return (
    <button 
      css={css`
        border-radius: 20px;
        border: 4px solid ${isActive ? '#135eeb' : '#454545'};
        width: 100%;
        min-height: 110px;
        height: 100%;
        background: #111;
        color: white;
        padding: 10px;
        :hover {
          background: ${isActive ? '#111' : '#082a69'};
        }
      `} 
      disabled={isActive}
      onClick={e => {
        handleActiveThemeChange(themeDetails.themeId);
      }}
    >
      <h4>{themeDetails.name}</h4>
    </button>
  )
}

export default ThemeButton;


