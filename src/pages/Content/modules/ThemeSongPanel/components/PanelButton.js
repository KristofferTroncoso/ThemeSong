/** @jsx jsx */
import { jsx, css } from '@emotion/react';
import { styled } from '@mui/material/styles';
import Tooltip, { tooltipClasses } from '@mui/material/Tooltip';


const CustomTooltip = styled(({ className, ...props }) => (
  <Tooltip {...props} arrow classes={{ popper: className }} />
))(({ theme }) => ({
  [`& .${tooltipClasses.arrow}`]: {
    color: '#111',
    fontSize: '12px'
  },
  [`& .${tooltipClasses.tooltip}`]: {
    backgroundColor: "#111",
    top: '-7px !important',
    fontSize: '12px',
    padding: '4px 7px'
  },
}));

function PanelButton({hoverTextColor, hoverBgColor, children, title, ...props}) {
  return (
    <CustomTooltip 
      placement="bottom" 
      arrow
      title={title}
    >
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
          transition: background 0.2s ease-in-out;
          :hover {
            background: ${hoverBgColor || 'rgba(255, 255, 255, 0.4)'};
            color: ${hoverTextColor || '#fff'};
          }
        `}
        {...props}
      >
        {children}
      </button>
    </CustomTooltip>
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