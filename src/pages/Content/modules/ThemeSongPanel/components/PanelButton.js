/** @jsx jsx */
import { jsx, css } from '@emotion/react';
// import { Button } from '@mui/material';

function PanelButton({children, ...props}) {
  return (
    <button
      css={css`
        height: 45px;
        min-width: 45px;
        width: 45px;
        margin: 5px;
        background: rgba(0,0,0,0.4);
        color: white;
        border: 0;
        border-radius: 4px;
        :hover {
          background-color: rgba(255, 255, 255, 0.4);
        }
      `}
      {...props}
    >
      {children}
    </button>
  )
}

/* man... using ui component libraries really do just cause more headaches */

// function PanelButton({children, ...props}) {
//   return (
//     <Button
//       variant="contained" 
//       disableElevation 
//       css={css`
//         height: 45px;
//         min-width: 45px;
//         width: 45px;
//         margin: 5px;
//         background: rgba(0,0,0,0.4);
//         color: white;
//         :hover {
//           background-color: rgba(255, 255, 255, 0.4);
//         }
//       `}
//       {...props}
//     >
//       {children}
//     </Button>
//   )
// }

export default PanelButton;