/** @jsx jsx */
import { jsx, css } from '@emotion/react'

function VisualizerButton({id, children, handleClick, isActive, name, ...props}) {
  return (
    <button 
      css={css`
        border-radius: 20px;
        border: 4px solid ${isActive ? '#135eeb' : '#454545'};
        width: 100%;
        min-height: 80px;
        height: 100%;
        background: #111;
        color: white;
        padding: 10px;
        :hover {
          background: ${isActive ? '#111' : '#082a69'};
        }
      `} 
      disabled={isActive}
      {...props}
    >
      <h4>{name}</h4>
    </button>
  )
}

export default VisualizerButton;


