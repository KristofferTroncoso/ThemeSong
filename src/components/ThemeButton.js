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
        background: rgb(50, 50, 50);
        color: white;
        padding: 10px;
        :hover {
          background: ${isActive ? 'rgb(50, 50, 50)' : '#082a69'};
        }
      `} 
      onClick={e => {
        handleActiveThemeChange(themeDetails.themeId);
      }}
    >
      <h4>{themeDetails.name}</h4>
    </button>
  )
}

export default ThemeButton;


