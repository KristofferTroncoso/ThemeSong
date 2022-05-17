/** @jsx jsx */
import { jsx, css } from '@emotion/react'

function VariantButton({id, children, handleClick, isActive, name, ...props}) {
  return (
    <button 
      css={css`
        border-radius: 4px;
        border: 2px solid ${isActive ? '#135eeb' : '#454545'};
        width: 100%;
        min-height: 30px;
        height: 30px;
        background: #111;
        color: white;
        :hover {
          background: ${isActive ? '#111' : '#082a69'};
        }
      `} 
      disabled={isActive}
      {...props}
    >
      {name}
    </button>
  )
}

export default VariantButton;


