/** @jsx jsx */
import { jsx, css } from '@emotion/react'

function TabButton({isActive, children, ...props}) {
  return (
    <button 
      css={css`
        border-radius: 4px 4px 0 0;
        border-bottom: 0;
        width: 100px;
        height: 30px;
        background: ${isActive ? 'rgb(40, 40, 40)' : 'rgb(20, 20, 20)'};
        color: ${isActive ? '#fff' : '#aaa'};;
        padding: 2px;
        margin: 0 5px;
        :hover {
          background: ${isActive ? 'rgb(40, 40, 40)' : '#082a69'};
          color: #fff;
        }
      `}
      {...props}
    >
      <h4>{children}</h4>
    </button>
  )
}

export default TabButton;


